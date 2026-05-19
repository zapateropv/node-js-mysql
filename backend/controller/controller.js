import { pool } from "../database/db.js"

//get all users
export const getAllUsers = async(req, res) => {
    const users = await pool.query('SELECT * FROM user')
     res.json(users[0])
    
}

//get single user
export const singleUser = async(req, res) => {
    const {id} = req.params
    const users = await pool.query('SELECT * FROM user WHERE id = ?', id)
    res.json(users[0])
    
}

//insert user
export const insertUsers = async(req, res) => {

    const {firstName, lastName, email, age, course} = req.body
    const insertQuery = 'INSERT INTO user (firstName,lastName, email, age, course) VALUES(?, ?, ?, ?, ?)'
    await pool.query(insertQuery, [firstName, lastName, email, age, course])
    res.send('user inserted')
    
}

//update user

export const updateUser= async(req, res) => {

    const {firstName, lastName, email, age ,course} = req.body
    const {id} = req.params
    const updateQuery = 'UPDATE user SET firstName = ?, lastName = ?, email = ?, age = ?, course = ? WHERE id = ? '
    await pool.query(updateQuery, [firstName, lastName, email, age, course, id])
    res.send('user updated!')
}

//delete user
export const deleteUser = async(req, res) => {
    const {id} = req.params
    const deleteQuery = 'DELETE FROM user WHERE id = ?'
    await pool.query(deleteQuery, id)
    res.send('user deleted')
}
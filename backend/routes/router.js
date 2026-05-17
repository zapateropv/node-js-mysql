import express from 'express'
import { pool } from '../database/db.js'


export const router = express.Router()

router.get('/', async (req, res) => {
    const users =  await pool.query('SELECT * FROM user')
    res.json(users[0])
    
})

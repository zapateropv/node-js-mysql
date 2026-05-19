import express from 'express'
import { pool } from '../database/db.js'
import { getAllUsers, insertUsers, singleUser, updateUser, deleteUser } from '../controller/controller.js'

export const router = express.Router()

router.get('/:id', singleUser)
router.get('/', getAllUsers)
router.post('/', insertUsers)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
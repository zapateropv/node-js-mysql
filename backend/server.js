import express from "express";
import { pool } from "./database/db.js";
import { router } from "./routes/router.js";
import dotenv from 'dotenv'
import { json } from "express";
import  cors  from 'cors'

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(json())
app.use(router)



app.listen(port, (req, res) => {
    console.log('server connected')
})
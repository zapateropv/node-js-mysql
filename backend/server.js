import express from "express";
import { pool } from "./database/db.js";
import { router } from "./routes/router.js";

const app = express()
const PORT = 8000

app.use(router)


app.listen(PORT, (req, res) => {
    console.log('server connected')
})
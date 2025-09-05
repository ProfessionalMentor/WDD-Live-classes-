import express from "express"
import { connectDB } from "./config/dbconfig.js"

const app = express()
const port = process.env.PORT || 3000


// Db connection
connectDB()




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

export default app
import express from "express"
import fs from "fs/promises"
import "dotenv/config"
import { readJson } from "./utils.js"
import router from "./routes/products.js"

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(router)



app.get("/", (req, res)=>{
    return res.json({
        success: true,
        data: {message:"You have arrived at the online bookstore"}
    })
})

app.get("/health", (req,res)=>{
    return res.json({
        success:true,
        data:{status: "healthy connection"}
    })
})



app.listen(port, ()=>{console.log(`Server is listening on port ${port}`)})

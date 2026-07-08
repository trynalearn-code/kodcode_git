import express from "express"
import fs from "fs/promises"

const app = express()

app.use(express.json())



app.get("/", (req, res)=>{
    return res.json({
        success: true,
        data: {message:"You have arrived at the online bookstore"}
    })
})

app.get("/health", (req,res)=>{
    return res.json({
        success:true,
        data:{status: "healthy"}
    })
})

app.listen(3000, ()=>{console.log("Server is listening on port 3000")})
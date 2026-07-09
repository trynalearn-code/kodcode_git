import express from "express"
import fs from "fs/promises"
import "dotenv/config"

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
        data:{status: "healthy connection"}
    })
})

async function readJson(jsonFile) {
    const data = await fs.readFile(jsonFile, "utf-8")
    return JSON.parse(data)
}

async function writeJson(jsonFile, content) {
    await fs.writeFile(jsonFile, JSON.stringify(content))
}

app.listen(process.env.PORT, ()=>{console.log(`Server is listening on port ${process.env.PORT}`)})
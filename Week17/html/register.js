import express from "express"

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));


app.post("/register", (req, res)=>{
    console.log(req.body)
    if (!req.body.email || !req.body.fullname) {
        return res.status(400).json({
            message:"You must enter both name and email"
        })}
    return res.status(201).json({
        message:"Success!",
        user:req.body
    })
})

app.listen(3000, ()=>
    {console.log("server running on http://localhost:3000")})
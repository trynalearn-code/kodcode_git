import express from "express"
const app = express()
//1.
function requestlogger(req, res, next){
    console.log(req.method, req.path)
    next()
}
app.use(requestlogger)
app.get("/users", (req,res)=>{
    return res.send("users")
})
app.post("/users", (req,res)=>{
    return res.send("users")
})

function requireLogin(req,res,next){
    if (!req.body.userId){
        return res.status(401).json("not logged in")
    }
    req.userId = req.user.id
    next()
}
    
function requireAdmin(req,res,next){
    if (req.body.role !="admin"){
        return res.status(403).json({
            error:"Admins only"
        })
    }
    next()
}


app.listen(3000)
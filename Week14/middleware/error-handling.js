const express = require("express");
const { error } = require("node:console");
const app = express()

// //1.
// function globalMiddleware(req, res, next){
//     req.requestTime = new Date().toISOString()
//     next()
// }
// app.use(globalMiddleware)

// //.2
// app.get("/time", (req,res)=>{
//     res.send(`Request received at ${req.requestTime}`)
// })

// //3.
// function validateBody(req, res, next){
//     if (!req.body){
//         return res.status(400).json({
//             message: "Your body can't be empty"
//         })
//     }
//     next()
// }

// //4.
// app.post("/data", validateBody, (req, res)=>{
//     res.send("data received")
// })

// //5.
// function validatePass(req, res, next){
//     if (req.body.password.length < 8){
//         return res.status(400).json({
//             message: "Your password must be at least 8 characters"
//         })
//     }
//     next()
// }

//6.
function validateRole(req, res, next){
    if (req.query.admin !== "true"){
        return res.status(403).json({
            message:"Forbidden, admins only"
        })
    }
    next()
}

//7.
app.get("/settings", validateRole, (req, res)=>{
    res.send("Welcome Admin")
})

// //8.
// app.get("/error-handler", (req, res)=>{(
//     throw new Error("Something went wrong")
// )})

//9.
function errorHandler(err, req, res, next){
    res.status(500).json({
        error:true,
        message: err.message
    })
    next()
}

//10.
function queryQ(req, res, next){
    if (!req.query.q){
        return res.status(400).json({
            message:"You're missing the query"
        })
    }
    next()
}




















app.listen(3000)
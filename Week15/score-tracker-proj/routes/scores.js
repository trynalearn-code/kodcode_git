import { Router } from "express";

const router = Router()

router.post("/scores", (req, res)=>{
    console.log(req.body)
    res.status(201).json({
        success: true,
        message: "created score"
    })
})

export default router
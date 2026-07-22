import { Router } from "express";
import db from "../db.js";
const router = Router()

router.post("/scores", async (req, res)=>{
    try {
        const scores = db.collection("scores")
        await scores.insertOne(req.body)
        res.status(201).json({
            success: true,
            message: "created score"
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Error"
        })
    }
})

router.get("/scores", async (req, res)=>{
    try {
        const scores = db.collection("scores")
        const allScores = await scores.find().toArray()
        res.status(200).json({
            success:true,
            data:allScores
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error"
        })
    }
})

export default router
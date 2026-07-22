import { Router } from "express";
import db from "../db.js";

const router = Router()

router.get("/leaderboard/:game", async (req, res) => {
    try {
        const scores = db.collection("scores")
        const leaderboard = await scores.aggregate([
         { $match: {
            game:req.params.game
           }},
            {$sort: {
            points: -1
            }},
            {$limit:10
        }
        ]).toArray()
        res.status(200).json({success:true, data:leaderboard})
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message: "error"
        })
    }
})

router.get("/leaderboard/global", async (req, res)=>{
    try {
        const scores = db.collection("scores")
        const leaderboard = await scores.aggregate([
            {$sort:{points:-1}},
            {$limit:10}
        ]).toArray()
        res.status(200).json({
            success:true,
            stats:leaderboard
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Error"
        })
    }
})




export default router
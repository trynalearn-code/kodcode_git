import db from "../db.js";
import { Router } from "express";

const router = Router()

router.get("/games", async (req, res)=>{
    try {
      const scores = db.collection("scores") 
      const games = await scores.distinct("game")
      return res.status(200).json({
        success:true,
        data:games
      })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message: "error"
        })
    }
})

router.get("/stats", async (req, res)=>{
    try {
    const scores = db.collection("scores")
    const stats = scores.aggregate([
        {$facet:{
            highestScore:[{$sort:{points:-1}},
            {$limit:1}
        ],
            totalScores:[
                {$count:"total"}
            ],
            mostPopular:[
            {$group:{_id:"$game"},
            count:{$sum:1}},
            {$sort:{count:-1}},
            {$limit:1}
            ],
            averageScore: [
    {
        $group: {
            _id: null,
            average: {
                $avg: "$points"
            }
        }
    }
]}}
    ]).toArray()
    res.status(200).json({
        success:true,
        data:stats
    })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message: "error"
        })
    }
})


export default router
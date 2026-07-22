import db from "./db.js";
import "dotenv/config"
import express from "express"
import scoresRouter from "./routes/scores.js";
import leaderboardRouter from "./routes/leaderboard.js";
import statsRouter from "./routes/stats.js"

const app = express()

app.use(express.json())
app.use(scoresRouter)
app.use(leaderboardRouter)
app.use(statsRouter)

app.listen(process.env.PORT, ()=>console.log(`listening on port ${process.env.PORT}`))
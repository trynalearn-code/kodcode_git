import db from "./db.js";
import "dotenv/config"
import express from "express"
import router from "./routes/scores.js";

const app = express()

app.use(express.json())
app.use(router)

app.listen(process.env.PORT, ()=>console.log(`listening on port ${process.env.PORT}`))
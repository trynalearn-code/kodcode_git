import "dotenv/config"
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI)

await client.connect()
console.log("Connected to MongoDB")

const db = client.db("score-tracker")

export default db
import express from "express"
import logger from "./middleware/logger.js"
import orders from "./routes/orders.js"

const app = express()
app.use(express.json())
app.use(logger)
app.use("/orders" , orders)












app.listen(3000, ()=> console.log("Listening on port 3000"))
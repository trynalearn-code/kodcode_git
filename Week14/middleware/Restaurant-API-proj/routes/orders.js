import express from "express"
import { readJson, writeJson } from "../utils/readwrite.js"
import validateOrder from "../middleware/validateOrder.js"


const router = express.Router()

router.get("/", async (req, res)=>{
    const orders = await readJson("orders.json")
    res.json(orders)
    })

router.post("/", validateOrder, async (req, res)=>{
    const orders = await readJson("orders.json")
    const newOrder = {
        id:Date.now(),
        ...req.body
    }
    orders.push(newOrder)
    await writeJson("orders.json", orders)
    res.status(201).json({
        success:true,
        message:"new order created successfully"
    })
})

export default router
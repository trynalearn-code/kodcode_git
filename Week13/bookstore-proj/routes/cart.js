import express from "express"
import { readJson, writeJson } from "../utils"
import fs from "fs/promises"


const router = express.Router()

router.get("/cart", async (req, res)=>{
    try{
    if (!req.query.customerId){
        return res.status(400).json({
            success: false,
            message: "Missing id"
        })
    }
    const data = await readJson("./db/customers.json")
    const customer = data.find(c=>c.customerId === req.query.customerId)
    if (!customer){
        const credentials={
            customerId:req.query.customerId,
            balance:Number(process.env.STARTING_BALANCE),
            cart:[],
            createdAt: new Date().toISOString()
        }
        data.push(credentials)
        await writeJson("./db/customers.json", data)
        return res.status(200).json({
            success:true,
            data:{message: credentials.cart}
        })
    }
    return res.status(200).json({
        success:true,
        data:{cart:customer.cart}
    })
    } catch(error){
        console.error(error)
        return res.status(500).json({
            success:false,
            message: "internal service error"
        })
    }
})

router.post("/cart/items", async (req, res)=>{
    try{
    if (!req.body.customerId || !req.body.productId || !req.body.quantity){
        return res.status(400).json({
            succes:false,
            message: "You must enter customerId, productId, and quantity!"
        })
    }
    const cust = await readJson("./db/customers.json")
    const checks = cust.find(c=>c.id === req.body.customerId)
    if (!checks){
        const customer = {
            customerId: req.body.customerId,
            balance:process.env.STARTING_BALANCE,
            cart:[req.body.productId],
            createdAt:new Date().toISOString()
        }
    }
    if (req.body.quantity <=0){
        return res.status(400).json({
            success:false,
            message: "Quantity must be greater than 0"
        })
    }
    const data = await readJson("./db/products.json")
    const check = data.find(c=>c.id === req.body.productId)
    if (!check){
        return res.status(400).json({
            success:false,
            message:"We can't find that product"
        })
    }
    if (req.body.quantity>data.check){
        return res.status(400).json({
            success:false,
            message:`sorry, we only have ${check.stock} of that book`
        })
    }
    const datacust = await readJson("./db/customers.json")
    const checkcust = datacust.find(c=>c.customerId === req.body.customerId)
    if (!checkcust){
        return res.status(400).json({
            success:false,
            message:"We can't find that customer"
        })
    }
    } catch (error){
        console.error(error)
        return res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
    return res.status(200).json({
        success:true,
        data:{message:"Successfully added to cart"}
    })
})
export default router
import express from "express"
import { readJson } from "../utils.js"

const router = express.Router()

router.get("/products", async (req, res)=>{
    let data = await readJson("./db/products.json")
    if (req.query.inStock === "true"){
        data = data.filter(d=>d.stock > 0)
    }
    if (req.query.maxPrice){
        data = data.filter(d=>d.price < Number(req.query.maxPrice))
    }
    if (req.query.search){
        data = data.filter(d=>d.name.includes(req.query.search))
    }
    return res.json({
        success:true,
        data:{products:data}
    })
})

export default router
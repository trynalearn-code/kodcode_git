import http from "http"
import { readHeroes } from "./storage/heroStorage.js"

const server = http.createServer(async(req, res)=>{
    if (req.url === "/heroes" && req.method === "GET"){
        res.setHeader("Content-Type", "application/json")
        const heroes = await readHeroes()
        res.end(JSON.stringify({
            success:true,
            data:heroes
        }))
    }else if (req.url.startsWith("/heroes") && req.method === "GET"){
        res.setHeader("Content-Type", "application/json")
        const separate = req.url.split("/")
        const id = Number(separate[2])
        const heroes = await readHeroes()
        const heroID = heroes.filter(hero=>hero.id === id)
        if (!heroID){
            res.statusCode = 404
            res.end(JSON.stringify({
                success:false,
                message:"Hero not found"
            }))
        }
        res.end(JSON.stringify({
            success:true,
            data:heroID
        }))
    }
    else if (req.url.startsWith("/heroes") && req.method==="POST"){

    }
    else{
        res.statusCode=404;
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify({
            success:false,
            message:"Route not found"
        }))
    }

})
server.listen(3000)

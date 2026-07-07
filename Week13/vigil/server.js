import http from "http"
import { readHeroes, writeHeroes } from "./storage/heroStorage.js"

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
        if (!heroes){
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
        let body = "";
        req.on("data", (chunk)=>{
            body +=chunk
        })
        const heroes = await readHeroes()
        heroes.push(parsed)
        await writeHeroes(heroes)
        
        req.on("end", async () => {
            const parsed = JSON.parse(body)
            res.end(JSON.stringify({
                success: true,
                data:parsed
        }))
    })
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

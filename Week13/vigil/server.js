import http from "http"
import { generateID, readHeroes, writeHeroes } from "./storage/heroStorage.js"
import { validator } from "./validator.js"

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
        req.on("end", async () => {
        const parsed = JSON.parse(body)
        const check = validator(parsed)
        if (check !=true) {
            res.statusCode = 400
            return res.end(JSON.stringify({
                success:false,
                message:check
            }))
        }
        const heroes = await readHeroes()
        const existing = heroes.find(hero=>hero.codeName ===parsed.codeName)
        if (existing){
            res.statusCode = 409
            return res.end(JSON.stringify({
                success:false,
                message:"Hero already in system"
            }))
        }
        const newHero= {
            id:generateID(heroes),
            ...parsed,
            status:parsed.status || "active",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
        heroes.push(newHero)
        await writeHeroes(heroes)
        res.setHeader("content-Type", "application/json")
        res.statusCode=201
            res.end(JSON.stringify({
                success: true,
                data:newHero
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

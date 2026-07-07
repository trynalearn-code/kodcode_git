import fs from "fs/promises"
import Math from Math 

export async function readHeroes() {
    const data = await fs.readFile("./heroes.json","utf-8")
    return JSON.parse(data)
}

export async function writeHeroes(data){
    await fs.writeFile("./heroes.json", JSON.stringify(data, null, 4))
    }

export async function generateID(heroes) {
    if (!heroes) return 1
    const ids = heroes.map(h=>h.id)
    return Math.max(ids)+1
}
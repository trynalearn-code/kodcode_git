import fs from "fs/promises"


export async function readHeroes() {
    const data = await fs.readFile("./heroes.json","utf-8")
    return JSON.parse(data)
}

export async function writeHeroes(data){
    await fs.writeFile("./heroes.json", JSON.stringify(data, null, 4))
    }

export function generateID(heroes) {
    if (!heroes.length) return 1
    const ids = heroes.map(h=>h.id)
    return Math.max(...ids)+1
}
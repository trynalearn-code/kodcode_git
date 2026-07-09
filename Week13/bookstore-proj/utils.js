import fs from "fs/promises"

export async function readJson(jsonFile) {
    const data = await fs.readFile(jsonFile, "utf-8")
    return JSON.parse(data)
}

export async function writeJson(jsonFile, content) {
    await fs.writeFile(jsonFile, JSON.stringify(content))
}
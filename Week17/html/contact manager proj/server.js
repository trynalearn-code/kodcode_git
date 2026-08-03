import express from "express"

const app = express()

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "./" })
})

app.post("/contact", (req, res) => {
    console.log(req.body)
    return res.status(201).send(req.body)
})

app.listen(3000, () => {
    console.log("server running on http://localhost:3000")
})
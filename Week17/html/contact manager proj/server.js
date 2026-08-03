import express from "express"
import fs from "fs/promises"
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "./" })
})

app.post("/contact", async (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.subject || !req.body.message){
        return res.status(400).send("All fields are required.")
    }
    const contact = await fs.readFile("contacts.json", "utf-8")
    const parsed = JSON.parse(contact)
    const newcontact = {id:Date.now(), ...req.body, createdAt: new Date().toISOString()}
    parsed.push(newcontact)
    await fs.writeFile("contacts.json", JSON.stringify(parsed, null, 3))
    res.send("Contact Saved!")
})

app.get("/admin", async (req, res) => {    
    const file = await fs.readFile("contacts.json", "utf-8");

    const contacts = JSON.parse(file);

    const rows = contacts.map(contact => {
        return `
            <tr>
                <td>${contact.name}</td>
                <td>${contact.email}</td>
                <td>${contact.subject}</td>
                <td>${contact.message}</td>
                <td>${contact.createdAt}</td>
            </tr>
        `;
    }).join("");

    res.send(`
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Date</th>
                </tr>
            </thead>

            <tbody>
                ${rows}
            </tbody>
        </table>
    `);
});
})

app.delete("/contact/:id", (req, res)=>{
    
})

app.listen(3000, () => {
    console.log("server running on http://localhost:3000")
})
import { useState } from "react"
import type { Book, Movie } from "../Content"

interface AddItemForm {
    active: "books" | "movies"
    onSubmit: (item:Book | Movie)=> void
}

const AddItem = ({active, onSubmit}:AddItemForm) => {
    const [title, setTitle] = useState("")
    const [person, setPerson] = useState("")
    const [number, setNumber] = useState("")

function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    
    if (active === "books"){
        const newBook: Book = {
            id:crypto.randomUUID(),
            title:title,
            author:person,
            pages: Number(number),
            finished: false
        }
        onSubmit(newBook)
    }
    else{
        const newMovie: Movie = {
            id:crypto.randomUUID(),
            title:title,
            director:person,
            durationMinutes:Number(number),
            finished:false
        }
        onSubmit(newMovie)
    }
    setTitle("")
    setPerson("")
    setNumber("")
}

  return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
        <input
        type="text"
        placeholder={active === "books" ? "Author":"Director"}
        value={person}
        onChange={(e)=> setPerson(e.target.value)}
        />
        <input
        type="text"
        placeholder={active === "books" ? "Pages" : "Duration"}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit">Add</button>
    </form>
  )
}

export default AddItem
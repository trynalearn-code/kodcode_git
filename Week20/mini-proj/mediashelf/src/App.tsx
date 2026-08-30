import { useState } from "react";
import Tabs from "./components/Tabs";
import type { Book, Movie } from "./Content";
import AddItem from "./components/AddItem";



const booksList: Book[] = [
  {
    id: "1",
    title: "Harry Potter",
    author: "J.K. Rowling",
    pages: 350,
    finished: false,
  },
  {
    id: "2",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 300,
    finished: true,
  },
];

const moviesLists: Movie[] = [
  {
    id: "1",
    title: "Interstellar",
    director: "Christopher Nolan",
    durationMinutes: 169,
    finished: true,
  },
  {
    id: "2",
    title: "Gladiator",
    director: "Ridley Scott",
    durationMinutes: 155,
    finished: false,
  },
];
function App() {
  const [active, setActive] = useState<"books" | "movies">("books")
  function handleChange(tab: "books" | "movies") {
    setActive(tab)
  }
  const [books, setBooks] = useState<Book[]>([
    {
      id: "1",
      title: "Harry Potter",
      author: "J.K. Rowling",
      pages: 350,
      finished: false,
    },
    {
      id: "2",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      pages: 300,
      finished: true,
    },
  ]);
  const [movies, setMovies] = useState<Movie[]>([
    {
      id: "1",
      title: "Interstellar",
      director: "Christopher Nolan",
      durationMinutes: 169,
      finished: true,
    },
    {
      id: "2",
      title: "Gladiator",
      director: "Ridley Scott",
      durationMinutes: 155,
      finished: false,
    },
  ])

  function handleAddItem(item: Book | Movie) {
    if ("author" in item) {
      setBooks((prev) => [...prev, item])
    }
    else {
      setMovies((prev) => [...prev, item])
    }
  }
  function changeFinished(id: string) {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id
          ? { ...book, finished: !book.finished }
          : book
      ))
  }

  return (
    <>
      <h1>MediaShelf</h1>
      <Tabs active={active} onChange={handleChange} />

      {active === "books" ? (
        <div>
          {books.map((book) => (
            <p key={book.id}
            onClick={()=> changeFinished(book.id)}
            >
              {book.title} - {book.author}
            </p>
          ))}
        </div>
      ) : (<div>
        {movies.map((movie) => (
          <p key={movie.id}>{movie.title} - {movie.director}</p>
        ))}

      </div>)}
      <AddItem active={active} onSubmit={handleAddItem} />
    </>
  )
}

export default App

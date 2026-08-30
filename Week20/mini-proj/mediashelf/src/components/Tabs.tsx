
interface TabProps {
    active: "books" | "movies"
    onChange: (tab: "books" | "movies") => void
}
const Tabs = ({ active, onChange }: TabProps) => {
    return (
        <div>
            <button onClick={() => onChange("books")}>Books</button>
            <button onClick={() => onChange("movies")}>Movies</button>

        </div>
    )
}

export default Tabs
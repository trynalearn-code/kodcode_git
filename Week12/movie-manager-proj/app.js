import input from 'analiza-sync'
import fs from "fs"

function menu(){
console.log(`
==============================
Movie Collection Manager
==============================
1. Show all movies
2. Show by id
3 Create new movie
4. Delete movie
5. Update rate
6 Search by name
7. Sort by genre
8. Show statistics
9. Exit`)
}
let choice = 0
while (choice !== 9){
    menu()
    choice = Number(input("What is your choice? "))
    if (choice===1){
        getMovieList()
    }
    else if (choice === 2){
        const id = input("What is the ID? ")
        getMovieByID(id)
    }
    
}

// const choice = input("please choose an option\n")





function getMovieList() {
    fs.readFile("data/movies.json", "utf-8", (err, data) => {
        if (err) {
            console.log("Error: ", err)
            return
        }
        const movies = JSON.parse(data)
        for (const movie of movies) {
            console.log(movie.id, movie.title)
        }
    })
}

function getMovieByID(id) {
    fs.readFile("data/movies.json", "utf-8", (err, data) => {
        if (err) {
            console.log("Error: ", err)
            return
        }
        const movies = JSON.parse(data)
        for (const movie of movies) {
            if (movie.id === id) {
                console.log(movie)
            }
        }
    })
}

const generateID = (movies) => {
    if (!movies.length) return 1;
    return Math.max(...movies.map((movie) => movie.id)) + 1;
}

function createMovie(name, genre, year, rating) {
    fs.readFile("data/movies.json", "utf-8", (err, data) => {
        if (err) {
            console.log("Error", err.message)
            return
        }
        const movies = JSON.parse(data)
        const newMovie = { "id": generateID(movies), "name": name, "genre": genre, "year": year, "rating": rating }
        movies.push(newMovie)
        fs.writeFile("data/movies.json", JSON.stringify(movies, null, 4), (err) => {
            if (err) {
                console.log("Error: ", err.message)
                return
            }
            console.log("Your movie was added successfully")
        })
    })
}



function deleteMovie(id){
    fs.readFile("data/movies.json", "utf-8", (err,data)=>{
        if (err){
            console.log("Error: ", err);
            return;
        }
        const movies = JSON.parse(data)
        const newList = movies.filter(movie=>movie.id!==id)
        fs.writeFile("data/movies.json", JSON.stringify(newList), (err)=>{
            if (err){
                console.log("Error: ", err.message)
            }
        })
    })
}


function updateRating(id, rating){
    fs.readFile("data/movies.json", "utf-8", (err,data)=>{
        if (err){
            console.log("Error: ", err.message)
        }
        const movies = JSON.parse(data)
        const mov = movies.find(movie=>movie.id === id)
        console.log(mov);
        
        if (!mov){
            console.log("Your movie can't be found")
            return
        }
        mov.rating= rating
        fs.writeFile("data/movies.json", JSON.stringify(movies, null, 4), (err)=>{
            if (err){
                console.log("Error: ", err.message)
            }
        })
    })
}
updateRating(4, 3.5)

function searchByName(title){
    fs.readFile("data/movies.json", "utf-8", (err, data)=>{
        if (err){
            console.log("Error: ", err.message)
        }
        const movies = JSON.parse(data)
        const movie = movies.find(mov=>mov.title.toLowerCase() === title.toLowerCase())
        console.log(movie)
    })
}
searchByName("inception")
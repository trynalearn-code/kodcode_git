
// //5.
// async function changes() {
//     try{
//         const attempt = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//         if (!attempt.ok){
//             throw new Error("It didn't work")
//         }
//         const res = await attempt.json()
//         console.log(res)
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// //6.
// async function done() {
//     return "Done"
// }

// //7.
// async function squared(num) {
//     return (num**2)
// }

// //14.
// async function twoReads(params) {
//     try{
//         const first = await fetch("https://jsonplaceholder.typicode.com/users/1")
//         if (!first.ok){
//             throw new Error("There was an issue with the first fetch")
//         }
//         console.log(first)
//         const convertj = await first.json()
//         console.log(convertj)
//         const second = await fetch ("https://jsonplaceholder.typicode.com/posts/1")
//         if (!second.ok){
//             throw new Error("There was an issue with the second fetch")
//         }
//         const convertj2 = await second.json()
//         console.log(convertj2)}
//     catch(err){
//         console.log(err)
//     }
// }

// //15.
// async function threeCalls(){
//     try{
//     const links = ["https://jsonplaceholder.typicode.com/users/1",
//                     "https://jsonplaceholder.typicode.com/posts/1",
//                     "https://jsonplaceholder.typicode.com/todos/1"]
//     const responses = await Promise.all(links.map(link=>fetch(link)))
//         for (const link of responses){
//         if (!link.ok){
//             throw new Error("your link has an issue")
//         }
//         const convert = await link.json()
//         console.log(convert)
//     }
//                 }
//     catch(err){
//         console.log(err)
//     }
// }

// //18.
// async function getAll() {
//     try{
//         const links = ["https://jsonplaceholder.typicode.com/users/1",
//                     "https://jsonplaceholder.typicode.com/posts/1",
//                     "https://jsonplaceholder.typicode.com/todos/1"]
//         for (const link of links){
//             const grab = await fetch(link)
//             if (!grab.ok){
//                 throw new Error("We got a problem with the link")
//             }
//             const result = await grab.json()
//             console.log(result)
//         }            
//         }                
//     catch(err){
//         console.log(err)
//     }
// }

//19.
async function getAllParallel() {
    try {
        const urls = [
            "https://jsonplaceholder.typicode.com/users/1",
            "https://jsonplaceholder.typicode.com/posts/1",
            "https://jsonplaceholder.typicode.com/todos/1"
        ];
    const fetched = await Promise.all(urls.map(link=>fetch(link)))
        for (const res of fetched){
            if (!res.ok){
                throw new Error("got an issue with a link")
            }
            const convert = await res.json()
            console.log(convert)
        }
    }
    catch(err){
        console.log(err)
    }
}
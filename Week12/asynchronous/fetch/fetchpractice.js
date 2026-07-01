
// //1.
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(stuff=>stuff.json())
// .then(stuff=>{console.log(stuff.title)})
// .catch((err)=>console.log(err))

// //2.
// fetch("https://jsonplaceholder.typicode.com/notfound")
// .then(ans => {
//     console.log(ans.status)
//     if (!ans.ok){
//         throw new Error(ans.status);
//     }
//     return ans.json();
// })
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err))

// //3.
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response=>{
//     console.log(response)
//     if (!response.ok){
//         throw new Error(response.status)
//     }
//    return response.json()
// })
// .then(data=> data.forEach(post => {console.log(post.title)}))
// .catch(err=>console.log(err))


// //4.
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method:"POST",
//     headers:{
//         "content-type":"application/json"
// },
//     body:JSON.stringify({
//         "title":"New title",
//         "body": "body post",
//         "userId": 1
//     })
// })
// .then(response=>{
//     console.log(response)
//     if (!response.ok){
//         throw new Error(response.status)
//     }
//     return response.json()
//     })
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err))

// //5.
// async function getUserById(id){
// try{
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     if (!response.ok){
//         throw new Error(`${id} not found`)
//     }
//     const user = await response.json();
//     console.log(user)
// }
// catch(err){
//     console.log(err)
// }
// }

// //6.
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response=> {console.log(response)
//         console.log(response)
//         if (!response.ok){
//             throw new Error(response.status)
//         }
//         return response.JSON
//     })

//7.
async function getAllData(){
    try{
        const data = [
            "https://jsonplaceholder.typicode.com/users/1",
            "https://jsonplaceholder.typicode.com/posts/1",
            "https://jsonplaceholder.typicode.com/todos/1"
        ]
        const data1= await Promise.all(data.map(data=>fetch(data)))
        for (const res of data1){
        if (!res.ok){
            throw new Error("missing data")
        }}
        const result = await Promise.all(data1.map(res=>res.json()))
        console.log(result)
    }
    
    catch(err){
        console.log("Error: ", err)
    }
}
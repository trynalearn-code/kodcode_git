import { rejects } from "assert"
import { resolve } from "dns"
import fs, { read } from "fs"

// //1.
// function writeFileAsPromise (filePath, content){
//     return new Promise((resolve,reject) =>{
//     fs.writeFile(filePath, content, (err)=>{
//         if (err){
//             reject(err)
//         }
//         else{
//             resolve()
//         }
//     })
// })
// }

// writeFileAsPromise("data/message.txt", "Hello from Promise")
//     .then(()=>{
//         console.log("File successfully created")
//     })
//     .catch((err)=>{
//         console.log("Error: ", err)
//     })

// //2.
// function readFileAsPromise(filePath){
//     return new Promise((resolve, reject)=>{
//         fs.readFile(filePath, "utf-8", (err, data)=>{
//             if (err){
//                 reject(err)
//             }
//             resolve(data)
//         } )
//     }
// )}

// readFileAsPromise("data/message.txt")
//     .then((data)=>{
//         console.log("File content: ")
//         console.log(data)
//     })
//     .catch((err)=>{
//         console.log("Error: ", err)
//     }
// )

// //3.
// function readFileAndCount(filePath){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(filePath, "utf-8", (err, data)=>{
//             if (err){
//                 return reject(err)
//             }
//             resolve((data.length))
//         })
//     }
// )}

// readFileAndCount("data/message.txt")
//     .then((data)=>{
//         console.log("Number of lines: " , data)
//     })
//     .catch((err)=>{
//         console.log("Error: ", err)
//     })

// //4.
function writeFileAsPromise(filePath, content){
    return new Promise((resolve, reject)=>{
        fs.writeFile(filePath, content, (err)=>{
            if (err){
                return reject(err)
            }
            resolve(content)
        })
    })
}
// function appendFileAsPromise(filePath, content){
//     return new Promise((resolve,reject)=>{
//         fs.appendFile(filePath, content, (err)=>{
//             if (err){
//                 return reject(err)
//             }
//             resolve(content)
//         })
//     })
// }

// writeFileAsPromise("data/step1.txt", "This is step 1")
//     .then(()=>{
//     console.log("Step 1 done")
//     writeFileAsPromise("data/step2.txt", "this is step 2")
// })
//         .then(()=>{
//         console.log("Step 2 done")
//     })
//     writeFileAsPromise("data/step3.txt", "this is step 3")
//     .catch((err)=>{
//         console.log("Error: ", err)
//     })

// //5.
function readFileAsPromise(filePath){
    return new Promise((resolve,reject)=>{
    fs.readFile(filePath, "utf-8", (err, data)=>{
        if (err){
            return reject (err)
        }
        resolve(data)
    })
})
}
// let data1,data2,data3;
// readFileAsPromise("data/step1.txt")
//     .then((data)=>{
//         console.log("step 1 worked")
//         data1 = data
//     return readFileAsPromise("data/step2.txt")
// })
//     .then((data)=>{
//         console.log("step 2 done")
//         data2 = data
//         return readFileAsPromise("data/step3.txt")
//     })
//         .then((data)=>{
//             console.log("step 3 completed")
//         data3 = data
//         console.log(data1)
//         console.log(data2)
//         console.log(data3)
//         })
//         .catch((err)=>{
//             console.log("Error: ", err)

// })

// //6.
// writeFileAsPromise("data/report-title.txt", "Daily Report")
// .then(()=>{
//     return writeFileAsPromise("data/report-body.txt", "Everything is working")
// })
//     .then(()=>{
//         return Promise.all([readFileAsPromise("data/report-title.txt"), readFileAsPromise("data/report-body.txt")])
//     })
//     .then(([title, body])=>{
//         const final = title + "\n" + body
//         return writeFileAsPromise("data/final-report.txt", final)
//     })
//     .catch((err)=>{
//         console.log("Error", err)
//     })

// //7.
// import fs from "fs/promises"
// function readFileAsPromise2(filePath){
//     return fs.readFile(filePath, "utf-8")
// }

//8.
import fs from "fs/promises"
  
let data1,data2,data3;
fs.readFile("data/step1.txt", "utf-8")
    .then((data)=>{
        console.log("step 1 worked")
        data1 = data
    return fs.readFile("data/step2.txt", "utf-8")
})
    .then((data)=>{
        console.log("step 2 done")
        data2 = data
        return fs.readFile("data/step3.txt", "utf-8")
    })
        .then((data)=>{
            console.log("step 3 completed")
        data3 = data
        console.log(data1)
        console.log(data2)
        console.log(data3)
        })
        .catch((err)=>{
            console.log("Error: ", err)

})

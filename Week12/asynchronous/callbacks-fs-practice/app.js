const fs = require('fs');

//1.
// fs.writeFile("data/message.txt", "Hello from Node fs!",(err)=>{
//     if(err){
//         console.log("error",err);
//         return
//     }
//     console.log("file created successfully")
// })

// //2.
// fs.readFile("data/message.txt", "utf8",(err, data)=>{
//     if (err){
//         console.log("error", err)
//         return
//     }
//     console.log(data)
// })

// //3.
// console.log("Start")
// fs.readFile("data/message.txt", "utf8",(err,data)=>{
//     if (err){
//         console.log("Error!", err)
//         return
//     }
//     console.log(data)
// })
// console.log("End")

// //4.
// fs.readFile("data/not-exists.txt", (err,data)=>{
//     if (err){
//         console.log("Error!", err)
//         console.log("Could not read file")
//         return
//     }
//     console.log(data)
// }
// )

// //5.
// function readTextFile(filePath, callback){
//     fs.readFile(filePath, "utf8", (err, data)=>{
//         if (err){
//             callback(err)
//         }
//         else{
//             callback(null, data)
//         }
//     })
// }
// readTextFile('data/message.txt', function (err, content) {
//   if (err) {
//     console.log('Error:', err);
//     return;
//   }
//   console.log(content);
// });

// //6.
// fs.appendFile("data/message.txt","\nThis line was added later.",(err)=>{
//     if (err){
//         console.log("Error:", err)
//          return
//     }

//     fs.readFile("data/message.txt", "utf8", (err,data)=>{
//         if (err){
//             console.log("Error:",err)
//              return
//         }
//         console.log(data)
//     })
// })

// // 7.
// fs.writeFile("data/log.txt", "Log started \n", (err)=>{
//     if (err){
//         console.log("Error", err)
//         return
//     }

//     fs.appendFile("data/log.txt", "First action completed\n", (err)=>{
//         if (err){
//             console.log("Error", err)
//             return
//         }
//         fs.appendFile("data/log.txt", "Second action completed\n", (err)=>{
//             if (err){
//                 console.log("Error", err)
//                 return
//             }

//             fs.readFile("data/log.txt", "utf-8", (err,data)=>{
//                 if (err){
//                     console.log("Error: ", err)
//                     return
//                 }
//                 console.log(data)
// })
// })
// })
// })

// //8.
// fs. mkdir("data/users", {recursive:true}, (err)=>{
//     if (err){
//         console.log("Error: ", err)
//         return
//     }
//     console.log("users folder created")
// })

// //9.
// fs.mkdir("data/users", {recursive:true}, (err)=>{
//     if (err){
//         console.log("Error: ", err)
//         return
//     }

//     fs.writeFile("data/users", "Name:David\nAge: 25", (err)=>{
//         if (err){
//             console.log("Error: ", err)
//             return
//         }
//         })
//  })

//  //10.
// fs.readdir("data", (err, files)=>{
//     if (err){
//             console.log("Error: ", err)
//             return
//         }
//     console.log(files)
    
// })

// //11.
// fs.writeFile("data/step1.txt", "Step 1 completed", (err)=>{
//     if (err){
//         console.log("Error: ", err)
//         return
//     }
//         fs.writeFile("data/step2.txt", "Step 2 completed", (err)=>{
//         if (err){
//             console.log("Error: ", err)
//             return
//         }
//             fs.writeFile("data/step3.txt", "Step 3 completed", (err)=>{
//             if (err){
//                 console.log("Error: ", err)
//                 return
//             }
// })
// })
// console.log("all steps completed")
// })

// //12.
// fs.readFile("data/step1.txt", "utf-8", (err, data1)=>{
//     if (err){
//         console.log("Error: ", err)
//     }
//     fs.readFile("data/step2.txt", "utf-8", (err, data2)=>{
//         if (err){
//             console.log("Error: ", err)
//         }
//         fs.readFile("data/step3.txt", "utf-8", (err, data3)=>{
//             if (err){
//                 console.log("Error: ", err)
//             }
            
//        console.log(data1)   
//        console.log(data2) 
//        console.log(data3)    
// })    
// })   
// })

//13.
fs.writeFile("data/report-title.txt", "Daily Report\n", (err)=>{
    if (err){
        console.log("Error: ", err)
        return
    }
    fs.writeFile("data/report-body.txt", "Everything is working\n", (err)=>{
        if (err){
            console.log("Error: ", err)
            return
        }
        fs.readFile("data/report-title.txt","utf-8", (err,title)=>{
            if (err){
                console.log("Error: ", err)
                return
            }
    
            fs.readFile("data/report-body.txt", "utf-8",(err, body)=>{
            if (err){
                console.log("Error: ", err)
                return
            }
            const final = title + body
                fs.writeFile("data/final-report.txt", final, (err)=>{
                if (err){
                    console.log("Error: ", err)
                    return
                }
                console.log("final report successfully created")
                })
})
})
})
})



import input from "analiza-sync"




//Object Methods

const users={
    name:"Maria",
    city:"Charleston",
    age:23
}

// //1.
// function getKeys (obj){
//     return Object.keys(obj)
// }
// console.log(getKeys(users))


// //2.
// function getVals(obj){
//     return Object.values(obj)
// }
// console.log(getVals(users))

// //3.
// function getAll(obj){
//     Object.entries(obj).forEach(entry=> console.log(`${entry[0]}:${entry[1]}`)
//    )}
// getAll(users)

// //4.
// function getAve(obj){
//     const vals = Object.values(obj)
//     const total = vals.reduce((a,b)=> a+b,0)
//     return total/vals.length
// }
// console.log(getAve({ math: 80, english: 90, science: 70 }))

// //5.
// function returnOne(obj1,obj2){
//     return Object.assign({},obj1,obj2)
// }

// //6.
// function stuffs(obj1,obj2){
//     return Object.assign({},obj1,obj2)
// }
// console.log(stuffs({ theme: "light", lang: "en" },{ lang: "he" }))

// //7.
// function hasKey (obj, k){
//     return Object.hasOwn(obj,k)
// }
// console.log(hasKey(users,"bob"))

// //8.
// const config = Object.freeze({
//     name:"Johnny"
// });
// config.name="hey"
// console.log(config.name)

// //9.
// function createObject(arr){
//     return Object.fromEntries(arr)
// }
// console.log(createObject([["name", "Alice"], ["age", 25]]))

// //10.
// function onSale(obj){
//     return Object.fromEntries(Object.entries(obj).map(([k, value])=> [k,value*.9]))
// }
// console.log(onSale({ apple: 10, banana: 5, mango: 20 }))

// //11.
// function onlyNums(obj){
//     return Object.fromEntries(Object.entries(obj).filter(([k,v])=> typeof v ==="number" ))
// }
// console.log(onlyNums(users))

// //12.
// function copy(obj){
//     return Object.assign({}, obj)
// }

//13.
function sameKeys(obj,obj2){
    return (Object.entries(obj).keys===Object.entries(obj2).keys)
}
console.log(sameKeys({ name: "Alice", age: 25 },{ name: "Bob", age: 30 }))
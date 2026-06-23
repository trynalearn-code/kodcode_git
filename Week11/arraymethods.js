// //1.
// const arr = [1, 2, 3, 4, 5]
// console.log(arr.map (num => num * 2))

// //2.
// const arr = ["hello", "world"]
// console.log(arr.map(upper=> upper.toUpperCase()))

// //3.
// const prices = [342,653,633,655,333]
// const withVAT = prices.map(num => num * 1.17)
// console.log(withVAT)

// //4.
// const arr = [1, 2, 3, 4, 5, 6]
// const evens = arr.filter(num => num%2==0)
// console.log(evens)

// //5.
// const arr = ["hi", "hello", "cat", "javascript"]
// const long = arr.filter(string => string.length>3)
// console.log(long)

// //6.
// const users=[{ name: "Avi", age: 17 }, { name: "Dana", age: 22 }]
// const ofAge = users.filter(user => user.age>=18)
// console.log(ofAge)

// //7.
// const arr = [{ name: "Avi", age: 17 }, { name: "Dana", age: 22 }]
// const users = arr.map(username => username.name)
// console.log(users)

// //8.
// const prices = [22,44,2254,22,63,2355,235,63]
// const big = prices.filter(price => price >100)
// const tenPercentMore = big.map(price => price * 1.1)
// console.log(tenPercentMore)

// //9.
// const nums = [10, 20, 30]
// const sums = nums.reduce((a,b)=>a+b, 0)
// console.log(sums)

// //10.
// const nums = [10, 20, 30]
// const multiplied = nums.reduce((acc , curr)=> acc*curr)
// console.log(multiplied)

// //12.
// const ages = [3,52,5,4,34,74]
// const total = ages.reduce((acc, curr)=> (acc+curr),0)
// const ave = total/ages.length
// console.log(ave)

// //25.
// const ages = [3,52,5,4,34,74]
// const desc = ages.sort((a,b)=>(b-a))
// console.log(desc)

// //29.
// const ages = [3,52,5,4,34,74]
// ages.splice(1,2)
// console.log(ages)

// //32.
// const arr = [3,52,[5,4],[434,43553,53], 34,74]
// console.log(arr.flat())

// //36.
// const arr = [3,52,5,4,34,74]
//     .filter(num => num%2===0)
//     .map(num => num*2)
//     .reduce((a,b)=> a+b,0);

// console.log(arr)

// //39.
// const arr = [5,3,5,23,5,3]
// const arr2=[]
// for (let num of arr){
//     if (arr2.includes(num)){
//         console.log("You've got double " + num)
//     }
//     arr2.push(num)
// }

//41.
const products = [
  { name: "Laptop", price: 800, inStock: true,  category: "tech"    },
  { name: "Phone",  price: 400, inStock: false, category: "tech"    },
  { name: "Shirt",  price: 50,  inStock: true,  category: "fashion" }
]
    .filter(stock => stock.inStock)
    .filter(big=>big.price >100)
    .sort((a,b)=> a.price-b.price)
    .map(n=>n.name)
    .join(", ")
console.log(products)

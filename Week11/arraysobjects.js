
// //1.
// const numbers = [1,2,3]
// console.log(numbers)

// //2.
// const fruits = ["apple", "banana", "cherry"];
// console.log(fruits[0])
// console.log(fruits[fruits.length -1])

// //3.
// const fruits = ["apple", "banana", "cherry"];
// fruits[1]="mango"
// console.log(fruits)

// //4.
// const fruits = ["apple", "banana", "cherry"];
// fruits.push("orange")
// console.log(fruits)

// //5.
// const fruits = ["apple", "banana", "cherry"];
// fruits.pop()
// console.log(fruits)

// //6.
// const fruits = ["apple", "banana", "cherry"];
// fruits.unshift("kiwi")
// console.log(fruits)

// //7.
// const fruits = ["apple", "banana", "cherry"];
// fruits.shift()
// console.log(fruits)

// //8.
// const arr = ["a", "b", "c", "d"];
// arr.splice(1,1)
// console.log(arr)

// //9.
// const arr = ["a", "b", "c", "d"];
// arr.splice(1,0, "X")
// console.log(arr)

// //10.
// const arr = ["a", "b", "c", "d"];
// arr.splice(2,1,"Y")
// console.log(arr)

// //11.
// const lst=[3,5,2,54,3,2]
// console.log(lst.length)
// console.log(lst[lst.length -1])

// //12.
// const lst = [3,"hey", false]
// for(const item of lst){
//     console.log(item)
// }

// //13.
// const nums = [10, 20, 30];
// for (const item of nums){
//     console.log(item)
// }

// //14.
// const lst = [5, 10, 15]
// let total = 0
// for (const sum of lst){
//     total += sum
// }
// console.log(total)

// //15.
// const lst = [3, 8, 12, 1]
// for (const num of lst){
//     if (num>5){
//         console.log(num)
//     }
// }

// //16.
// const person = {
//     name:"Joe",
//     age: 35
// }
// console.log(person)

// //17.
// const person = { name: "Dan", age: 25 };
// console.log(person.name, person.age)
// console.log(person["name"], person["age"])

// //18.
// const person = { name: "Dan", age: 25 };
// person.city="manhattan"
// person.name="Joey"
// console.log(person)

//19.
const person = { name: "Dan", age: 25 };
delete person.age
console.log("age" in person)
console.log(person)
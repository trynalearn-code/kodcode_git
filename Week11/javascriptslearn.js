import input from 'analiza-sync'
 //1.
// const age = 20;
// if (age > 18){
//     console.log("adult")
// }
// else {
//     console.log("child")
// }

// //2.
// const number = 7;
// if (number % 2 === 0){
//     console.log("True")
// }
// else{
//     console.log("False")
// }

// //3.
// const isLoggedIn = true;
// if (isLoggedIn===true){
//     console.log("Welcome")
// }
// else {
//     console.log("Please log in")
// }

// //4.
// const num = -5;
// if (num>0){
//     console.log("Your number is positive")
// }
// else if (num<0){
//     console.log("Your number is negative")
// }
// else{
//     console.log("Your number is 0")
// }

// //5.
// const a = 10
// const b = 20
// if (a===b){
//     console.log("your numbers are equal")
// }
// else if (a > b){
//     console.log("a is larger than b")
// }
// else {
//     console.log("b is larger than a")
// }

// //6.
// const password = "1234"
// if (password === "1234"){
//     console.log("correct password")
// } 
// else{
//     console.log("incorrect password")
// }

// //7.
// const x = 15;
// if (x>=10 && x <=20){
//     console.log("true")
// }
// else{
//     console.log("false")
// }

// //8.
// const grade = 83;
// if (grade>90){
//     console.log("Excellent!")
// }
// else if (89>=grade && grade>=75){
//     console.log("good")
// }
// else if (74>=grade && grade>=60){
//     console.log("pass")
// }
// else{
//     console.log("fail")
// }

// //9.
// const temp = 28;
// if (temp >30){
//     console.log("it's very hot, drink water")
// }
// else if (temp>= 20 && temp <=30){
//     console.log("it's nice out")
// }
// else{
//     console.log("it's cold. grab a jacket")
// }

// //10.
// const age = 20;
// const hasID = true;
// if (age>=18 && hasID === true){
//     console.log("you may enter")
// }
// else{
//     console.log("sorry, you can't come in")
// }

// //11.
// const isAdmin = false;
// const isManager = true;
// if (isAdmin || isManager){
//     console.log("you may edit")
// }

// //12.
// const hasCard=false;
// if (hasCard===true){
//     console.log("you may enter");
// }
// else{
//     console.log("you can't come in");
// }

// //13.
// const name = "";
// if (name===true){
//     console.log(name)
// }
// else{
//     console.log("guest")
// }

// //14.
// const arr = [];
// if (arr){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// //15.
// const x = "5";
// const y = 5;
// if (x===y){
//     console.log("exact same")
// }
// else if (x==y){
//     console.log("js same")
// }

// //16.
// const username = "admin";
// const password = "1234";
// if (username === "admin" && password === "1234"){
//     console.log("you may enter")
// }
// else{
//     console.log("you are denied entrance")
// }

// //17.
// const age = 67;
// if (age < 18){
//     console.log("children's discount")
// }
// else if (age >= 18 && age <65){
//     console.log("pay full")
// }
// else if (age>= 65){
//     console.log("elderly discount")
// }

// //18.
// const day = "monday";
// switch (day){
//     case "saturday":
//     case "sunday":
//     console.log("weekend");
//     break;

// default:
//     console.log("weekday");
// }

//loops
// //1.
// for (let i=1; i<=10; i++){
//     console.log(i)
// }

// //2.
// for (let i=10; i>=1; i--){
//     console.log(i)
// }

// //3.
// const numbers = [1, 2, 3, 4, 5];
// let sum = 0
// for (let i=0; i< numbers.length; i++){
//     sum+=numbers[i]
// }
// console.log(sum)

// //4.
// const names = ["john", "Jordan", "Maria"]
// for (name of names){
//     console.log(name)
// }

// //5.
// const numbers = [2, 5, 8, 11, 14, 17, 20];
// for (num of numbers){
//     if (num%2===0){
//         console.log(num)
//     }
// }

// //6.
// const numbers = [3, 99, 12, 45, 78];
// let max = null
// for (num of numbers){
//     if (num>max){
//         max=num
//     }
// }
// console.log(max)

// //7.
// const word = "javascript";
// for (let i=0; i<word.length; i++){
//     console.log(word[i])
// }

// //8.
// const numbers = [1,2,3,4];
// for (let num of numbers){
//     console.log(num*2)
// }

// //9.
// let i = 10
// while (i > 0){
//     console.log(i)
//     i--
    
// }

// //10.
// let inputs = "";
// while (inputs!=="stop"){
//     inputs=(input("what would you like to input?"))
// }

// //11.
// while(true){
//     let int= 10
//     int=input("what is your number?")
//     if (int == 0){
//         break
//     }
// }

// //12.
// const secret = 7;
// while (true){
//     let secret = input("guess the number")
//     if (secret==7){
//         break
//     }
// }

// //13.
// let x = 1;
// while (x<20){
//     console.log(x)
//     x+=1
// }

// //14.
// let password= "";
// while (true){
//     let password=input("what is the password?")
//     if (password=="1234"){
//         break
//     }
// }

// //15.
// let count = 0;
// do {
//     console.log("hello")
// }
// while (count>1)

// //16.
// let choice;
// do {
//     choice =input("what's the plan?")
// }
// while (choice !=="exit")

// //17.
// const numbers = [1, 3, 7, 9, 15, 2];
// for (let num of numbers){
//     if (num<=10){
//         console.log(num)
//     }
//     else{
//         break
//     }
// }

// //18.
// const numbers = [5, -1, 8, -3, 10];
// for (let num of numbers){
//     if (num<0){
//         continue
//     }
//     console.log(num)
// }
// const numbers = [5, -1, 8, -3, 10];
// for (let num of numbers){
//     if (num>0){
//         console.log(num)
//     }
// }


// //19.
// const ages = [12, 15, 18, 21, 25];
// for (let age of ages){
//     if (age>=18){
//         console.log(age)
//         break
//     }
// }


const nums = [2,4,56,4]
nums[0] = [4,2,5]
console.log(nums)

const arr1 = [1,2,3];
const arr2 = arr1;

arr2.push(4);

console.log(arr1);
// //1.
// function createLogger(){
//     function hi(){
//         console.log("hello");
//     }
//     return hi
// }
// createLogger()()

// //2.
// function createGreeting(name){
//     return function (){
//         console.log(`Hello ${name}`)
//     }
// }
// const greets = createGreeting("Joe")
// greets()

// //3.
// function createCounter(){
//     let count = 0
//     return function(){
//         count++
//         return count}
// }
// const counter = createCounter()

// console.log(counter())

// //4.
// function outer() {
//   let x = 10;
//   return function () {
//     console.log(x);
//   };
// }

// const fn = outer();
// fn();

// //5.
// function createMultiplier(x){
//     return function(num){
//         console.log(num*x)
//     }
// }
// const double = createMultiplier(2);
// double(5); // 10

// //6.
// function createAdder(num){
//     return function(n){
//         console.log(n+num)
//     }
// }

// const add5 = createAdder(5);
// add5(3); // 8

// //7.
// function createSecret(getSecret){
//     let setSecret=getSecret
//     return {getSecret:setSecret}
// }

//8.
function once(fn){
    return function(){
        return fn
    }
}
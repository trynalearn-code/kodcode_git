// //1.
// function exercise1() {
//   function sum(a, b) {
//     return a + b;
//   }

//   console.log(sum(2, 3));
// }
// exercise1()

// //2.
// function exercise2() {
//   const first = 10;
//   const second = 5;

//   console.log(first + second);
// }
// exercise2()

// //3.
// function exercise3() {
//   const numbers = [1, 2, 3];

//   const result = numbers.map(num => num * 2);

//   console.log(result);
// }
// exercise3()

// //4.
// function exercise4() {
//   const numbers = [1, 2, 3, 4];

//   const evens = numbers.filter((num) =>
//     num % 2 === 0);

//   console.log(evens);
// }
// exercise4()

// //5.
// function exercise5() {
//   let total = 0;
//   for (let i = 1; i <= 3; i++) {
//     total += i;
//   }
//   console.log(total);
// }
// exercise5()

// //6.
// function exercise6() {
//   const user = {
//     name: "Hanan",
//     age: 30
//   };

//   console.log(user.name);
// }
// exercise6()

// //7.
// function exercise7() {
//   const arr = [10, 20, 30];

//   console.log(arr[2].toString());
// }
// exercise7() 

// //8.
// function exercise8() {
//   function greet(name) {
//     if (!name) {
//       return;
//     }

//     console.log("Hello " + name);
//   }

//   greet("David");
// }
// exercise8()

// //9.
// function exercise9() {
//   function multiply(a, b) {
//     return (a * b);
//   }

//   const result = multiply(2, 4);

//   console.log(result + 1);
// }
// exercise9()

// //10.
// function exercise10() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 100);
//   }
// }
// exercise10()

// //11.
// function exercise11() {
//   function change(user) {
//     user.name = "Moshe";
//   }
//   const user = { name: "Hanan" };
//   change(user);
//   console.log(user.name);
// }
// exercise11()

// //12.
// function exercise12() {
//   const user = { name: "Hanan" };
//   const copy = Object.assign({},user);

//   copy.name = "Ruth";

//   console.log(user.name);
// }
// exercise12()

// //13.
// function exercise13() {
//   function getFullName(user) {
//     return user.firstName + " " + user.lastName;
//   }

//   const user = {
//     firstName: "Hanan",
//     lastName: "Strauss"
//   };

//   console.log(getFullName(user));
// }
// exercise13()

// //14.
// function exercise14() {
//   function divide(a, b) {
//     if (b === 0) {
//       return "Cannot divide";
//     }

//     return a / b;
//   }

//   console.log(divide(10, 0));
// }
// exercise14()

// //15.
// function exercise15() {
//   const items = [1, 2, 3];

//   items.forEach((item) => {
//     if (item === 2) {
//       return;
//     }

//     console.log(item);
//   });
// }
// exercise15()

// //16.
// function exercise16() {
//   const obj = {
//     value: 10,
//     getValue: function () {
//       return this.value;
//     }
//   };

//   const fn = obj.getValue;

//   console.log(fn());
// }
// exercise16()

// //17.
// function exercise17() {
//   function counter() {
//     let count = 0;

//     return {
//       increment: () => count++,
//       get: () => count
//     };
//   }

//   const c = counter();

//   c.increment();
//   c.increment();

//   const get = c.get;

//   console.log((get()));
// }
// exercise17()
// a function let us reuse code
// function function1() {
//     console.log("i am a function");//function body
//     console.log(2 + 2); //function body
// }
// function1();//executing the function || running the function

// function sum(x,y) {
//     return x + y;
// }
// console.log(sum(6, 9));

// function sum(d, r) {
//    return d * r;
// }
// console.log(sum(4, 5));

// function calculateTax(num) {
//    return num * 0.2
// }
// console.log(calculateTax(3000));


// function to calculate tax

// function calculateTax(num) {
//    console.log(num * 0.1);
// }
// calculateTax(2000);
// calculateTax(5000);

// function function1() {
//     console.log("i am lekan");
//     console.log(2 + 2);
// }
// function1();//calling function

// function demo() {
//    console.log(3 * 3);
//    console.log(4 + 4);
//    console.log(5 - 2);
//    console.log(8 / 2);
// }
// demo();



// const division = function (a, b) {
//    return a * b;
// }
// console.log(division(8, 2))


// function expression
// const multiply = function (a, b) {
//     return a * b;
// }
// console.log(multiply(5, 4));

// const addition = function (a, b) {
//     return a * b;
// }
// console.log(addition(10,4));

// function myName(name) {
//     console.log(`Hello, ${name}!`);
// }
// myName('Lekan');

// function welcome(name = "student") {
//     console.log(`Welcome to the JavaScript world! ${name}`);
// }
// welcome();
// welcome("Abiodun");

// function getUserInfo(name, proffession, age) {
//     return {
//         name: name,
//         age: 20,
//         proffession: proffession,
//         isAdult : age > 40
//     };
// }
// console.log(getUserInfo('lekan', 'Software Developer'));



// function marriage(man, woman, concubine) {
//    return `${man} and ${woman} got married with ${concubine}`;
// }
// console.log(marriage("Abayomi", "Iya Richard", "Baliqis"));





// arrow function

// const marriage = (man, woman) => man + woman;
// console.log(marriage('lekan', 'vero'))

// const greet = (name) => `Hello, ${name}!`;
// console.log(greet('lekan'))

// const getUserInfo = (name, proffesion) => ({ name, proffesion, age: 20 });

// console.log(getUserInfo('lekan' , 'software developer'))

// const marriage = (man, woman) => `${man} wed ${woman}`;
// console.log(marriage("Lekan", "Cindy"));

// const greetUser = (name, message) => `Hello, ${name}! ${message}`;
// console.log(greetUser("Students", "welcome to functions in javascript"));


function multiply() {
   const number1 = parseInt(document.getElementById('num1').value);
   const number2 = parseInt(document.getElementById('num2').value);

   const multiply = Number(number1) * Number(number2);

   document.getElementById('result').textContent = "Sum: " + multiply;

  
}


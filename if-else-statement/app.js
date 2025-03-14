// writing multiple groups of code and then decide which one to run
// if (true) {
//     console.log("Loading....");
// } else {
//     console.log("Not loading");
// }

// const ageOfConsent = 30;

// if (ageOfConsent >= 30) {
//     console.log("Yes you are ready");
// } else {
//     console.log(" You are too young to get married Stay with your mother");
// }


// const age = 18;
// if (age >= age) {
//     console.log("you are eligible to drive.")
// } else {
//     console.log("you are not eligible to drive.")
// }

// const symptoms = prompt("Enter your symptoms");

// if (symptoms === "fever") {
//     console.log("malaria");
// } else if (symptoms === "headache") {
//     console.log("Take Paracetamol");
// } else if (symptoms === "flu") {
//     console.log("cough and cold");
// } else if (symptoms === "Your daughter is vomiting") {
//     console.log("your daughter is pregnant");
// }





// const symptoms = prompt("Enter your symptoms:");
// if (symptoms === "fever") {
//     console.log("malaria");
// } else if (symptoms === "flu") {
//     console.log("cough and cold");
// } else if (symptoms === "headache") {
//     console.log("take painkillers");
//     } else if (symptoms === "vomiting") {
//     console.log("pregnancy");
// } else {
//     console.log("Unknown symptoms");
// }


// const symptom = "malaria";
// switch (symptoms) {
//   case "malaria":
//     console.log("Fever, chills, sweating");
//     break;
//   case "cold":
//     console.log("Runny nose, sore throat, sneezing");
//     break;
//   default:
//     console.log("Unknown symptoms");
// }

// shortcut for if-else statements

// ternary Operator ? :
// Guard Operator &&
// Default Operator ||

// Ternary Operator ? :
// const result = true ? 'truthy' : 'falsy'
// console.log(result)

// let age = 20;
// let message = age >= 20 ? 'eligible to vote' : 'not eligible to vote';
// console.log(message)

// let age = 30;
// let message = age >= 30 ? "eligible to vote" : "not eligible to vote";
// console.log(message);


// guard operator &&
// the guard operator (&&) is used to execute the right handed expression (only) if the left hand side is truthy

// const name = 'John';
// const agee = 25;
// const isAdult = agee >= 21 && name !== '';
// console.log(isAdult)

// false && console.log('hello'
// );

// const example = true && "laughter";
// console.log(example);

// const mesage = false && "hello";
// console.log(mesage);

// const mesage = 5 && 'hello';
// console.log(mesage);

// const number = 4 && "halleluyah";
// console.log(number);

// let isLoggedIn = false;
// isLoggedIn && console.log(mesage);

// let isGuest = false;
// false && console.log(mesage);

// let isBook = false;
// isBook && console.log("growth");


// default operator or OR operator

// the default operator (||) is used to return the right hand value only if the left-hand value is falsy (false, 0, "", null, undefined, null)

// const currency = null || 'USD';
// console.log(currency);

// const message = 5 || 'hello';
// console.log(message)

// const message = 0 || "hello";
// console.log(message)

// const currency = "great" || "usd";
// console.log(currency);




// var youLikeMeat = true;

// if (youLikeMeat) {
//     document.write("Here is the meaty menu ...")
// }

// const name = "lekan";
// document.write(...name)

var myAge = 29;

if (myAge > 30) {
    document.write("You are older than 30");
} else if(myAge > 20) {
    document.write("You are older than 20");
} else if(myAge > 10) {
    document.write("You are older than 10");
} else {
    document.write("You are not old enough");
}
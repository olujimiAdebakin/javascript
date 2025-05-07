// writing multiple groups of code and then decide which one to run
// if (true) {
//     console.log("Loading....");
// } else {
//     console.log("Not loading");
// }

// if (true) {
//     console.log("running");
// } else {
//     console.log("not running")
// }

// if (condition){
//     // if true this runs
// } else {
//     // code runs if condition is false
// }


// const ageToMarry = 40;

// if (ageToMarry < 32) {
//     console.log("You are to young to get married");
// } else if (ageToMarry == 32) {
//     console.log("You are of age to get married");
// } else if (ageToMarry === 32){
//     console.log("You are ready to get married");
// } else {
//     console.log("you are too old to marry")
// }


// const symptoms = prompt("Enter your symptoms");

// if (symptoms === "cold") {
//     alert("You have Malaria")
// } else if (symptoms === "headache") {
//     alert("Take panadol");
// } else if (symptoms === "cough & cold") {
//     alert("Ypu have flu");
// } else if (symptoms === "vomiting") {
//     alert("You are pregnant");
// } else if (symptoms === "back pain") {
//     alert("Take a body pain")
// } else {
//     alert("you have spiritual problems")
// }



// const ageOfConsent = 30;

// if (ageOfConsent >= 30) {
//     console.log("Yes you are ready");
// } else {
//     console.log(" You are too young to get married Stay with your mother");
// }


// const ageTOContest = 30;

// if (ageTOContest >= 30) {
//     console.log("You are eligible to contest");
// } else if (ageTOContest <= 30) {
//     console.log("you are not eligible to contest");
// } else {
//     console.log("you are not eligible to contest in Nigeria");
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


// const name = prompt("Enter your name")

// if (name === "Lekan") {
//     alert("yoruba");
// } else if (name === "chinedu") {
//     alert("igbo");
// } else if (name === "Garba") {
//     alert('hausa')
// } else {
//     alert("unkown");
// }

// const name = prompt("Enter your name")

// if (name === "lekan") {
//     alert("yoruba");
// }else if (name === "chinedu") {
//     alert("igbo");
// } else if (name === "garba") {
//     alert("hausa");
// } else {
//     alert("unknown");
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

// const day = "Sunday";

// switch (day) {
//   case "Monday":
//     console.log("Today is Monday");
//     break;
//   case "Tuesday":
//     console.log("Today is Tuesday");
//     break;
//   case "Wednesday":
//     console.log("Today is Wednesday");
//     break;
//   case "Thursday":
//     console.log("Today is Thursday");
//     break;
//   case "Friday":
//     console.log("Today is Friday");
//         break;
//     default:
//         console.log("Today is a weekend");
// }

// const color = prompt("Enter a color");

// const food = prompt("Enter a food")

// switch (food) {
//     case "rice":
//         alert("breakfast");
//         break;
//     case "yam":
//         alert("launch");
//         break;
//     case "eba":
//         alert("dinner");
//         break;
//     default:
//         alert("last super");
// }

// switch (color.toLowerCase()) {
//     case "red":
//         alert("Stop");
//         break;
//     case "yellow":
//         alert("slow down");
//         break;
//     case "green":
//         alert("go");
//         break;
//     default:
//         alert("Jam yourself");
// }


// shortcut for if-else statements

// ternary Operator ? :
// Guard Operator &&
// Default Operator ||


// Ternary Operator ? :
// const result = true ? 'truthy' : 'falsy'
// console.log(result)

// const a = 3;
// const b = a >= 10 ? "true" : "false";
// console.log(b);


// let age = 15;
// let ageToVote = age >= 18 ? "eligible to vote" : "not eligible to vote";
// console.log(ageToVote);

// let age = 20;
// let message = age >= 20 ? 'eligible to vote' : 'not eligible to vote';
// console.log(message)

// let age = 30;
// let message = age >= 30 ? "eligible to vote" : "not eligible to vote";
// console.log(message);
// const lekan = false;

// const me = lekan ? 'male' : 'female';
// console.log(me); //female

// const age = 45;
// const message = age <= 30 ? "eligible to vote" : "not eligible to vote";
// console.log(message);

// guard operator &&
// the guard operator (&&) is used to execute the right handed expression (only) if the left hand side is truthy

// const name = 'John';
// const agee = 25;
// const isAdult = agee >= 21 && name !== '';
// console.log(isAdult)

const a = false;
const b = a && "join";
console.log(b);

// false && console.log('hello'
// );
// const school = "noun";
// const name = "tolu";
// const IT = school === "" && name === "tolu";
// console.log(IT)

// const good = true && "great";
// console.log(good);

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

// const school = "noun";
// const college = "tolu";
// const IT = school === "noun" || college === "tolu";
// console.log(IT)

// const message = 10 || "hello";
// console.log(message)




// var youLikeMeat = true;

// if (youLikeMeat) {
//     document.write("Here is the meaty menu ...")
// }

// const name = "lekan";
// document.write(...name)

// var myAge = 29;

// if (myAge > 30) {
//     document.write("You are older than 30");
// } else if(myAge > 20) {
//     document.write("You are older than 20");
// } else if(myAge > 10) {
//     document.write("You are older than 10");
// } else {
//     document.write("You are not old enough");
// }
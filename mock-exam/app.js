// 1. How do you create an object in JavaScript?
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };
// console.log(person);

// 2. How do you access and update object properties?

// const car = { brand: "Toyota", model: "Camry", year: 2020 };
// console.log(car.model);
// car.year = 2023;
// console.log(car.year);

// const programmingLanguages = {
//   javacript: "for browser",
//   python: "for data science and ml",
//   rust: "for speed and performance",
//   solidity: "for evm smart contracts"
// };

// console.log(programmingLanguages.rust) //accessing
// programmingLanguages.rust = "programme and smart contracts in solana" //updating
// console.log(programmingLanguages.rust)


// 3. How do you loop through an object's properties?

// const animals = {
//   lion: { species: "Panthera leo", legs: 4 },
//   tiger: { species: "Panthera tigris", legs: 4 },
//   elephant: { species: "Loxodonta africana", legs: 4 },
// };

// for (const animal in animals) {
//   console.log(`${animal}: ${animals[animal].species} has ${animals[animal].legs} legs.`);


// }

// const user = { name: "Alice", age: 25, city: "Paris" };
// for (let key in user) {
//   console.log(`${key}: ${user[key]}`);
// }


// 4. How do you check if a property exists in an object?
// In JavaScript, you can check if a property exists in an object using several methods. Common approaches include using the in operator, the hasOwnProperty() method, or checking if the property is undefined. Each method has its own use case depending on whether you want to check for inherited properties or just direct properties.

// const user = { name: 'Alex', age: 30 };
// console.log('name' in user); // true
// console.log('surname' in user); // false

// const tutor = { name: 'Jimi', course: 'web-development' };
// console.log('name' in tutor);

// using hasOwnProperty
// const developer = { name: 'Jessica', country: 'USA' };
// console.log(developer.hasOwnProperty('country')); // true
// console.log(developer.hasOwnProperty('toString')); // false

// const developer = { name: 'Abiodun', Stack: "MERN" };
// console.log(developer.hasOwnProperty('Stack'));


// using undefined
// const hero = { name: 'Batman', age: undefined };
// console.log(hero.name !== undefined); // true
// console.log(hero.age !== undefined); // false


// const tutor = { name: 'Lekan', course: undefined };
// console.log(tutor.name === undefined);


// 5. How do you merge two objects?

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const merged = { ...obj1, ...obj2 };
// console.log(merged);

// const football = { team: 'liverpool', coach: 'Arne Slot' }
// const Basketball = { team: 'Lakers', coach: 'Frank Vagel' }
// const Sport = { ...football, ...Basketball };
// console.log(Sport);


// 6. How do you use the ternary operator to check if a number is even or odd?

// const num = 7;
// const result = num % 2 === 0 ? "Even" : "Odd";
// console.log(result);

// const num = 6;
// const result = num % 2 === 0 ? "Even" : "Odd";
// console.log(result);

// 7. How do you use the ternary operator for multiple conditions?
// const score = 85;
// const grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
// console.log(grade);

// const Mark = 90;
// const grade = Mark >= 100 ? "A" : Mark >= 90 ? "B" : "C";
// console.log(grade);

// const age = 25;
// const country = 'USA';

// const message = age >= 18 && country === 'USA' ? 'You can vote in the USA' :
//                age >= 18 && country !== 'USA' ? 'You can vote in your country' :
//                'You are not eligible to vote';

// console.log(message); // Output: "You can vote in the USA"

// const age = 18;
// const country = "Nigeria";
// const Citizen = prompt('Enter your age and country')

// const citizen = age >= 17 && country === "Nigeria" ? "You are eligible to vote" : age <= 15 && country === "Nigeria" ? "You are not eligible to vote" : "Wait til you are of age";
// console.log(citizen);

// order of precedence
// (...)
// * /
// + -
// comparison Operators
  // logical Operators




// const age = 25;
// const country = 'USA';

// let message;

// if (age >= 18 && country === 'USA') {
//   message = 'You can vote in the USA';
// } else if (age >= 18 && country !== 'USA') {
//   message = 'You can vote in your country';
// } else {
//   message = 'You are not eligible to vote';
// }

// console.log(message); // Output: "You can vote in the USA"

// 8. How does the default operator (??) work when dealing with null or undefined values?
// const user = { name: 'John' };
// const age = user.age ?? 25;
// console.log(age);

// const buyer = { name: 'John' };
// const age = buyer.age ?? 30;
// console.log(age);

// const name = null;
// const fullName = name ?? 'Unknown';
// console.log(fullName);

// 9. What happens when a falsy value (0, false, "") is used with ???
// const score = 0;

// const grade = 0 ?? "two";
// console.log(grade)

// 10. How does the guard operator (&&) work?
// const isLoggedIn = true;
// isLoggedIn && console.log("Welcome!");

// const isAdmin = true;
// const isModerator = false;

// const isAdmin = false;
// isAdmin && console.log("welcome");

// if (isAdmin && isModerator) {
//   console.log("You are both an admin and a moderator.");
// } else {
//   console.log("You are not both an admin and a moderator.");
// }

// const user = null;
// const name = user && user.name;

// console.log(name); // Output: null

// 12. How do you check the type of a variable in JavaScript?/
// console.log(typeof "Hello"); // string
// console.log(typeof 123); // number
// console.log(typeof true); // boolean
// console.log(typeof {}); // object
// console.log(typeof []); // object (arrays are objects)
// console.log(typeof null); // object
// console.log(typeof undefined); // undefined

// const name = true;
// console.log(typeof name)

// 13. What is the difference between null and undefined?
// let x; // undefined
// let y = null; // null
// console.log(x, y);

// let name;
// console.log(name);

// let m = null;
// console.log(m)
// 14. How do you convert a string to a number in JavaScript?
// const str = '123';
// const num = Number(str);
// console.log(num);

// const num = "12345";
// const convert = Number(num);
// console.log(convert)
// console.log(parseInt(num));
// console.log(parseFloat(num))

// const decimal = "123.45";
// const round = Math.floor(Number(decimal));
// console.log(round)

const decimal = 123.46;
const roundUp = Math.ceil(decimal);
console.log(roundUp);

// const str = "42";
// console.log(Number(str)); 
// console.log(parseInt(str)); 
// console.log(parseFloat(str)); 
// const str = "123";
// const num = +str;
// console.log(num);

// const str = '123.45';
// const num = Math.floor(Number(str));
// console.log(num); // Output: 123

// const num2 = Math.round(Number(str));
// console.log(num2); // Output: 123


// 15. How do you create an array in JavaScript?
// Adding elements to an array: push(), unshift(), splice()
// Removing elements from an array: pop(), shift(), splice(), filter()
// Modifying an array in place: splice()
// Creating a new array with modified elements: filter()
// Note: The splice() method modifies the original array, while the filter() method returns a new array.

// const fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits);

// let arr = Array.of(1, 2, 3, 4, 5);
// console.log(arr);

// let arr = Array.from('hello');
// console.log(arr);

// 16. How do you add and remove elements from an array?

// const numbers = [1, 2, 3];
// numbers.push(4); // Adds to end
// numbers.unshift(0); // Adds to start
// console.log(numbers); // [0, 1, 2, 3, 4]

// numbers.pop(); // Removes last element
// numbers.shift(); // Removes first element
// console.log(numbers); // [1, 2, 3]


let fruits = ['apple', 'banana', 'cherry'];
fruits.splice(1, 2);
console.log(fruits);

// let fruits = ['apple', 'banana', 'cherry'];
// let filteredFruits = fruits.filter(fruit => fruit !== 'banana');
// console.log(filteredFruits);

// 17. How do you loop through an array?
// const colors = ["Red", "Green", "Blue"];
// colors.forEach((color) => console.log(color));
//  for (let i = 0; i < colors.length; i++) {
// console.log(colors[i]);
// }


// const colors = ["Red", "Green", "Yellow", "Blue"]
// colors.forEach((color) => console.log(color));

// const arr = [1, 2, 3, 4, 5];

// for (const value of arr) {
//   console.log(value);
// }
 

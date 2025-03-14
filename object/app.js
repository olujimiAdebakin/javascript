// 


const car = {
    name: "RangeRover",
    model: 2026,
    color: "white&balck",
    price: "$100k",
}
console.log(car.color)

const music = {
    artist: "burna boy",
    title: 23,
    genre: "afro-fusion",
    year: 2022,
    AlbumTitle: "Twice As Tall",
}

console.log(music)

// const product = {
//   name: "basketball",
//   price: 2095,
// };
// console.log(product);

// product.price += 500;
// console.log(product);

// product["delivery-time"] = "3 days";
// console.log(product);


const product = {
    name: "basketball", 
    price: 10000,
    delivery_time: "10 days",
}
console.log(product)
product.price += 7000,
    console.log(product);

product.name = "football",
    product.delivery_time = "20 days",
    console.log(product);


const laptop = {
    name: "macbook", 
    model: "pro 2022",
    processor: "2.6 GHz",
    memory: "16GB",
    graphics: "Intel Iris Plus Graphics",
    price: 10000,
    delivery_time: "20 days",
}

console.log(laptop);
laptop.name = "dell";
console.log(laptop)
delete laptop.processor;
console.log(laptop)
laptop["warranty"] = "2 years";
console.log(laptop);

const person = {
    name: "olujimi",
    age: 20,
    gender: "Lgbtq",
    hobbies: ["Football", "Music", "cheating", "Reading", "politics", "Ass"]
}
console.log(person);
person.age += 5;
console.log(person);
person.hobbies.unshift("pussy");
person.hobbies.pop();
console.log(person);

// this is a wrong approach
// const bankAccount = {
//     accountHolder: "Adebakin Olujimi",
//     accountNumber: "1234567890",
//     balance: 1000000,
//     accountType: "savings",
//     details: bankAccount.accountHolder + " has $" + bankAccount.accountNumber + " " + bankAccount.balance + " " + bankAccount.accountType + "  in there account",
// };

// console.log(bankAccount);


// console.log(one)


//concactinating with template strings
const bankAccount = {
  accountHolder: "Adebakin Olujimi",
  accountNumber: "1234567890",
  balance: 1000000,
  accountType: "savings",
};


bankAccount.details = `${bankAccount.accountHolder} has ${bankAccount.accountNumber} ${bankAccount.balance} ${bankAccount.accountType} in their account`;

console.log(bankAccount.details);

// const name = {
//     firstname: "Adebakin",
//     lastname: "Olujimi",
// }

// name.fullName = `${name.firstname} ${name.lastname}`;

// console.log(name.fullName)



//concactinating with string
const name = {
    firstName: 'Adebakin',
    lastName : 'Olujimi',
    age : 30,
}

 const Details = "Hello, my name is"  +  name.firstName + " " + name.lastName + " " + "and i am" + " " + name.age + "years old";
console.log(Details);

// with spread operator
const obj1 = {
 x: 10,
 m: 12 };
const obj2 = { 
y: 11, 
z: 13 };

const combinedObj = { ...obj1, ...obj2 };//with spread operator
console.log(combinedObj);
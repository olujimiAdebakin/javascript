//


// const car = {
//     name: "RangeRover",
//     model: 2026,
//     color: "white&balck",
//     price: "$100k",
// }
// console.log(car.color)



// const music = {
//     artist: "burna boy",
//     title: 23,
//     genre: "afro-fusion",
//     year: 2022,
//     AlbumTitle: "Twice As Tall",
// }

// console.log(music)

// const person = {
//     name: "Tolu",
//     Gender: "She",
//     Age: 50,
//     Occupation: "Os",
//     Country: "Cameroon",
//     City: "Buea",
//     Religion: "Traditionalist",
//     Sex: "Lesbian",
// }
// console.log(person);
// // Object.freeze(person)
// Object.seal(person)
// person.Gender = "He";
// person.Club = "Chelsea";
// person.height = "5ft";
// person.weight = "500kg";
// person.complexion = "Chocolate";
// console.log(person);
// delete person.Occupation;
// console.log(person);

// const currency = {
//     name: "Dollar",
//     symbol: "$",
//     code: "USD",
//     Value: "1600",
//     country: "United states",
// }
// console.log(currency)
// console.log(currency.symbol)
// console.log(currency.name);
// // Object.freeze(currency); //does not allow modification
// currency.name = "Naira"
// currency.symbol = "₦",
//     currency.code = "NGN",
//     currency.value = "Nil",
//     currency.country = "Nigeria",
//     currency.president= "Tinubu",
    
//     // console.log(currency);
//     delete currency.president;
// console.log(currency)
// console.log("president" in currency);
// console.log(Object.keys(currency))
// console.log(Object.values(currency));

// const person = {
//     name: "lade",
//     age: 40,
//     occupation: "CBEX",
// }

// console.log(person);
// Object.seal(person); //can modify existing values but cant add new
// person.age += 10,
// console.log(person);
// person.status = "married",
// console.log(person);
// console.log(Object.isSealed(person));

// const product = {
//   name: "basketball",
//   price: 2095,
// };
// console.log(product);

// product.price += 500;
// console.log(product);

// product["delivery-time"] = "3 days";
// console.log(product);

// const product = {
//     name: "garri",
//     price: 500,
// }
// console.log(product)
// product["delivery-time"] = "5 days";
// console.log(product);


// const person = {
//     name: "lekan",
//     occupation: "olosho",
//     gender: "confused",
//     age: 50,
//     country: "congo",
//     city: "kinshasha",
//     hobbies: ["womanizing", "reading", "salvage", "coding"],
// }


// person.hobbies.unshift("cheating");
// person.hobbies.push("Cassanova");
// person.hobbies.pop()
// person.hobbies.shift();
// console.log(Object.values(person));

// person.age -= 30;
// console.log(person);
// Object.seal(person);
// person.status = "Gay"
// person.gender = "female";
// console.log(person);



// const product = {
//     name: "basketball",
//     price: 10000,
//     delivery_time: "10 days",
// }
// console.log(product)
// product.price += 7000,
//     console.log(product);

// product.name = "football",
//     product.delivery_time = "20 days",
//     console.log(product);


// const laptop = {
//     name: "macbook",
//     model: "pro 2022",
//     processor: "2.6 GHz",
//     memory: "16GB",
//     graphics: "Intel Iris Plus Graphics",
//     price: 10000,
//     delivery_time: "20 days",
// }

// console.log(laptop);
// laptop.name = "dell";
// console.log(laptop)
// delete laptop.processor;
// console.log(laptop)
// laptop["warranty"] = "2 years";
// console.log(laptop);

// const person = {
//     name: "olujimi",
//     age: 20,
//     gender: "Lgbtq",
//     hobbies: ["Football", "Music", "cheating", "Reading", "politics", "Ass"]
// }
// console.log(person);
// person.age += 5;
// console.log(person);
// person.hobbies.unshift("pussy");
// person.hobbies.pop();
// console.log(person);

// const country = {
//     name: "Nigeria",
//     age: 67,
//     currency: "Naira",
//     Government: "democracy",
//     President: "Tinubu",
//     hobbies: ["Thuggery", "corruption", "Looting", "Going to france", "Private jet"]
// }
// // console.log(country);
// country.age -= 5;
// country.hobbies.unshift("Yatch");
// country.hobbies.push("Bulion van");
// // console.log(country);
// console.log(Object.keys(country.hobbies))//returns the keys in number 0 1 2 3 4 5 etc
// console.log(Object.values(country.hobbies))//returns the value in array format


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
// const bankAccount = {
//   accountHolder: "Adebakin Olujimi",
//   accountNumber: "1234567890",
//   balance: 1000000,
//   accountType: "savings",
// };


// bankAccount.details = `${bankAccount.accountHolder} has ${bankAccount.accountNumber} ${bankAccount.balance} ${bankAccount.accountType} in their account`;

// console.log(bankAccount.details);

// const coin = {
//     name: "PX",
//     chain: "EVM",
//     price: "1USDT",
//     supply: "10 Billion",
//     creator: "peerX",
// }

// coin.details = `${coin.name} is a token launched on the ${coin.chain} chain, the total supply is ${coin.supply} supply and the price is ${coin.price} this coin belongs to ${coin.creator}`
// console.log(coin.details)

// const country = {
//     president: "Emilokan",
//     Name: "Nigeria",
//     Population: "200m",
//     Capital: "Abuja",
//     Language: "English",
//     Currency: "Naira",
//     Religion: "Traditional",
//     State: "Ogun-State",
//     Governor: "Eleyi of Ogun state",
//     hobbies: ["Thuggery", "corruption", "Looting", "Going to france", "Private jet", "Partying"],
// }

// const about = `${country.Name} is a country with over ${country.Population} population, its capital is ${country.Capital} and its official language is ${country.Language} the poor populace are the ones who spend the official currency which is ${country.Currency} most nigerians are ${country.Religion} worshippers in disguise they only go to church and mosque for fun, One of the states in ${country.Name} is ${country.State} and the governor is called ${country.Governor}. ${country.Name} is notorious for ${country.hobbies.join(', ')}.`
// console.log(about);




// const name = {
//     firstname: "Adebakin",
//     lastname: "Olujimi",
// }

// name.fullName = `${name.firstname} ${name.lastname}`;

// console.log(name.fullName)



//concactinating with string
// const name = {
//     firstName: 'Adebakin',
//     lastName : 'Olujimi',
//     age : 300,
// }

//  const Details = "Hello, my name is"  +  name.firstName + " " + name.lastName + " " + "and i am" + " " + name.age + "years old";
// console.log(Details);

// const Network = {
//     name: "Glo",
//     Owner: "Adenuga",
//     Hq: "Lagos",
// }

// const Details = "The owner of " + Network.name + " " + " is " + Network.Owner + " " + " And there headquarter is located at" + " " + Network.Hq;
// console.log(Details);

// with spread operator
// const obj1 = {
//  x: 10,
//  m: 12 };
// const obj2 = {
// y: 11,
// z: 13 };

// const combinedObj = { ...obj1, ...obj2 };//with spread operator
// console.log(combinedObj);

// const name = {
//     x: "tolu",
//     y: "Tayo"
// }

// const age = {
//     m: 30,
//     n: 24,
// };

// const nameAge = { ...name, ...age};
// // console.log(nameAge);
// console.log(Object.values(nameAge));
// console.log(Object.keys(nameAge));

// const school = {
//     schoolName: "funnab",
//     year: 1990,
// }

// const person = {
//     name: "lola",
//     department: "Social science",
// }

// const schoolPerson = {...school, ...person}
// console.log(schoolPerson);
// console.log(Object.values(schoolPerson));
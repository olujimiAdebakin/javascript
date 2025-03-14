// Comparison Operators

//  Relational Operators
// in Relational Operators we have:
//   > greater than
//   < less than
//   >=  greater than or equal to
//   <= less than or equal to

console.log(10 > 10); // true || false
console.log(10 < 10); // true || false
console.log(10 >= 10); // true || false
console.log(10 <= 10); // true || false

//  > Equality Operators
// in Equality Operators we have:
//   == loose equality
// compares values after type conversion (also called type coercion)
// if the types are different javascript attempts to convert them to common type before comparison

// example

console.log(10 == "10"); // true

console.log(10 == "10"); // true

//  === Strict Equality Operators
// in strict equality values are compared without conversion
// the value must be of the same type and have the same value to be considered equal

// example

console.log(20 === "20"); //false
console.log(null === undefined); // false
console.log(true === false); // false

// 3. Loose Inequality (!=)
// Works like == but checks for inequality.
console.log(5 != "5"); // false (they are considered equal after type conversion)
console.log(0 != false); // false

// 4. Strict Inequality (!==)
// Works like === but checks for inequality.

console.log(5 !== "5"); // true (different types)
console.log(0 !== false); // true

// Task
// 1. Create variable name (firstFavNumb) & store your favorite number.
// 2. Create variable name (secondFavNumb) & store second fav Number.
// 3. Check (firstFavNumb is greater then secondFavNumb)
// 4. Check (firstFavNumb is less then secondFavNumb)
// 5. Check (firstFavNumb is greater then & equal to secondFavNumb)
// 6. Check (firstFavNumb is less then & equal to secondFavNumb)
// 7. Check (firstFavNumb is equal to secondFavNumb) using strict equality operator.
// 8. Check (firstFavNumb is equal to secondFavNumb) using loose equality operator.
// 9. Check (firstFavNumb is not equal to secondFavNumb) using strict non-equality operator.
// 10. Check is (firstFavNumb is not equal to secondFavNumb) using loose non-equality operator.

let firstFavNumb = 21;
let secondFavNumb = 10;

console.log(firstFavNumb > secondFavNumb);
console.log(firstFavNumb < secondFavNumb);
console.log(firstFavNumb >= secondFavNumb);
console.log(firstFavNumb <= secondFavNumb);

console.log(firstFavNumb === secondFavNumb);
console.log(firstFavNumb !== secondFavNumb);
console.log(firstFavNumb == secondFavNumb);
console.log(firstFavNumb != secondFavNumb);

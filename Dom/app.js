// The document object model is a programmming interface for web documents . It represents the page so that programs can change the document structure , style and content .
// javascript can manipulate the Dom to dyamically update content , styles and structure.

// Returns a reference to the first object with the specified value of the ID attribute.
const element_by_id = document.getElementById("header");

console.log("This is my element", element_by_id.innerHTML);

element_by_id.innerHTML = "i love rust but it is very difficult"
element_by_id.style.color = "green";
element_by_id.style.backgroundColor = "black"
element_by_id.style.fontSize = "100px";


// const my_lov = document.getElementById("paragraph");
// console.log(my_lov);


const text = document.getElementById('paragraph')
console.log("This is my paragraph",text)


// Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes.
// const allClass = document.getElementsByClassName("item");
// console.log(allClass);

// const headal = document.getElementsByClassName("head");
// console.log(headal.baseURI);

// const classs = document.getElementsByClassName("greet");
// console.log(classs)

const allClass = document.getElementsByClassName("item");
console.log(allClass)


// Retrieves a collection of objects based on the specified element name.
const allElements = document.getElementsByTagName("p");
const allTag = document.getElementsByTagName("li");
console.log(allTag);


// querySelector returns the first element that matches a specified CSS selector.
const select = document.querySelector('#header')
console.log(select);


const selectt = document.querySelector('li.item1')
console.log(selectt);



// querySelectorAll returns a NodeList which is a live collection of elements that matches a specified CSS selector.
const selectAll = document.querySelectorAll('.item');
console.log(selectAll);




// Modifying Element Properties
// It is not enough to select elements, in fact the reason why elements are selcted is so that their contents, styles or attributes can be chnaged dynamically. The following are used to modify the properties of  elements:



// The innerHTML property sets or returns the HTML content (including markup) of an element. the syntax is `element.innerHTML`.
// innerHTML
const inner = document.querySelector('.inner');
console.log(inner.innerHTML);

inner.innerHTML = "i love rust but he dey show me shege";
inner.style.color="blue"


// const student = {
//     name: 'Lekan',
//     age: 20,
//     grade:80.
// }

// console.log(student.name);
// console.log(student.grade);
// console.log(student.age)


// The textContent property in JavaScript is used to set or get the text content of an element. It represents the text content of the node and its descendants.
// textContent

// The style property in JavaScript is used to get or set the inline style of an HTML element. This allows you to dynamically change the CSS styles of an element directly from your JavaScript code.
// `style` property



// setAttribute()

// const elemm = document.querySelector('h3');
// // console.log(elemm);

// elemm.setAttribute('class', 'halle');

// const ellemm1 = document.querySelector('.halle');
// console.log(ellemm1);

// ellemm1.style.color = "green";

// Example 1: Setting an `id` attribute
// let element = document.getElementById("myDiv");
// element.setAttribute("id", "newId");

// // Example 2: Adding a class to an element
// element.setAttribute("class", "container");

// // Example 3: Setting a `data-` attribute
// element.setAttribute("data-role", "admin");

// // Example 4: Changing the `href` of a link
// let link = document.querySelector("a");
// link.setAttribute("href", "https://example.com");

// // Example 5: Making an input field readonly
// let input = document.querySelector("input");
// input.setAttribute("readonly", "true");



// getAttribute()
// Example 1: Getting the `id` of an element
// let idValue = element.getAttribute("id");
// console.log(idValue); // Output: "newId"

// // Example 2: Getting the `class` of an element
// let classValue = element.getAttribute("class");
// console.log(classValue); // Output: "container"

// // Example 3: Getting a `data-` attribute value
// let role = element.getAttribute("data-role");
// console.log(role); // Output: "admin"

// // Example 4: Getting the `href` of a link
// let linkHref = link.getAttribute("href");
// console.log(linkHref); // Output: "https://example.com"

// // Example 5: Checking if an input is readonly
// let isReadonly = input.getAttribute("readonly");
// console.log(isReadonly); // Output: "true"



// Example of setting and getting an attribute
// const myElement = document.getElementById('myElement');
// myElement.setAttribute('data-myAttr', 'Hello World!');
// const myAttr = myElement.getAttribute('data-myAttr');
// console.log(myAttr);

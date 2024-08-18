/** --------------------- COMMENTS --------------------- */

// Single Line Comment

/**
 * Multiline comment start
 * you can write multiple times
 *
 */

/** --------------------- VAR, LET, CONST ------------------ */

// Variables
/* var name = "John Doe";
var age = 30;
var isMale = true;

function greet(name) {
    name = 'John Wick';
    console.log("Hello " + name);
}


// console.log(greet(name));


const firstName = `John`;
const name = "John Doe";
let age = 30;

function greet(name) {
    name = 'John Wick';
    age = 40;
    return "Hello " + name + " " + age;
}

console.log(greet(name)); */


/** --------------------- PRINTING/LOGGING --------------------- */

//console.log("Hello World");
//document.write("<div>Hello World</div>");
//window.alert("Hello World");
//document.getElementById("log-msg").innerHTML = "Hello World";


/** --------------------- OPERATORS --------------------- */


// triple equal syntax
/* console.log(1 !== '1');


let age = 20;
let maut = 50;
let fullName = 'John';
age++; // age = age + 1;
maut--; // maut = maut - 1;

age += 10; // age = age + 10;
maut -= 10; // maut = maut - 10;

fullName += ' Doe'; // fullName = fullName + ' Doe'; */

/* const age = 50;
const personAge = age == 50 ? 'aged' : 'not aged'; */



/** --------------------- DATATYPES --------------------- */
/* const name = "John Doe"; // String
const age = 30; // Number
const height = 5.9; // Number
const isMale = true; // Boolean
const studentObj = {
    name: 'John Doe',
    age: 30,
    isMale: true
}; // Object

console.log(typeof name);
console.log(typeof age);
console.log(typeof isMale);
console.log(typeof studentObj); */


/** --------------------- CONDITIONAL STATEMENTS --------------------- */
// let age = 20.01;
//console.log(age > 18 ? "Adult" : "Child");

/* if (age > 18) {
    console.log("Adult");
} else {
    console.log("Child");
} */

/* const studentMarks = 80;
switch (studentMarks) {
case 80:
    console.log("Grade A");
    break;
case 70:
    console.log("Grade B");
    break;
case 60:
    console.log("Grade C");
    break;
default:
    console.log("Grade D");
    break;
} */

/* for (let i = 0; i < 10; i++) {
    console.log(i);
} */

/** --------------------- ERROR HANDLING --------------------- */

/* let x = '';
try {
    if (x.trim() == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
}
catch (err) {
    console.log("Input is " + err);
}
finally {
    console.log('Always executes');
} */


/** --------------------- Functions --------------------- */
/* function greet(firstName = 'First', lastName = 'Last') {

    // if (lastName === undefined) {
    //     return "Hello " + firstName;
    // }

    return firstName + " " + lastName;
}

console.log(greet());*/

/** --------------------- CLASSES --------------------- */
/* class PersonMarksheet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return "Hello " + this.name;
    }

    welcome() {
        return "Welcome " + this.name;
    }
}


const person = new Person('John Doe', 30);
const person2 = new Person('Jane Doe', 25);

console.log(person.greet()); */

/* function handleH1Click() {
    const h1 = document.getElementById('h1');
    h1.style.color = 'red';
    h1.style.fontSize = '30px';
}

function handleInputChange() {
    const input = document.getElementById('changeDemo');
    const output = document.getElementById('log-msg');
    output.innerHTML = input.value;
} */

/* function handleMouseEnter() {
    alert('Mouse Enter');
}

function handleMouseOut() {
    alert('Mouse Out');
} */

// arrays in javascript
/* const fruits = ['Apple', 'Banana', 'Orange'];

const cars = new Array('BMW', 'Audi', 'Mercedes');

const student = ['John', 15, 9.5]; */

/* const objStudent = {
    "first name": 'John',
    age: 15,
    marks: 9.5
};

console.log(objStudent.name);
console.log(objStudent.age);
console.log(objStudent['marks']);

 */




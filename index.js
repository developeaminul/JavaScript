

















/**-
 * --------------------------------------------
 * Class #12
 * ----------------------------------------------
 * JavaScript Functions
 *
 */

// function sleep(name){
//    console.log(name + " is sleeping form in 10 PM");
// }

// sleep("Aminul");
// sleep("Amina");
// sleep("Farhan");

// function myFunction(a, b){
//    return a * b;
// }
// let x = myFunction(4, 4);

// console.log(x);

// function myFunction(){
//    let carName = "Volvo";
//    console.log(carName);
// }

// myFunction();
// console.log(carName);

/**-
 * --------------------------------------------
 * Class #13
 * ----------------------------------------------
 * JavaScript Objects
 *
 */
// const car ={
//    name: "Fiat",
//    model: 500,
//    weight: "550kg",
//    color: "white",
//    start: function () {
//       this.drive();
//       console.log("car has started");
//    },
//    drive: function () {
//       console.log("car is driveing");
//    },
// };

// console.log(car["weight"]);
// car.start()

// let x = 5;
// let z = new Number(5);

// console.log(typeof(x));
// console.log(typeof(z));

/**-
 * --------------------------------------------
 * Class #14
 * ----------------------------------------------
 * JavaScript Events
 *
 */

// function showDate() {
//    document.getElementById("date").innerHTML = Date()
// }
// console.log(showDate());

/**-
 * --------------------------------------------
 * Class #15
 * ----------------------------------------------
 * JavaScript Strings
 *
 */

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length);

// let text = "Aminul Is Good Parsion \"Hello\" Amina Alom";
// console.log(text);

// let a = "John";
// let z = new String("John")
// let x = new String("John")

// console.log(typeof x);

// //Comparing two JavaScript objects always returns false.
// console.log( x == z);

/**-
 * --------------------------------------------
 * Class #16
 * ----------------------------------------------
 * JavaScript String Methods
 *
 */

// let  x = "Apple, Banana, Kiwi";

// let z = x.slice(7, 13);
// console.log(z);

// let amina = "I love Amina";
// let aminaAlom = amina.replace("Amina", "Amina Alom");

// console.log(aminaAlom);

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);
// console.log(text3);

/**-
 * --------------------------------------------
 * Class #17
 * ----------------------------------------------
 * JavaScript String Search
 *
 */
// let str = "Please locate where 'locate' occurs!";
// let z = str.lastIndexOf("!");
// console.log(z);

/**-
 * --------------------------------------------
 * Class #18
 * ----------------------------------------------
 * JavaScript Template Literals
 *
 */

// let country = "Bangladesh";

// let sentence = `I love ${country} and It's big country in ${country}`

// console.log(sentence);

/**-
 * --------------------------------------------
 * Class #18
 * ----------------------------------------------
 * JavaScript Numbers
 *
 */

//  let x = 123e5
//  console.log( typeof(x));

// let x = 0.2 + 0.10;

// console.log(x);

// let x = 10;
// let y = 20;
// let z = "Hello Bangladesh";
// let result = (x + y) + z;

// console.log(result);

// let x = 10;
// let y = "10";
// let result = x * y;

// if (x = y) {
//    console.log("Result is erorr");
// } else {
//    console.log(result);
// }
// https://www.bdtechcenter.com/2021/12/blog-post.html

/**-
 * --------------------------------------------
 * Class #19
 * ----------------------------------------------
 * JJavaScript Number Methods
 *
 */

// let x = 9.656;
// // x.toExponential(2);
// // x.toExponential(4);
// let y = x.toExponential(3);

// let x = 123;
// let z = x.toString();
// console.log(typeof z);

// let x = 9.656;
// console.log(x.toFixed(0));
// console.log(x.toFixed(2));
// console.log(x.toFixed(3));
// console.log(x.toFixed(4));
// console.log(x.toFixed(5));

// let x = 9.656;

// console.log(x.toPrecision());
// console.log(x.toPrecision(2));
// console.log(x.toPrecision(3));
// console.log(x.toPrecision(4));

// let x = new Date("2000-01-01");
// console.log(Number(x));
// console.log(typeof x);

// let x = Number.MAX_VALUE;
// let z = Number.MIN_VALUE;
// console.log(x);
// console.log(z);

/**-
 * --------------------------------------------
 * Class #20
 * ----------------------------------------------
 * JavaScript Arrays
 *
 */

//  const cars = [
//    "Saab",
//    "Volvo",
//    "BMW"
//  ];

//  console.log(cars);

// const cars = [];

// cars[0] = "Saab";
// cars[1] = "Volvo";
// cars[2] = "BMW";

// console.log(cars[1]);

// const cars = ["Saab", "Volvo", "BMW"];
// cars[0] = "Opel";
// document.getElementById("demo").innerHTML = cars;
// console.log(cars);

// const person = ["Aminul", "Islam", 24];

// console.log(person.length);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let word = fruits.length;
// console.log(word);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[5] = "Pineapple";
// console.log(fruits[fruits.length -1]);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// for (i = 0; i < fruits.length; i++ ) {
//    console.log(i);
//    console.log(fruits[i]);
// }
// function myFunction(value){
// console.log(value);

// }

// fruits.forEach(myFunction);

// fruits.push("Hello")
// fruits[fruits.length] = "lemon"

// console.log(fruits);

// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;

// console.log(person);

// let = numbers = [1, 2, 3] 
// let = person = {name: "Aminul", age: 24}

// console.log(numbers);
// console.log(Array.isArray(numbers));

// console.log(numbers instanceof Array);

/**-
 * --------------------------------------------
 * Class #21
 * ----------------------------------------------
 * JavaScript Array Methods 
 *
 */

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.toString());
// console.log(typeof(fruits.join(" ")));
// let a = fruits.pop()
// console.log(a);
// fruits.push("Pineapple")
// console.log(fruits);

// console.log(fruits.shift());
// console.log(fruits);


// console.log(fruits.unshift("Pineapple"));
// console.log(fruits);
// delete fruits[0]
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const myFruits = ["Pineapple", "Strawberry"]
// fruits.splice(0, 0, "Pineapple", "Strawberry")
// console.log(fruits);


// console.log(fruits.concat(myFruits));
// console.log(fruits);
// console.log(myFruits);


// const fruits2 = fruits.concat(myFruits)
// const citrus = fruits2.slice(1, 3);
// console.log(citrus);




/**-
 * --------------------------------------------
 * Class #22
 * ----------------------------------------------
 * JavaScript Sorting Arrays
 *
 */






// const fruits = ["Banana", "Orange", "Mango"];
// const myFruits = ["Pineapple", "Strawberry", "Apple"]
// const result = fruits.concat(myFruits)


// const numbers = [30, 50, 10, 12, 59, 36];
// const fullResult = numbers.sort(function(b, c){
//    // return c - b
//    return 0.5 - Math.random()
// })
// console.log(fullResult);


/**-
 * --------------------------------------------
 * Class #23
 * ----------------------------------------------
 * JavaScript Array Iteration
 *
 */


// const numbers = [30, 50, 10, 12, 59, 36];
// function myFunction(value, index, array) {
//    console.log(value);
//    console.log(index);
//    console.log(array);
// }

// numbers.forEach(myFunction)


// const numbers = [30, 50, 10, 12, 59, 36];
// function myFunction(value, index, array) {
//   return value * 2;
// }

// const theNewNumbers = numbers.map(myFunction)
// console.log(theNewNumbers);


// const numbers = [30, 50, 10, 8, 59, 36];
// function myFunction(value, index, array) {
//    if (value > 10) {
//       return true
//    }
// }

// const theNewNumbers =numbers.filter(myFunction)
// console.log(theNewNumbers);

// const numbers = [30, 50, 10, 12, 59, 36];
// function myFunction(total, value, index, array) {
//    return total + value
// }

//  const theNewNumbers =  numbers.reduceRight(myFunction)
//  console.log(theNewNumbers);


// const numbers = [30, 50, 10, 12, 59, 36];
// function myFunction( value, index, array) {
//   return value > 18;
// }

//  const theNewNumbers =  numbers.find(myFunction)
//  console.log(theNewNumbers);



// const numbers = [30, 50, 10, 12, 59, 36];

//  console.log(Array.from("ABCDEFG"));



/**-
 * --------------------------------------------
 * Class #24
 * ----------------------------------------------
 * JavaScript date objects
 *
 */

//  const a = new Date();
//  const b = new Date(2018, 11, 24, 10, 33, 30, 0);
//  const c = new Date(0);
//  const d = new Date("October 13, 2014 11:13:00");

//  console.log(a);
//  console.log(b);
//  console.log(c);
//  console.log(d);


/**-
 * --------------------------------------------
 * Class #27
 * ----------------------------------------------
 * JavaScript Date Formats
 *
 */
//  const d = new Date("2015-03");
//  const d = new Date("2015-03-25T12:30:00Z");


// let msec = Date.parse("March 21, 2012");
// const d = new Date(msec);
// console.log(msec);



/**-
 * --------------------------------------------
 * Class #28
 * ----------------------------------------------
 * JavaScript Get Date Methods
 *
 */

//  const d = new Date();
//  const z = d.getDay();
//  console.log(z);


// const months =["January","February","March","April","May","June","July","August","September","October","November","December"];

// const d = new Date();
// console.log(d);
// let month = months[d.getMonth()];
// console.log(month);




/**-
 * --------------------------------------------
 * Class #29
 * ----------------------------------------------
 * JavaScript Set Date Methods
 *
 */

//  const today = new Date();
//  const someday = new Date();
//  someday.setFullYear(2023, 0, 14);

//  if (someday > today) {
//    text = "Today is before January 14, 2100.";
//    console.log(text);
//  } else {
//    text = "Today is after January 14, 2100.";
//    console.log(text);

//  }

//  console.log(today);
//  console.log(someday);


/**-
 * --------------------------------------------
 * Class #30
 * ----------------------------------------------
 * JavaScript Math Object
 *
 */

// let m = Math.PI;


// console.log(m);

// console.log(Math.E);
// console.log(Math.SQRT1_2);
// console.log(Math.SQRT2);
// console.log(Math.LN2);
// console.log(Math.LN10);
// console.log(Math.LOG10E);
// console.log(Math.LOG2E);
// console.log(Math.LOG10E);


// console.log(Math.round(4.9));
// console.log(Math.round(4.8));
// console.log(Math.round(4.8));
// console.log(Math.round(4.5));
// console.log(Math.round(4.4));
// console.log(Math.round(4.3));
// console.log(Math.round(-4.1));



// console.log(Math.ceil(4.9));
// console.log(Math.ceil(4.8));
// console.log(Math.ceil(4.7));
// console.log(Math.ceil(4.5));
// console.log(Math.ceil(4.4));
// console.log(Math.ceil(4.3));
// console.log(Math.ceil(4.2));
// console.log(Math.ceil(-4.1));


// console.log(Math.floor(4.9));
// console.log(Math.floor(4.7));
// console.log(Math.floor(4.6));
// console.log(Math.floor(4.5));

// console.log(Math.floor(4.4));
// console.log(Math.floor(4.3));
// console.log(Math.floor(4.2));


// console.log(Math.random());

/**-
 * --------------------------------------------
 * Class #32
 * ----------------------------------------------
 * JavaScript boolean
 *
 */

// console.log(10> 9);



/**-
 * --------------------------------------------
 * Class #33
 * ----------------------------------------------
 * JavaScript Comparison and Logical Operators
 *
 */


// let z =  6;
// let x = "6"

// console.log(z === x);


// let z =  6;
// let x = "6"

// console.log(z === x);


// let age = 17;

// if (age >= 18) {
//    console.log('You are adult!');
// }else{
//    console.log('You are not adult!');
// }


// let x = 6;
// let y = 4;
// let age = 17;


// if (age >= 18) {
//    console.log('You are adult!');
// }else{
//    console.log('You are not adult!');
// }



// console.log(age >= 18 ? "You are Adult" : "You are not adult");

// let age = "17";

// age = Number(age);
// if (isNaN(age)) {
//   voteable = "Input is not a number";
// } else {
//   voteable = (age < 18) ? "Too young" : "Old enough";
// }

// console.log(voteable);

/**-
 * --------------------------------------------
 * Class #34
 * ----------------------------------------------
 * JavaScript Conditional Statements
 *
 */

// let age = "17";

// age = Number(age);
// if (isNaN(age)) {
//   voteable = "Input is not a number";
// } else {
//   //   voteable = (age < 18) ? "Too young" : "Old enough";
//    if (age < 18) {
//       voteable ="Too young";
//    }else{
//       voteable = "Old enough";
//    }
// }

// console.log(voteable);


/**-
 * --------------------------------------------
 * Class #34
 * ----------------------------------------------
 * JavaScript Switch Statement
 *
 */

//  let day;
// switch (new Date().getDay()) {
//    case 0:
//       day = "Sunday";
//       break;
//    case 1:
//       day = "Monday";
//       break;
//    case 2:
//       day = "Tuesday";
//       break;
//    case 3:
//       day = "Wednesday";
//       break;
//    case 4:
//       day = "Thursday";
//       break; 
//    case 5:
//       day = "Friday";
//       break;
//    case 6:
//       day = "Saturday";
//       break;
//    default:
//       day = "Looking forward to the Weekend";
// }
// console.log(`Today is ${day}`);


/**-
 * --------------------------------------------
 * Class #35
 * ----------------------------------------------
 * JavaScript For Loop
 *
 */

//  const  cars = ["A", "B", "C", "D", "E"];

// for(let i = 0; i < cars.length; i++){
//    text = cars[i] + "\n";
//   console.log(text);
// }



// function howMany(selectObject) {
//    let numberSelected = 0;
//    for (let i = 0; i < selectObject.options.length; i++) {
     
     
//       if (selectObject.options[i].selected) {
//        numberSelected++;
//      }
//    }
//    return numberSelected;
//  }

//  const btn = document.getElementById('btn');
 
// btn.addEventListener('click', () => {
//   const musicTypes = document.selectForm.musicTypes;
//   console.log(`You have selected ${howMany(musicTypes)} option(s).`);
// });

// let x = 15 * 5;
// debugger;
// console.log();

// const months =["January","February","March","April","May","June","July","August","September","October","November","December"];

// for (let index = 0; index < months.length; index++) {
//    const element = months[index];
//    console.log(element);
   
// }








// const cars = ["A", "B" , "C", "D", "E"];

// for (let i = 0; i < cars.length; i++) {
//   let element = cars[i];
 
//   console.log(element);
// }

// console.log("I im done");

// let i = 10;

// for (; ; i--) {
//    if (i == 1) {
//       break
//    }else{
//       console.log(i);
//    }
   
// }
// console.log(" HelloBangladesh");


/**-
 * --------------------------------------------
 * Class #36
 * ----------------------------------------------
 * JavaScript For_in Loop
 *
 */

// const person = {fname: "Aminul", lname: "Islam", age: 25}

// for (const index in person) {


//    console.log(person[index]);
   
   
// }

// let numbers = [1, 12, 2, 4, 5, 6, 7]

// for (const number in numbers) {
   
//    console.log(numbers[number]);
// }



/**-
 * --------------------------------------------
 * Class #37
 * ----------------------------------------------
 * JavaScript For_of Loop
 *
 */
// const x = [1, 3, 4, 5, 6, 7, 8]


// for (const iterator of x) {
//    console.log(iterator);
// }

// const cars = ["BMW", "Volvo", "Mini"];
// const person = {fname: "Aminul", lname: "Islam", age: 25}

// let language = "JavaScript";

// let text = "";
// for (let x of cars) {
// text += x;
// console.log(x);
// }


/**-
 * --------------------------------------------
 * Class #38
 * ----------------------------------------------
 * JavaScript For_while Loop
 *
 */


// let i = 0;
// let text = ""
// do {
//    text += "The Number is " + i + "\n";
//    i++
// }while(i < 10)


// console.log(text);

/**-
 * --------------------------------------------
 * Class #39
 * ----------------------------------------------
 * JavaScript break
 *
 */
//  let text = "";
 
// for (let i = 0; i < 10; i++) {
//    if (i === 3) { break; }
//    text += "The number is " + i + "<br> \n";
//    console.log(text);
// }
// document.getElementById("demo").innerHTML = text;

// let text2 = "";
// for (let i = 0; i < 10; i++) {
//   if (i === 3) { continue; }
//   text2 += "The number is " + i + "<br> \n";
//   console.log(text2);
// }


// document.getElementById("demo").innerHTML = text2;


// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let text = "";

// list: {
//   text += cars[0] + "<br> \n"; 
//   text += cars[1] + "<br> \n"; 
// break list;
//   text += cars[2] + "<br> \n"; 
//   text += cars[3] + "<br> \n"; 
// }
// console.log(text);

/**-
 * --------------------------------------------
 * Class #41
 * ----------------------------------------------
 * JavaScript set
 *
 */

//  const letters = new Set(["a","b","c"]);

//  letters.add("d");
//  letters.add("e");
//  letters.add("f")

// const a = "Aminul";
// const b = "Islam";
// const c = "Amina";

// letters.add(a);
// letters.add(b);
// letters.add(c);

//  console.log( letters);



// let text = "";

// letters.forEach(function(value){
//    text += value + "\n";
//    console.log(value);
// })
// console.log(text);




// console.log(letters.values());

/**-
 * --------------------------------------------
 * Class #42
 * ----------------------------------------------
 * JavaScript map
 *
 */
// const fruits = new Map([
//    ["apples", 300],
//    ["bananas", 200],
//    ["Orange", 100]
// ]);

// const fruits = new Map();

// fruits.set("apples", 300);
// fruits.set("bananas", 200);
// fruits.set("oranges", 100);


// console.log(fruits.delete("apples"));
// console.log(fruits.has("apples"));
// console.log(fruits);

// console.log(fruits.get("oranges"));
// console.log(fruits.size);



// fruits.forEach(function(value, key){
   
//    console.log(key + " => " + value);
// })

// let value =""

// for (const iterator of fruits.entries()) {
//    value += iterator + "<br>";
   
// }

// document.getElementById("demo").innerHTML = value.to();


/**-
 * --------------------------------------------
 * Class #43
 * ----------------------------------------------
 * JavaScript typeof
 *
 */

//  typeof "John"                 // Returns "string"
//  typeof 3.14                   // Returns "number"
//  typeof NaN                    // Returns "number"
//  typeof false                  // Returns "boolean"
//  typeof [1,2,3,4]              // Returns "object"
//  typeof {name:'John', age:34}  // Returns "object"
//  typeof new Date()             // Returns "object"
//  typeof function () {}         // Returns "function"
//  typeof myCar                  // Returns "undefined" *
//  typeof null                   // Returns "object"


// function isArray(myArray){
//  console.log(myArray.constructor.toString().indexOf("Array") > -1);
// }


// isArray([1, 2, 4 , 5])

// let car = "Volvo";
// car = undefined;

// let a = "Bangladesh"
// let b = 71;

// let c = a + b;

// console.log(typeof c);



// let car = "";


// console.log(typeof car);

// let person = {fname: "Aminul", lname: "Islam", age: 25};
// person = null;

// console.log(person);

/**-
 * --------------------------------------------
 * Class #44
 * ----------------------------------------------
 * JavaScript type conversion 
 *
 */


// let a = 3.9
// let b = parseInt(a);

// console.log(b);

// let z = "4";

// let x = +z;

// console.log(typeof x);


// console.log(String ( 13 + 39));

// let z = 80e6;

// console.log(z.toExponential());


// let a = {name: "Aminul"}
// console.log( typeof a.toString());



/**-
 * --------------------------------------------
 * Class #45
 * ----------------------------------------------
 * JavaScript Bitwise
 *
 */


//  let x = 5 << 1;
//  console.log(x);

//  let z = 5 | 1;
//  console.log(z);



// function dec2bin(dec){
//    return (dec >>> 0).toString(2);
//  }

//  console.log(dec2bin(-5));



//  function bin2dec(bin){
//    return parseInt(bin, 2).toString(10);
//  }

// console.log(bin2dec(101));

/**-
 * --------------------------------------------
 * Class #46
 * ----------------------------------------------
 * JavaScript Regular Expressions
 *
 */

// let text = "Visit W3Schools!";
// let  x = text.search(/w3Schools/i)

// let result = text.replace(/microsoft/i, "W3Schools")

// let text = `A regular expression is a sequence of characters that forms a search pattern.
//             When you search for data in a text, you can use this search pattern to describe what you are searching for.
//             A regular expression can be a single character, or a more complicated pattern.
//             Regular expressions can be used to perform all types of text search and text replace operations.`;

// let result = text.match(/search/g);


// console.log(result);

// // let text = document.getElementById("matching__text").innerHTML;
// let text = document.getElementById("matching__text");
// const pattern = /x/;
// const matching = pattern.test(text);

// // document.getElementById("demo").innerHTML = matching;
// console.log(matching);


// const obj = /!/.exec("The best things in life are free!");
// const exe = "Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input;

// document.getElementById("demo").innerHTML = exe;

// console.log(obj);
// console.log(exe);





/**-
 * --------------------------------------------
 * Class #47
 * ----------------------------------------------
 * JavaScript Errors
 *
 */


// let x = 12;

// try {
//    if (x == "")  throw "Empty";
//    if (isNaN(x)) throw " mot a number";
//    x = Number(x);
//    if(x < 8) throw "too low";
//    if(x > 10) throw{
//       message: "Too Hight",
//       name: "HightError"
//    }

//  }
//  catch(err) {
//    console.log(err);
//  }
//  finally {
//    console.log("This is errors handler");
//  }


/**-
 * --------------------------------------------
 * Class #48
 * ----------------------------------------------
 * JavaScript  Scope
 *
 */


//  function myFunction() {
//    let carName = "Volvo";   // Function Scope
//    console.log(carName);
//  }

// myFunction()

/**-
 * --------------------------------------------
 * Class #49
 * ----------------------------------------------
 * JavaScript  Hoisting
 *
 */

//  var x = 5; // Initialize x

//  console.log(x, y);
 
//  var y = 7; // Initialize y



/**-
 * --------------------------------------------
 * Class #50
 * ----------------------------------------------
 * JavaScript  use start
 *
 */

/**
Why Strict Mode?
1/ Strict mode makes it easier to write "secure" JavaScript.

2/ Strict mode changes previously accepted "bad syntax" into real errors.

3/ As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, 
this will throw an error, making it impossible to accidentally create a global variable.

4/ In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.

5/ In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property,
a non-existing variable, or a non-existing object, will throw an error.
 */


/**-
 * --------------------------------------------
 * Class #51
 * ----------------------------------------------
 * JavaScript  this keyword
 *
 */

// const person = {
//    firdtNmae: "Aminul",
//    lastName : "Islam",
//    id       : "A555",
//    fullName : function(){
//       return this.firdtNmae + " " + this.lastName;
//    }
// }
// console.log(person.fullName());


/**-
 * --------------------------------------------
 * Class #52
 * ----------------------------------------------
 * JavaScript  Arrow Function
 *
 */
//  var hello;

//  hello = function() {
//    document.getElementById("demo").innerHTML += this;
//  }
 
//  //The window object calls the function:
//  window.addEventListener("load", hello);
 
//  //A button object calls the function:
//  document.getElementById("btn").addEventListener("click", hello);


/**-
 * --------------------------------------------
 * Class #53
 * ----------------------------------------------
 * JavaScript  class
 *
 */

//  class Person{
//    constructor(name, age){

//     this.name = name;
//     this.age = age;
//    }
//    showDisplay() {
//       console.log(`${this.name} is typing on keyboard`);
//    }
// }

// const person1 = new Person("Farhana", 12);
// const person2 = new Person("Aminul", 26);


// person1.showDisplay()
// person2.showDisplay()



/**-
 * --------------------------------------------
 * Class #54
 * ----------------------------------------------
 * JavaScript  JSON
 *
 */






//  let text = '{ "employees" : [' +
//  '{ "firstName":"John" , "lastName":"Doe" },' +
//  '{ "firstName":"Anna" , "lastName":"Smith" },' +
//  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

//  const obj = JSON.parse(text);
//  console.log(obj);


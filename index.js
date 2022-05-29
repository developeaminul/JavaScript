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
 * Class #17
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
 * Class #18
 * ----------------------------------------------
 * JavaScript String Search
 *
 */
// let str = "Please locate where 'locate' occurs!";
// let z = str.lastIndexOf("!");
// console.log(z);


/**-
 * --------------------------------------------
 * Class #19
 * ----------------------------------------------
 * JavaScript Template Literals
 *
 */

let country = "Bangladesh";

let sentence = `I love ${country} and It's big country in ${country}`

console.log(sentence);


function sleep(name, time){
   console.log(name + " is sleeping form in " + time);
}

sleep("Aminul", "10PM");
sleep("Amina", "11PM");
sleep("Farhan", "12PM");

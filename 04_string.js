// // How to add 2 string together

let myFirstName = " Afia chowdhury"
let myLastName = " Moumi "

console.log( typeof (myFirstName + myLastName)); // This type of string is a STRING

console.log( `My full name is ${myFirstName.toUpperCase()} ${myLastName.toUpperCase()}`); // Use backtic is better and mordern coding now a days. So try to follow this one.

// we can declire a string with another way

let studentName = new String(" Asif "); // When we declire a string like this it will convert as a object and it will take heap memory.

console.log( typeof studentName); // this type of string is OBJECT

//******************************* STRING METHODS***************************

// toUppercas and toLowercase methods: This methods don't take any parameters. 

let firstName = " maria "
let lastName = " dell "

console.log(`Her first name in uppercas ${firstName.toUpperCase()} and her last name in lowercase ${lastName.toLocaleLowerCase()}`);

//toString and substring Methods: yes toString and subString methods has parameters but to string parameters is optional.
// substring is use to extract a portion of a string. It has 2 parameters 1.strating index and 2.Ending index(Optional)

let numbertostr = 42
let result = numbertostr.toString();
console.log( typeof result)

let fullString = "I learn javascript everyday"

let subResult = fullString.substring(8, 17) 

let subresult1 = fullString.substring(0)

console.log(subResult)

console.log(subresult1)








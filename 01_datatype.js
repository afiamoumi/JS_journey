/* Java script have so many data types: (SS BB NN U)
    1. String   2. Symble ( will learn leter)
    3. Boolen   4. BigInt ( will learn leter)
    5. Number   6. Null 
    7. Undefine
*/
let studentName = "Moumi";
const studentId = 123;
let studentAddress;
let passMark = null;


// we can check the type of the data 
console.log( typeof studentId);

// we can check all output at a time
console.table([studentName, studentAddress, studentId, passMark]);

//Conversion of Dtat types. We can convert a data type to another 

//Number to string conversion

let primaryNumber = 12345

let numbertoString = String(primaryNumber);

console.log(numbertoString);

console.log( typeof numbertoString);

// String to Number conversion

let score = "33abc"

let valueOfnumber = Number(score) // convert the string to number

console.log( typeof valueOfnumber) // type will be Number but the value will be not a number

console.log( valueOfnumber) // Output will be NaN ( Not a number)

// boolen to number conversion

let primaryvalue = true

let primaryvalue2 = Number(primaryvalue) 

console.log( typeof primaryvalue2) 

console.log( primaryvalue2) // Output will 1

// Others datatype to Boolen conversion

let newValue = 1

let boolenConv = Boolean(newValue)

console.log(boolenConv); // output will be true

console.log( typeof boolenConv);

// If we use NULL and Undefined to assign to the varible value then it will output the false.
// But if we use any string or empty string the output will be TRUE.


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

//Number to string

let primaryNumber = 12345

let numbertoString = String(primaryNumber);

console.log(numbertoString);
console.log( typeof numbertoString);

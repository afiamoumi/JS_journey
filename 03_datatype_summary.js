
//  ************************** DATATYPE************************

// There are two type of Data:

// 1.Primitive data types // call by value
// 2.Non-Primitive data types or reference type // call by reference

// ** How to store the data and how to access the data that is the main point of diffrence.

/* Primitive data type: 7 catagories:
     
     1. String 2. Number 3. Boolen 4. Symble 5. BigInt 6. Undefined 7. Null */

const studentName = " asiya";
const studentId = 123;
const isActive = true;
const id = Symbol('123');
const veryBigNum = 123456789900n;
let studentAdd;
let isTemp = null;

console.table([ studentName, studentId, isActive, veryBigNum, studentAdd, isTemp]);

/* Non-Primitive data type:
        
    1. Array 2. Object  3. Function */

// ARRAY
const myFriends = [ "Badhon", "rajib","sumi","sagor","jue"];

// OBJECT
let myObj1 = {
     Name : "Moumi",
     Age : 22,
     Add : "Boyra bazar",
     HoldingNum : null
}

// FUNCTION
let myFunction1 = function(){

     console.log(" This is my first function");
}
         
// To check a type of any veriable use the typeOf 

console.log(typeof myObj1 );
console.log(typeof myFunction1 );

/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */

// Comparison output will be boolen value
//Simple comparison with same datatype

console.log( 2 > 1);
console.log( 2 <= 5);
console.log( 45 == 37);
console.log( 34 >= 45);
console.log( 100 != 100);


// comparison with two diffrent data types
     
console.log( "2" == 2) // "2" will be convert in number and ans will be true
console.log ("2" == 5 ) // same as avobe and ans will be false
console.log( "5" <= 4)  // same as avobe and ans will be false
console.log( 56 > "23"); // "23" will be convert to number and ans will be true

// Typescript dosen't allow diffrent data type comparison

// What about NULL value

console.log( null > 0); // Null is not grater than 0 so and is false

console.log( null == 0);// Null is not equal to 0 so this is also false

console.log( null >= 0);// but Null is >= to 0 so this is true. This is the confusion output

// What about Undefined

console.log( undefined > 0); // ans will be false

console.log( undefined == 0);// false

console.log( undefined < 0);// flase

// stric check is ===
/* So when we check 2 datatype with === oparator then it will check the data type first and dosen't convert any datatype to other. it will
produce error*/

console.log("2" === 2 ); // it will not check because there are two diffrent datatype



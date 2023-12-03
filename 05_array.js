//*********************************** ARRAY ********************************

//In general arrys are declire by []. and for access an array you have to assign the index number.

let arr1 = [ "abdul", "kholil", "subamn"]

console.log( arr1[0]);

//you can add any other datatypes in one array. it can be any datatype

let studentInfo = [ "rasel", 24, "khulna", null, undefined, 10000]

console.log( studentInfo[3]);

//PUSH and POP from an array

let studentOne = [ "latif", 12, "class 6", "ture", "pass"]

studentOne.push("afia", "hetesh", 90, 100.67) // add the values last of the array.

console.log(studentOne);

studentOne.pop() // extract the last value of an array.

console.log(studentOne[8]); // if there is no data in the index it will show undefined.

// UNSHIFT and SHIFT

let numbers = [ 1, 2 , 3, 4, 5]

numbers.unshift(11) // it will add the item first in the array and shift all the element.

console.log(numbers);

numbers.shift(); // it will remove the item from the first in the array

console.log(numbers);

//QUESTIONS methods ( includes, indexof)

let froutsNames = ["apple", "banana", "lichi", "guava"];

console.log(froutsNames.includes("apple")); // includes fine the data and return true or false 

console.log(froutsNames.indexOf("guava")); // it will give you the index of the data 

//JOIN methods

let array1 = [ 1, 2, 3, 4, 5]

let newarr = array1.join() // join method will make the array to string with the same value

console.log( typeof newarr); // the type will be OBJECT to STRING

console.log( typeof arr1); // the type of normal array is OBJECT

// SLICE & SPLICE

let frouits1 = [ "apple", "Banana", "lichi", "orange", "Mango"]

let newFrouits = frouits1.slice(1,4) // The slice method dosn't take the last one and it will make a another array with the slice items.

console.log(newFrouits); // It show a new array

console.log(frouits1); // The original array will be the same

let newFrouits2 = frouits1.splice(2, 4)// The splice method dose take the last value and make a another array with that values

console.log(newFrouits2)// It will show the new array with splice item

console.log(frouits1); // BUT the main diffrent between the slice and splice , splice manipulate the main array and change the array with the left items.


//Marge two array

let student1 = ["a", "b", "c"]

let student2 = [ 1, 2, 3, 4, 5]

student1.push(student2)

console.log(student1)// If we want to marge 2 array with push method it will make a problem that is the array will include in the other array like a element of the main array.So that will not properly marged at all. It will work on the exsisting array

let newStudent = student1.concat(student2)

console.log(newStudent); // concat also marge the arrays but it will show the same output like push method. But concat return a new array.

//to solve the problem we can do 

//spread method

let mango = [1, 2, 3, 4, 7]

let banana = [4, 5, 6]

let newspreadarr = (...mango, ...banana)

console.log(newspreadarr); // it will add the two array together

//Nested array

const abc = [1, 2, 3,[4, 6], 7, [8, 9,[10, 12]]]

let margabc = abc.flat(1) // The flat method will marge the array with depth how much you want.
console.log(abc);// but not change the main array

console.log(margabc);

// Some intaresting methods isArray, from and of

console.log(Array.isArray("moumi")) // it will return false bcz this is a string.

console.log(Array.from("Afiachowdhury")) // it will convert the string to an array with every single element.

let amg = 100
let bac = 200
let cod = 300

console.log(Array.of(amg, bac, cod)); // this of method made an array with the values.







"use strict";
//creating an array
const number = [1, 2, 3, 4, 5, 6,];
function myFunction(value, index, array) {
    return value > 5;
}
//returns the first array element that passes a test 
let first = number.find(myFunction);
// does the same thing as find
let greater = number.findIndex(myFunction);
//return the number of elements inside the array
let size = number.length;
//returns the element of an array as a comma striong
let myList = number.toString();
//returns an indexed element it can be the first [0] or last[-1]
let last = number.at(-1);
let lookFirst = number.at(0);
//remves the lasrt element from an array
let doPop = number.pop();
//adds an new element to the array at the end  
let length = number.push(76);
console.log(first);

# Arrays
in javascript arrays can be of different types
so typeScript specifies which type of array it is eg

# What are Arrays

- Arrays are container-like values that can hold other values.
- The values inside an array are called elements.
- Array elements don't all have to be the same type of value.
- Elements can be any kind of javascript value - even other arrays.

# Accessing elements

- To access one of the elements inside an array, you'll need to use the brackets and a number like this: ```myArray[3]``` where myArray is the name of the array and three is the index number of the element we want to access all index numbers start from [0] in any programing language

# Array Properties & Methods

- Arrays have their own built-in variables and functions, also know as properties and methods

## 1 LENGTH

- An array's length property stores the number of elements inside the array.

## 2 CONCAT

- An array's concat method returns a new array that combines the valus of two arrays.

## 3 POP

- An array's pop method removes the last element in the array and return that element's value.

## 4 PUSH

- An array's push methods adds elements to the array and returns the array's length.

## 5 REVERSE

- An array's reverse methods returns a copy of the array in opposite order.

## 6 toString

- the to string() methods return the elements of an array as a comma separated string.

## 7 AT

- method return an indexed element from an array.

## 8 JOIN

method also joins all array elements into a string.

## 9 DELETE

- leaves undefined holes in the array

## 10 INDEXOF

- searches an array for an element value and returns its position.

## 11 FIND

- Method returns the value of the first array elment that passes a test

## 12 FINDINDEX

- Method returns the index of the first array element that passes a test functions.

# code

``` typescript
//creating an array
const number: number[] =[1,2,3,4,5,6,];

function myFunction(value: number,index: number,array: numbers){
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
let first = number.at(0);
rt element from an array
let number = number.pop();
//adds an new element to the array at the end  
let length = number.push(76);
 
 
 
 ```
g
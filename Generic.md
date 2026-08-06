# Generic 
- first thing you need to know is that a generic function has to be reuseable regardless of its data type
- by data type it could be a string ,number, boolean etc
- any could be said to be generic to a certain point but data can be lost as it is not specific
- hence we use the <type> why becuz it could be said that it works the same why as an any but <type> locks the type input and returns that type 
- for example
```typeScript
function identity<T>(value: T): T{
    return value;
}``` 

- in this case if 
- identity(10); 
console.log(value) will return a number if a string ias input a string will be returned

# Now when it comes to generic in array
-typescript will type
```typeScript
function printArray<T>(arr: T[]){
    arr.forEach(item => console.log(item))
}
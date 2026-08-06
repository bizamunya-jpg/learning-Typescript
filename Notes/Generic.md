# Generic 
- first thing you need to know is that a generic function has to be reuseable regardless of its data type
- by data type it could be a string ,number, boolean etc
- any could be said to be generic to a certain point but data can be lost as it is not specific
- hence we use the type why becuz it could be said that it works the same why as an any but type locks the type input and returns that type - think of the any type as buying goods you pay in cash but what you receive is the product.
- think of the type as someone asking for time and the response is the time is hence the input was you reading the time and your response was the time you read lets assume the user user asked "what the time is it" you would respond by saying "the time is"
- hence think of generics as a conversation between two people of the same language a question is asked in english hence compiler locks the response to be in english it can never be like the any veriable which gets an input in english and may respond in french
- for example
```typeScript
function identity<T>(value: T): T{
    return value;
}```

- in this case if 
identity(10); 
console.log(value) will return a number if a string is the input a string will be returned

# Now when it comes to generic in array
-typescript will type
```typescript
function printArray<T>(arr: T[]){
    arr.forEach(item => console.log(item))
} ```



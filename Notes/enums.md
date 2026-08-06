# ENUMS
Is a special class that represents a group of constants
enums come in two flavours string and numeric

# Numeric Enums - dEFAULT
By default, enums will initialixe the first value to 0 and add 1 to each addtional value

# Numeric Enum - Initialized
 You can set the value of the first numeric enum and have it auto increment from that
 
 example
 ```TypeScript
 //const small = 1;
 // const medium = 2;
 // const large = 3;
 //PascalCase
 enum Size{ small = 1, Medium, large};
 let mySize: Size= Size.Medium;
 console log(mySize);```

 #Numeric Enums - Fully initialized
 we can assign unique number values for each enum valuer.
 jence the valuer will not be incremented automatically

 ```typescript
 enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400,
 }
 // log 404
 console.log(StatusCodes.NotFOUND);
 
 //log 200
 console.log(StatusCodes.success);```

 # String Enums
 Enums can also contain strings.

 This is more coommon than numeric enums, because of their readability and intent.
 ```typescript 
 enum Size{Small = 's', Medium ='m' , Large='l' }
 //logs small
 console.log(Size.Small)
 ```
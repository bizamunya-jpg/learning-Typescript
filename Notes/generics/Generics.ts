// functions without generics
function identity (arg: number):number{
    return arg;
}
// see how the data type is specified 
// with generics data type is not specified
// the data type could be a string , number or a boolean
// yes in a way the any special type could be generic but loses some of the data

// A function with generics
function identity1<Type>(arg: Type): Type {
return arg;
}
//see how we did not use data types such as number or string 
// Reason being <Type> is a placeholder of some sort
// by placeholder we mean the compiler will recoginise the data type and lock that data type


// for example:
identity1(1);
console.log(identity1);
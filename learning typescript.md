# WHAT IS TYPESCRIPT
TypeScript-is a proggramming language to address the problems of javaScript;

# Benefits of TypeScript:

1. Static typing 
2. Code completion
3. Refactoring
4. Shorthand notation

# Static Typing
once type is set it can not be changed 
eg 
``` typescript
const name : sting = "Munyaradzi";
console.log(name)```

once const name is declared as string it can not be any other type
eg 
```typescript 
let name : string = 30,
console.log(name) ```
this will produce an error as name can never be a number in typescript
 
 # DRAWBACKS OF TYPESCRIPT
 1. Compilation
 2. Discipline in Coding

 #How to configure a typescript compiler
 in the terminal we type 
 tsc--init
which will create a tsconfig.json file

# What you will learn 
1. The any Type
2. Arrays
3. Tuples
4. Enums
5. Functions
6. Objects

#BUILT-IN TYPES
Javascript has:
i) numbers
ii) string 
iii) boolean
iv) null 
v) undefined
vi) object
 TypeScrit adds the following to theses:
 i) any
 ii) unknown
 iii) never
 iv) enum
 v) tuple

 # the any type 
 avoid using any as much as possible;


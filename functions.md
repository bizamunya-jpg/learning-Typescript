# Return Type

1. the type of value returned by the functioncan be explicity defined
2. if no return type is defined, typeScript will attempt to infer it through the type of variables or expressions returned.
 
# Void Return type
 
 - the type void can be used to indicate a function doesn't return any value
 
 # Parameters
- FUNctuion parameters are typed with a similar syntax as variable declarations
- if no pararmeter type is defined, TypeScript will default to using any,unless additional type nformation is available as shown in the dafualt parameters and Type Alias section below

# Optional parameters:
-by default typescript will assume that all parameters are required,but they can be explictly marked as optional

# Default parameters
- for parameters with default values,the default value goes after the type annotation.
- typescript can also infer the type from the default value.

# Named Parameters
typing named parameters follows the same pattern as typing normal parameters.

# Rest Parameters 
rest parameters can be typed like normal parameters,but the type must be an array as rest pararmeters are always arrays

# Type Alias
- These types are gwritten similarly to arrow functions.


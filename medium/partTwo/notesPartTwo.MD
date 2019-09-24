<!-- https://medium.com/angularmedellin/a-brief-introduction-to-typescript-part-2-8d13804591a2 -->

## Functions

- Considered first-class citizens due to their importance in Javascript and TypeScript

###  Named functions
-  The syntax to declare a function in Javascript follows a particular structure:

annexeFunction.nameFunctions.one

- Due to dynamic types, Javascript allows any data to be passed in the functions params

 annexeFunction.nameFunctions.two

 - Not necessarily bad, but it does not follow the desired effect from the function. Typescript solves this

 annexeFunction.nameFunctions.three


### Optional and Default Parameters

- In TypeScript, every parameter is assumed to be required by the function unlike Javascript.
  - If we would like to have this optional parameters, we need to add them after the required parameters with ?
  - Default values can be defined in the Params
- In order to declare the type of the variable add the input and output types need to be declared.
- The input types are declared as (x: number, y; number)accordingly with the parameters of the function, and the output type is related to the return type numberpreceded by the => symbol.


annexeFunction.defaultParams


### Arrow Functions

annexeFunction.arrowFunction

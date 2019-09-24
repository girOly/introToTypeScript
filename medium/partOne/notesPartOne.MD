<!-- https://medium.com/angularmedellin/a-brief-introduction-to-typescript-part-1-ceedb3e9b1c0 -->

## How does it work?

- Typescript needs to have its syntax transpiled into standard Javascript.
  - Typescript files have the .ts extension, and the transpiler produces the .js extension.


## Types

### Dynamic Types

- Javascript counts with dynamic types, When you declare a variable, you don't define the type:

annexeOne.ex1

- The type will be inferred during execution.

annexeOne.ex2


### Static Types

- Typescript adds optional static types to Javascript, you can declare a typed variable:

annexeOne.ex3

- The transpiler would alert us of this error with a message like: Type 'number' is not assignable to type 'string'.
- Typescript supports most of Javascript types, Typescript will even infer non-declared types during the transpiling

annexeOne.ex4


#### Boolean

annexeTypes.boolean

#### Number

annexeTypes.number


#### String

annexeTypes.string


#### Array

annexeTypes.array


#### Enum

annexeTypes.enum


#### Any and Void

annexeTypes.anyVoid

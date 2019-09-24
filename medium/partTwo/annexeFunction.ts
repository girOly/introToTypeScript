// Named Functions

// Named Functions.One

function name(parameters) {
  statements
}


function add(x, y) {
  return x + y;
}

 add(1,2)
// 3


// Named Functions.Two

> add(true,false)
// 1
> add("Oh ","No!")
// 'Oh No!'


// Named Functions.Three

function add(x: number, y: number): number {
  return x + y;
}


// Default params

function add(x: number, y?: number): number {
  if(y)
    return x + y;
  else
    return x;
}

//  Y has a default value of 0
function add(x: number, y = 0): number {
  return x + y;
}

// Stored in a var, use semi-colon to be executable
let add = function (x, y) { return x + y; };


//  Full declaraton

let add: (x: number, y: number) => number =
    function (x: number, y: number): number {
      return x+y;
    };


//  Arrow Functions

let add = function (x, y) { return x + y; };

// Reformated into:

let add = (x, y) => x + y;

// With types

let add = (x: number, y: number): number => x + y;

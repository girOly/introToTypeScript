// Boolean

let no: boolean = false;
let yes: boolean = true;

//  Number

let binary: number = 0b0001;
let octal: number = 0o0012;
let decimal: number = 100;
let hex: number = 0x03e8;

//  String

let s: string = “Angular Medellin”;

// or

let s: string = ‘Angular Medellin’;

//  Can also use template strings

let t: string = `Hello World!
Hello from Angular Medellin!`;

// can also use embedded expressions

let greeting: string = “Hello”;
let language: string = “TypeScript”;
let version: number = 2.5;
let message: string = `${ language + “ “ + version } says:
${ greeting }!`;

// TypeScript 2.5 says:
// Hello!

//  Array

let list: number[] = [1, 2, 3, 4, 5];

// or

let list: Array<number> = [1, 2, 3, 4, 5];

// Enum

enum Day {Monday, Tuesday, Wednesday, Thursday, Friday};
let d: Day = Day.Monday; // d = 0

// Any and Void

let a: any = “Bye type-checking!”;
a = false;
a = -1;

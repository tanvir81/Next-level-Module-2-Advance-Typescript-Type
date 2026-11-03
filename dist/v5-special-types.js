//Todo: Examples of different types
//? Top Types
let top = "TopType";
top = 123;
top.length; // no error
// const something: unknown = "Hello";
//something.length; // Error: Object is of type 'unknown'.
//? core Types
let something2;
const num = 42;
something2 = num; // No error, unknown can hold any value
const str = "Hello";
something2 = str; // No error, unknown can hold any value
const currentUser = null;
//? Unit Types
const greet = () => {
    console.log("Hello world");
};
something2 = greet();
//? Sub -types Of Unit Types
const newGreet = () => {
    console.log("Hello world");
    return undefined;
};
const greeting = newGreet();
console.log(greeting);
// ? Bottom Types
const getError = (msg) => {
    throw new Error(msg);
};
const x = getError("abcd");
export {};

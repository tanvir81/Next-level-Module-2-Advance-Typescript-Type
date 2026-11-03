//Todo: Examples of different types

//? Top Types
let top: any = "TopType";
top = 123;
top.length; // no error

// const something: unknown = "Hello";
//something.length; // Error: Object is of type 'unknown'.

//? core Types
let something2: unknown;
const num: number = 42;
something2 = num; // No error, unknown can hold any value
const str: string = "Hello";
something2 = str; // No error, unknown can hold any value

//? Nullish Types
interface User {
  name: string;
}
type LoggedInUser = User | null;
const currentUser: LoggedInUser = null;

//? Unit Types

const greet = () => {
  console.log("Hello world");
};
something2 = greet();
//? Sub -types Of Unit Types
const newGreet = (): undefined => {
  console.log("Hello world");
  return undefined;
};

const greeting: void = newGreet();
console.log(greeting);

// ? Bottom Types

const getError = (msg: string): never => {
  throw new Error(msg);
};

const x: null = getError("abcd");

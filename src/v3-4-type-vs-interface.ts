//* Type Alises Vs interface

//? interface generally Connected to object and class
//? type alias is more connected to literal, unions, tuples, and primitive types

type ID = number;
//! initerface id = number

type Role = "admin" | "member";

//! interface "admin" | "member"
//? can not use interface for literal types, union types, and primitive types

//* but possible inside interface for object types

interface User {
  name: string;
  id: ID;
  role: "admin" | "member";
}

const user: User = {
  id: 123,
  name: "jon",
  role: "admin",
};

// TODO: interface

interface Animal {
  species: string;
}

interface Cat extends Animal {
  breed: string;
}

const cat: Cat = {
  breed: "Persian",
  species: "Feline",
};
// TODO: with type alias

type Vehicle = {
  brand: string;
};

type Car = Vehicle & {
  model: string;
};

const car: Car = {
  brand: "Toyota",
  model: "Corolla",
};

interface IEmployee {
  name: string;
}
interface IEmployee {
  id: number;
}

const employee: IEmployee = {
  name: "John",
  id: 123,
};

// this is not possible with type alias, it will throw an error
// !type TEmployee = {
//!   name: string;
// !};
// !type TEmployee = {
// !  id: number;
//! };

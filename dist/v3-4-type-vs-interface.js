//* Type Alises Vs interface
const user = {
    id: 123,
    name: "jon",
    role: "admin",
};
const cat = {
    breed: "Persian",
    species: "Feline",
};
const car = {
    brand: "Toyota",
    model: "Corolla",
};
const employee = {
    name: "John",
    id: 123,
};
export {};
// this is not possible with type alias, it will throw an error
// !type TEmployee = {
//!   name: string;
// !};
// !type TEmployee = {
// !  id: number;
//! };

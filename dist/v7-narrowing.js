// ? typeof
let x = ["123"];
console.log(typeof x === "object");
// ? type Guard
const print = (value) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return value;
    }
};
const loggInUser = {
    name: "Tan",
    address: {
        street: "abc",
    },
};
const showAddress = (user) => {
    if (user && user.address) {
        console.log(user.address.street);
        return;
    }
    throw new Error("User Not found");
};
export {};
// ? Equality
// ? "in" operator
// ? "instanceof" check
// ? Discriminated Union

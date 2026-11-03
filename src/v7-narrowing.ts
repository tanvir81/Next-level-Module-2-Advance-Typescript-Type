// ? typeof
let x = ["123"];
console.log(typeof x === "object");

// ? type Guard

const print = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value;
  }
};
// ? truthiness

type User = {
  name: string;
  address?: {
    street: string;
  };
} | null;

const loggInUser: User = {
  name: "Tan",
  address: {
    street: "abc",
  },
};

const showAddress = (user: User) => {
  if (user && user.address) {
    console.log(user.address.street);
    return;
  }
  throw new Error("User Not found");
};
// ? Equality
// ? "in" operator
// ? "instanceof" check
// ? Discriminated Union

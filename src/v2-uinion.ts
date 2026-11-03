// const greeting = () => {
//   console.log("Hello, programming World!");
// };

// greeting();

//*Literal Types
type Status = "pending";

const status: Status = "pending";
console.log(status);

//* Basic Union

type Identity = string | number;
//const id : Identity = 123;
//or
const id: Identity = "123";
console.log(id);

//* Literal Union
type Role = "User" | "admin";

const userRole: Role = "User";
console.log(userRole);

//*Object Union
type Admin = {
  id: number;
  role: "admin";
  privileges: string[];
};
type Member = { id: number; role: "member"; plans: string[] };

type User = Admin | Member;

const user1: User = { id: 1, role: "admin", privileges: ["read", "write"] };
console.log(user1);

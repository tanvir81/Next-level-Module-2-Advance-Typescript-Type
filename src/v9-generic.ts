// const wrapInArray = <T>(value: T) => {
//   return [value];
// };

// const stringArr = wrapInArray<string>("Abc");
// const numberArr = wrapInArray<number>(123);

// // console.log(stringArr);
// // console.log(numberArr);

// numberArr.map((item) => item.toUpperCase());

interface User {
  name: string;
  role: string;
}
interface Blog {
  title: string;
  description: string;
  date: string;
}

interface ApiResponce<T> {
  data: T;
  success: boolean;
  statusCode: number;
}

type UserResponce = ApiResponce<User>;
type BlogResponce = ApiResponce<Blog>;

const userRes: UserResponce = {
  statusCode: 200,
  success: true,
  data: {
    name: "xyz",
    role: "dghsd",
  },
};

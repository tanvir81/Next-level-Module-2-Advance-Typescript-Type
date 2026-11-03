// ?Type Assertion
// ? as syntex
type Status = "panding" | "approved" | "rejected";

const someStatus: string = "panding";

const showStatus = (status: Status) => {
  console.log("Your stattus is " + status);
};

showStatus(someStatus as Status);

// *non-null assertion

interface Config {
  port?: number;
}

const config: Config = {
  port: 5000,
};

//const currentPort: number = config.port!;
const currentPort: number = config.port as number;

// *constant Assertion

const configration = {
  port: 8080,
  prifix: "/api/v1",
} as const;

const someStatus = "panding";
const showStatus = (status) => {
    console.log("Your stattus is " + status);
};
showStatus(someStatus);
const config = {
    port: 5000,
};
//const currentPort: number = config.port!;
const currentPort = config.port;
// *constant Assertion
const configration = {
    port: 8080,
    prifix: "/api/v1",
};
export {};

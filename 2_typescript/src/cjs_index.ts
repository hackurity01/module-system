// const add = require("./add.cjs");
// import add, { a } from "./add";
// import * as add2 from "./add";

const add = require("./esm_add");

console.log("add", add);

// console.log("add(10, 5) = ", add(10, 2));
// console.log("a", a);

// console.log("add2", add2);
// console.log("add2.a", add2.a);
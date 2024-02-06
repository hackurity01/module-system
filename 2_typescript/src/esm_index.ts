// const add = require("./add.cjs");
// import add, { a } from "./add";
// import * as add2 from "./add";

import test1 from "./esm_add";
import test2 from "./cjs_add";

console.log("test1", test1);
console.log("test2", test2);

// console.log("add(10, 5) = ", add(10, 2));
// console.log("a", a);

// console.log("add2", add2);
// console.log("add2.a", add2.a);

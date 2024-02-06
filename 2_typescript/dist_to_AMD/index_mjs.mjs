// const add = require("./add.cjs");
// import add, { a } from "./add";
// import * as add2 from "./add";
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./add_mjs"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const add_mjs_1 = require("./add_mjs");
    console.log("add", add_mjs_1.add);
});
// console.log("add(10, 5) = ", add(10, 2));
// console.log("a", a);
// console.log("add2", add2);
// console.log("add2.a", add2.a);

// module.exports.add = function (a: number, b: number) {
//   return a + b;
// };
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.add = void 0;
    function add(a, b) {
        return a + b;
    }
    exports.add = add;
});
// export default add;
// export const a = 123;

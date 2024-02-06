const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/esm_index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "esm.bundle.js",

    // library: 'someLibName',
    libraryTarget: "umd",
    auxiliaryComment: "Test Comment",
  },
};

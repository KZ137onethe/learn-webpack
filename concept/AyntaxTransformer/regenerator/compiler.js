const fs = require("fs");
const path = require("path");
const regenerator = require("regenerator");

function compile(code) {
  return regenerator.compile(code, {
    includeRuntime: true,
  });
}

(() => {
  fs.readFile(path.resolve(__dirname, "./index.js"), "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    const result = compile(data);
    // console.log(result.code);
    fs.writeFile(path.resolve(__dirname, "./output.js"), result.code, (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log("Compilation complete, output written to output.js");
    });
  });
})();

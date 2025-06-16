const { DllPlugin } = require("webpack");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    gsap: ["gsap"],
  },
  output: {
    filename: "target/[name].js",
    clean: true,
    library: "[name]",
  },
  plugins: [
    new DllPlugin({
      path: path.resolve(__dirname, "target", "[name].mainfest.json"),
      name: "[name]",
    }),
  ],
};

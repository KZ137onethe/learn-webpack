const TestPlugin = require("./plugins/test-plugin");

module.exports = {
  mode: "development",
  plugins: [new TestPlugin()],
};

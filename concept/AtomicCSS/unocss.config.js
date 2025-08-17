import { defineConfig, presetMini } from "unocss";
import presetAttributify from "@unocss/preset-attributify";

export default defineConfig({
  cli: {
    entry: [
      {
        patterns: ["./src/pages/index/index.html"],
        outFile: "./src/pages/index/style.css",
      },
      {
        patterns: ["./src/pages/about/index.html"],
        outFile: "./src/pages/about/style.css",
      },
    ],
  },
  presets: [presetMini(), presetAttributify()],
});

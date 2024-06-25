// vitest.config.ts
import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config.js";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      outputFile: "tests-output/index.html",
      reporters: ["html", "verbose"],
      include: [
        // Include
        "tests/**/*.test.ts",
        "tests/**/*.test.tsx",
      ],
      exclude: [
        //"tests/client",
        //"tests/server",
        "tests-output/**/*.*",
        "src/client/App.tsx",
      ],
      coverage: {
        reporter: ["text", "json", "html"],
        reportsDirectory: "tests-output/coverage",
        include: [
          // Coverage
          "src/server",
          "src/client",
        ],
        exclude: [
          // Not Coverage
          "src/client/*.tsx",
        ],
      },
    },
  })
);

// vitest.config.ts
import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config.js";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      outputFile: "target/index.html",
      reporters: "html",
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
        "src/client/theme.ts",
      ],
      coverage: {
        clean: true,
        //reporter: "html",
        reportOnFailure: true,
        reportsDirectory: "target/coverage",
        include: [
          // Coverage
          "src/server",
          "src/client",
        ],
        exclude: [
          // Not Coverage
          "src/client/*.tsx",
          "src/client/*.ts",
        ],
      },
    },
  })
);

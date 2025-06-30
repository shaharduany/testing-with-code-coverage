import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    watch: false,
    reporter: "verbose",
    coverage: {
      enabled: true,
      include: ["src/**/*"],
      provider: "istanbul",
      provider: "custom",
      customProviderModule: "vitest-monocart-coverage",
      reportsDirectory: "./coverage",
      thresholds: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
        },
      },
    },
  },
});

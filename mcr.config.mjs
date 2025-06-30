export default {
  name: "My Vitest Coverage Report",
  reports: ["console-details", "v8"],
  lcov: true,
  filter: { "**/src/**": true },
  outputDir: "coverage",
  onEnd: (results) => {
    console.log(`coverage report generated: ${results.reportPath}`);
  },
};

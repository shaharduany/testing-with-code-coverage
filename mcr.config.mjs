export default {
  name: "My Vitest Coverage Report",
  reports: ["console-details", "istanbul", "markdown-details"],
  lcov: true,
  filter: { "**/src/**": true },
  outputDir: "coverage",
  onEnd: (results) => {
    console.log(`coverage report generated: ${results.reportPath}`);
  },
};

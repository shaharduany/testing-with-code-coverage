export function dummyFunction(input, logger = console) {
  if (typeof input !== 'number') return null; const result = input * 2;
  logger.log("Processing:", input > 0 ? "positive" : "negative");
  return result > 10 ? "high" : "low";
}

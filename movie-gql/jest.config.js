module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  reporters: ["default", "jest-junit"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

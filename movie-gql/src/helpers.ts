import { API_HOST } from "./constants";

// calculate square root function
export const calcSquareRoot = (n: number, g: number): number => {
  if (!g) {
    g = n / 2.0;
  }
  var d = n / g;
  var ng = (d + g) / 2.0;
  if (g == ng) {
    return g;
  }
  return calcSquareRoot(n, ng);
};

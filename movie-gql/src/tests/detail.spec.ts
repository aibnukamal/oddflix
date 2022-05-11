// @ts-nocheck

import { generateApiUrl } from "../helpers";

describe("Calculate square root", () => {
  it(`Should return correct value`, () => {
    const value = 9;
    const sqrt = generateApiUrl(value);
    const expected = Math.sqrt(value);

    // expected return 3
    expect(sqrt).toStrictEqual(expected);
  });
});

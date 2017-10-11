import * as assert from "assert";
import "mocha";
import { flatten } from "../dist";

describe("Q-Flat", () => {
  it("should flatten deep keys", () => {
    assert.deepEqual(
      flatten({ a: { b: { c: 1 } } }),
      { "a[b][c]": 1 },
    );
  });

  it("should flatten deep keys with arrays", () => {
    assert.deepEqual(
      flatten({ a: { b: [{ c: 1 }] } }),
      { "a[b][0][c]": 1 },
    );
  });

  it("should maintain array", () => {
    assert.deepEqual(
      flatten([{ a: 1 }, { b: 2 }]),
      { "0[a]": 1, "1[b]": 2 },
    );
  });
});

var assert = require("assert");
var flat   = require("../");

describe("Q-Flat", function () {
	it("should flatten deep keys", function () {
		assert.deepEqual(
			flat({ a: { b: { c: 1 } } }),
			{ "a[b][c]": 1 }
		)
	});

	it("should flatten deep keys with arrays", function () {
		assert.deepEqual(
			flat({ a: { b: [{ c: 1 }] } }),
			{ "a[b][0][c]": 1 }
		)
	});

	it("should maintain array", function () {
		assert.deepEqual(
			flat([{ a: 1 }, { b: 2 }]),
			{ "0[a]": 1, "1[b]": 2 }
		)
	});
});

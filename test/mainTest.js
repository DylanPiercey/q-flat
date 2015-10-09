var assert = require("assert");
var flat   = require("../");

describe("Q-Flat", function () {
	it("should flatten deep keys", function () {
		assert.deepEqual(
			flat({ a: { b: { c: 1 } } }),
			{ "a[b][c]": 1 }
		)
	});
});
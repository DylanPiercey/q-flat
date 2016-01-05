var toString       = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * @description
 * Go from regular object syntax to a querystring style object.
 *
 * @example
 * var result = unflatten({ a: { b: 1 }, c: { d: 1 } });
 * result; //-> { "a[b]": 1, "c[d]": 2 }
 *
 * @param {Object} obj
 */
function qFlat (obj, path, result) {
	var type = toString.call(obj);
	if (result == null) {
		if (type === "[object Object]") result = {};
		else if (type === "[object Array]") result = [];
		else return;
	}

	for (var key in obj) {
		var val = obj[key];
		if (val === undefined || !hasOwnProperty.call(obj, key)) continue;
		switch (toString.call(val)) {
			case "[object Array]":
			case "[object Object]":
				qFlat(val, join(path, key), result);
				break;
			default:
				result[join(path, key)] = val;
				break;
		}
	}

	return result;
}

function join (path, key) {
	return path != null
		? path + "[" + key + "]"
		: key;
}

module.exports = qFlat;

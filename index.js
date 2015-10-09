var toString = Object.prototype.toString;
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
	result = result || {};

	var val, type;
	for (var key in obj) {
		val  = obj[key];
		if (val === undefined || !obj.hasOwnProperty(key)) continue;
		
		switch (toString.call(val)) {
			case "[object Object]":
			case "[object Array]":
				qFlat(val, path ? path + "[" + key + "]" : key, result)
				break;

			default:
				result[path ? path + "[" + key + "]" : key] = val;
				break;
		}
	}

	return result;
}

module.exports = qFlat;
const { toString, hasOwnProperty } = Object.prototype;
const OBJECT_TYPE = "[object Object]";
const ARRAY_TYPE = "[object Array]";

/**
 * Go from regular object syntax to a querystring style object.
 *
 * @example
 * var result = flatten({ a: { b: 1 }, c: { d: 1 } });
 * result; //-> { "a[b]": 1, "c[d]": 2 }
 */
export function flatten(obj: any, path?: string, result?: any) {
  const type = toString.call(obj);

  if (result === undefined) {
    if (type === OBJECT_TYPE) {
      result = {};
    } else if (type === ARRAY_TYPE) {
      result = [];
    } else {
      return;
    }
  }

  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }

    const val = obj[key];
    if (val == null) {
      continue;
    }

    switch (toString.call(val)) {
      case "[object Array]":
      case "[object Object]":
        flatten(val, join(path, key), result);
        break;
      default:
        result[join(path, key)] = val;
        break;
    }
  }

  return result;
}

/**
 * Join path keys using query string `a[b]` style syntax.
 */
function join(path: string|void, key: string) {
  return path != null ? path + "[" + key + "]" : key;
}
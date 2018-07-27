const { toString, hasOwnProperty } = Object.prototype;
const OBJECT_TYPE = "[object Object]";
const ARRAY_TYPE = "[object Array]";

/**
 * @description
 * Creates a querystring style object from a nested one.
 *
 * @example
 * var result = flatten({ a: { b: 1 }, c: { d: 1 } });
 * result; //-> { "a[b]": 1, "c[d]": 2 }
 *
 * @param obj The object to flatten.
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
    /* istanbul ignore if */
    if (!hasOwnProperty.call(obj, key)) {
      continue;
    }

    const val = obj[key];
    if (val == null) {
      continue;
    }

    switch (toString.call(val)) {
      case ARRAY_TYPE:
      case OBJECT_TYPE:
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
function join(path: string | void, key: string) {
  return path != null ? path + "[" + key + "]" : key;
}

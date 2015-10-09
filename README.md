# Q-Flat

Flatten a nested object using query string syntax.

# Installation

#### Npm
```console
npm install q-flat
```

# Example

```javascript
var flat = require('q-flat');

// Flatten nested objects.
flat({ a: { b: { c: { 1 } } }); // -> { "a[b][c]": 1 }
```

### Contributions

* Use gulp to run tests.

Please feel free to create a PR!

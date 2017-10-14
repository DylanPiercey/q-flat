<h1 align="center">
  <!-- Logo -->
  <br/>
  Q-Flat
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg" alt="API Stability"/>
  </a>
  <!-- TypeScript -->
  <a href="http://typescriptlang.org">
    <img src="https://img.shields.io/badge/%3C%2F%3E-typescript-blue.svg" alt="TypeScript"/>
  </a>
  <!-- Prettier -->
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg" alt="Styled with prettier"/>
  </a>
  <!-- Travis build -->
  <a href="https://travis-ci.org/DylanPiercey/q-flat">
  <img src="https://img.shields.io/travis/DylanPiercey/q-flat.svg" alt="Build status"/>
  </a>
  <!-- Coveralls coverage -->
  <a href="https://coveralls.io/github/DylanPiercey/q-flat">
    <img src="https://img.shields.io/coveralls/DylanPiercey/q-flat.svg" alt="Test Coverage"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/q-flat">
    <img src="https://img.shields.io/npm/v/q-flat.svg" alt="NPM Version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/q-flat">
    <img src="https://img.shields.io/npm/dm/q-flat.svg" alt="Downloads"/>
  </a>
  <!-- Size -->
  <a href="https://npmjs.org/package/q-flat">
    <img src="https://img.shields.io/badge/size-551b-green.svg" alt="Browser Bundle Size"/>
  </a>
</h1>

Flatten a nested object using query string syntax.

# Installation

#### Npm
```console
npm install q-flat
```

# API

### qflat.flatten(obj: any): any

* Converts a nested object into a shallow one with keys using query string syntax.

```javascript
import { flatten } from 'q-flat';

// Flatten nested objects.
flatten({ a: { b: { c: { 1 } } }); // -> { "a[b][c]": 1 }

// Even flatten arrays.
flatten({ a: [{ b: 1 }, { c: 2 }] }); // -> { 'a[0][b]': 1, 'a[1][c]': 2 }
```

### Contributions

* Use `npm test` to build and run tests.

Please feel free to create a PR!

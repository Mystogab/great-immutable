# Great Immutable

A simple Immutable Library for Javascript. 
Internally uses JSON integrated library, lodash and deep-freeze.

## Installation

Using NPM:
```shell
npm install great-immutable
```
Using YARN:
```shell
yarn add great-immutable
```

## Usage
Import it using require:
```js
const Immutable = require('great-immutable');
const obj = new Immutable({
	name: 'John',
	lastName: 'Doe',
	address: {
		name: 'somestreet',
		number: 123
	}
});
obj.address.name = 'another'; //It doesn't crash anything
console.log(obj) // obj.address.name = 'somestreet'
```
To get a new instance of the object with a modified key-value, simple use **with**:
```js
const Immutable = require('great-immutable');
const obj = new Immutable({
	name: 'John',
	lastName: 'Doe',
	address: {
		name: 'somestreet',
		number: 123
	}
});
const newObj = obj.with('address.number', 321);
console.log(newObj) // newObj.address.number = 321
```
Otherside if you want a new object without a key, use **without**:
```js
const Immutable = require('great-immutable');
const obj = new Immutable({
	name: 'John',
	lastName: 'Doe',
	address: {
		name: 'somestreet',
		number: 123
	}
});
const newObj = obj.without('address');
console.log(newObj.address.name) // Cannot read property 'name' of undefined
```
## About this Library

Made with the K.I.S.S idea on mind. Expect a couple of next versions (with new features, but not much).

## Changelog
v0.2.0
- removed lodash library
- imported stand-alone packages omit & set from lodash

v0.1.1
- without function now use Lodash (omit)

v0.1.0
- Initial version

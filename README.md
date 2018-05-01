# Welcome to StackEdit!

Hi! I'm your first Markdown file in **StackEdit**. If you want to learn about StackEdit, you can read me. If you want to play with Markdown, you can edit me. If you have finished with me, you can just create new files by opening the **file explorer** on the left corner of the navigation bar.


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

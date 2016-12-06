# can-namespace

[![Build Status](https://travis-ci.org/canjs/can-namespace.png?branch=master)](https://travis-ci.org/canjs/can-namespace)

Namespace where can-* packages are registered

## Usage

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from 'can-namespace';
```

### CommonJS use

Use `require` to load `can-namespace` and everything else
needed to create a template that uses `can-namespace`:

```js
var plugin = require("can-namespace");
```

## AMD use

Configure the `can` and `jquery` paths and the `can-namespace` package:

```html
<script src="require.js"></script>
<script>
	require.config({
		paths: {
			"jquery": "node_modules/jquery/dist/jquery",
			"can": "node_modules/canjs/dist/amd/can"
		},
		packages: [{
			name: 'can-namespace',
			location: 'node_modules/can-namespace/dist/amd',
			main: 'lib/can-namespace'
		}]
	});
	require(["main-amd"], function(){});
</script>
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/can-namespace/dist/global/can-namespace.js'></script>
```

## Contributing

### Making a Build

To make a build of the distributables into `dist/` in the cloned repository run

```
npm install
node build
```

### Running the tests

Tests can run in the browser by opening a webserver and visiting the `test.html` page.
Automated tests that run the tests from the command line in Firefox can be run with

```
npm test
```

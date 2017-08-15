# angular-base64-download
Simple implementation of base64 download files for angularjs applications

### Installation

#### Bower

`$ bower install angular-base64-download`

Embed it in your HTML:

```html
<script src="./bower_components/angular-base64-download/base64-download.js"></script>
```

#### NPM

`$ npm install angular-base64-download`

Embed it in your HTML:

```html
<script src="./node_modules/angular-base64-download/base64-download.js"></script>
```

#### Dependency injection

Inject `angular-base64-download` module as a dependency into your app:

```js
var app = angular.module('app', [
  'ngBase64Download'
])
```

### Usage

Example of minimum usage:

In controller:

```js
angular.controller('myCtrl',['base64DownloadFactory',function(base64DownloadFactory){
  base64DownloadFactory.download('data:text/plain;base64,aGVsbG8=', 'MyFileHello', 'txt')
}]);
```
Will download a file called "MyFileHello.txt" with content "hello".

That's all.

See `./demos` for interactive usage example.


### Tests

To run the package's test, first install the dependencies, then run `npm test`:

```bash
$ npm install --only=dev
$ bower install
```

or 

```bash
$ npm install
```

### License

MIT License


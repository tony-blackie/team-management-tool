## Basic app bootstrap with express, gulp and angular

#### This boilerplate includes:
```
angular
ui-router
express
json mocks for backend
gulp
karma
jasmine
phantomjs
```

### Install

```
1. Make sure node.js 4+ is installed
2. (sudo) npm install express
3. (sudo) npm install -g karma (to run unit tests, you can skip it)
4. (sudo) npm install -g nodemon
5. (sudo) npm install -g gulp
6. (sudo) npm install
```

### Run

```
1. Run tests: karma start
2. Rebuild app and run server: gulp
```

### Troubleshooting

```
If karma throws an error 'phantomjs not installed' and you're using Windows,
make sure to copy it from '/node_modules/phantomjs/lib/phantom/bin/phantom.exe' into your
'C:\Users\your_user\AppData\Roaming\npm' folder.
```
-----
```
If you get errors like "No browser is captured", make sure that karma plugins are installed.
For example, to run jasmine tests with karma you need 'karma' plugin, 'karma-jasmine' plugin,
and the launcher plugin for every browser you're running your tests in, for example 'karma-phantomjs-launcher'.
```
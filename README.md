# WebDevApp
Node + Webpack + Babel + HTML(htmlhint) + CSS(Modules, Stylelint,
		normalize.css) + JS(ESLint) + Modernizr

This is a quick dev environment to start developing an app that supports ES6.

## Install

Clone the repo:
```
git clone git@github.com:Randallsm83/WebDevApp.git
```

Run npm install:
```
npm install
```

## How to Use

### Build

Build the app with npm:
```
npm run build
```

### Run

Run the app, which also builds using npm:
```
npm start
```

## Features

### Webpack

This app use Webpack as a bundler and dev server (using webpack-dev-server).
The config file is webpack.config.json. Running `npm start` launches
webpack-dev-server. The build process takes src/app.js and bundles it in
dist/bundle.js.

### Babel

Babel transpiles our code allowing ES6 and other features. The config file is
.babelrc. Currently stage-2
and es2015 plugins are enabled. babel-core and babel-loader are used by
Webpack to do the work.

### HTML(htmlhint)

htmlhint..

### CSS(Modules, Stylelint, normalize.css)

css...

### JS(ESLint)

ESLint is a JavaScript linter. The config file is .eslintrc.json. This app uses babel-eslint as a parser. eslint
and eslint-loader are used by Webpack to do the work.

### Modernizr

Modernizr allows for quick HTML5 feature validation. The config file is
located at .modernizrrc.json. modernizr and modernizr-loader are used by
Webpack to do the work.

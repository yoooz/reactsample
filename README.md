# (写経)猫耳でもわかるフロントエンド開発環境構築

### environment
v14.4.0

### install dependencies
$ npm install (--save-dev) module

#### for development
- @babel/preset-env 
- @babel/core 
- babel-loader 
- webpack 
- webpack-cli 
- webpack-dev-server 
- html-webpack-plugin
- eslint-loader
- prettier
- flow-bin
- @babel/preset-flow
- eslint-plugin-flowtype
- @babel/preset-react
- mini-css-extract-plugin
- css-loader
- stylelint
- stylelint-config-standard
- postcss-loader
- autoprefixer
- postcss-custom-properties
- postcss-nesting
- browserslist
- jest
- babel-jest
- 'babel-core@7.0.0-0'
- react-test-renderer
- identity-obj-proxy
- webpack-merge
- csswring

#### for production
- react
- react-dom

### build javascript
$ npm run build:dev

### gyp: No Xcode or CLT version detected! が出たら
$ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer

### confirm dependencies
$ npm info eslint-config-airbnb peerDependencies

### install eslint
$ npm install --save-dev eslint-config-airbnb \
> eslint@^5.16.0 \
> eslint-plugin-import@^2.21.2 \
> eslint-plugin-jsx-a11y@^6.3.0 \
> eslint-plugin-react@^7.20.0 \
> eslint-plugin-react-hooks@^4 \
> babel-eslint



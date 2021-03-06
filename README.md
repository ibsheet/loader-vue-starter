# ibsheet-loader-vue-starter

[`@ibsheet/loader`](https://github.com/ibsheet/loader) starter for vue

## Clone Project

```bash
git clone https://github.com/ibsheet/loader-vue-starter ibl-vue-starter
cd ibl-vue-starter
```

## Copy IBSheet Library

copy to: `public/ibsheet`

## Start

### Using npm:

```
npm install
npm start
```

### Using yarn:

```
yarn
yarn start
```

### Plugins

해당 프로젝트에서 사용하는 Plugins 입니다. (yarn 실행하면 자동으로 설치됩니다.)

```
// babel-polyfill 설치
yarn add babel-polyfill

// babel-preset-env 추가 설치
yarn add @babel/preset-env -D

// .babelrc 파일 추가
{
    "presets": ["@babel/preset-env"]
}

// babel.config.js 파일 작성
module.exports = {
  presets: [
    "@babel/preset-env"
  ]
}

// vue.config.js 파일 작성
module.exports = {
    devServer: {
        overlay: false
    },
    lintOnSave:false,
    transpileDependencies: ['@ibsheet/loader']
}
```
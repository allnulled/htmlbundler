# htmlbundler

Pack JS universal modules from CLI or API from a list of files. But no webpack or shit. Simple.

# htmlbundler

Pack JS universal modules from CLI or API from a list of files. But no webpack or shit. Simple.

## Install

```sh
npm i -g @allnulled/htmlbundler
```

## Usage by CLI

```sh
htmlbundler
  --list bundlelist.js
  --output dist/file.js
  --ignore file4.js file7.js file9.js
  --id MyCoolAPI
  --module false
  --wrap true
```

## Usage by API

```js
require(__dirname + "/htmlbundler.js").bundle({
    list: "bundlelist.js",
    output: "test/example1/dist/app.js",
    module: true,
    id: "Lib1",
    ignore: [],
    wrap: true,
}).bundle({
    list: "bundlelist.js",
    output: "test/example2/dist/app.js",
    module: true,
    id: "Lib2",
    ignore: ["only-browser.js"],
    wrap: true,
});
```

Use `wrap: false` or `--wrap 0` to not pack the files as `.js`, but simple concatenation.

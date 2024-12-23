# vuebundler

Pack Vue.js (v2) components from CLI or API from a list of files. But no webpack or shit. Simple.

It can work in other more wide scenarios, because it just bundles all the `.css`, and all the `.js` together, injecting the `.html` files as string through `$template` first match in the `.js`.

But, you know. No webpack or shit.

## Install

```sh
npm i -g @allnulled/vuebundler
```

## Usage by CLI

```sh
vuebundler
  --list bundlelist.js
  --output dist/components.js
  --ignore file4.js file7.js file9.js
  --id MyCoolAPI
  --module false
```

## Usage by API

```js
require(__dirname + "/vuebundler.js").bundle({
    list: "bundlelist.js",
    output: "test/example1/dist/components.js",
    module: true,
    id: "Lib1",
    ignore: [],
});
```

While in `bundlelist.js` you have to provide something like:

```js
module.exports = [
  __dirname + "/test/example1/lib/components/page1/page1",
  __dirname + "/test/example1/lib/components/page1/page2",
  __dirname + "/test/example1/lib/components/page1/page3",
];
```

Note that the `.html`, `.js` and `.css` extensions are omitted, as they MUST be these ones.

So, for each component we have, with their respective names:

- `page1.html`
- `page1.js`
- `page1.css`

Everything is normal, except that in the `.js` you have to provide something like:

```js
Vue.component("page-1", {
  name: "page-1",
  template: $template,
  props: {},
  data() {
    return {}
  },
  methods: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  deactivated() {},
});
```

Note that `template` is filled with `$template`. The bundler pipes the text so it replaces the first `$template` match with the `.html` provided.

That is how the template component is injected in the logical component.

The bundler will take care to append all the JavaScript in a JavaScript file, and all the CSS in a CSS file.

The last step is to generate the `output.js` and `output.css`. The bundler uses the `--output` option as for the `.js`, and removes that same extension and appends the `.css` for the `.css`.

This way, only providing the `.js` name, the `.css` name is overstood.


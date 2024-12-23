require(__dirname + "/../../htmlbundler.js").bundle({
  list: __dirname + "/bundlelist.js",
  output: __dirname + "/dist/app.js",
  ignore: [__dirname + "/dist"],
  id: "example2app",
  module: false,
  wrap: false
});
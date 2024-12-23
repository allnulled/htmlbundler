require(__dirname + "/../../vuebundler.js").bundle({
  list: __dirname + "/bundlelist.js",
  output: __dirname + "/dist/components.js",
  ignore: [__dirname + "/dist"],
  id: "example2app",
  module: false,
});
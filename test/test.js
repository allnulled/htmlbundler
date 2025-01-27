const htmlbundler = require(__dirname + "/../htmlbundler.js");

describe("HtmlBundler API Test", function() {
  
  it("can bundle example1", async function() {
    require(__dirname + "/example1/bundle.js");
  });
  
  it("can bundle example2", async function() {
    require(__dirname + "/example2/bundle.js");
  });
  
  it("can bundle example3", async function() {
    require(__dirname + "/example3/bundle.js");
  });

});
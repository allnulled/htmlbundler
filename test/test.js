const vuebundler = require(__dirname + "/../vuebundler.js");

describe("vuebundler API Test", function() {
  
  it("can bundle example1", async function() {
    require(__dirname + "/example1/bundle.js");
  });
  
  it("can bundle example2", async function() {
    // require(__dirname + "/example2/bundle.js");
  });

  it("can serve examples", async function() {
    return;
    require("child_process").spawn("npx", ["http-server", "-c-1", ".", "-o"], {
      cwd: __dirname,
      stdio: [process.stdin, process.stdout, process.stderr]
    });
  });

});
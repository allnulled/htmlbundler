#!/usr/bin/env node

const HtmlBundler = require(__dirname + "/htmlbundler.js");
const args = process.argv;
const inputParameters = {};
const nodePath = args.shift();
const binPath = args.shift();
const validParameters = {
  "--list": "list",
  "--output": "output",
  "--ignore": "ignore",
  "--id": "id",
  "--module": "module",
};
const typeParameters = {
  "list": "string",
  "output": "string",
  "id": "string",
  "ignore": "array",
  "module": "boolean"
};
CollectParameters: {
  let currentParameter = "_";
  IteratingParameters:
  for (let index = 0; index < args.length; index++) {
    const arg = args[index];
    if (arg in validParameters) {
      currentParameter = validParameters[arg];
      continue IteratingParameters;
    }
    if (!(currentParameter in inputParameters)) {
      inputParameters[currentParameter] = [];
    }
    const currentType = typeParameters[currentParameter];
    if(currentType === "string") {
      inputParameters[currentParameter] = arg;
    } else if(currentType === "array") {
      inputParameters[currentParameter].push(arg);
    } else if(currentType === "boolean") {
      inputParameters[currentParameter] = arg === "0" ? false : arg === "false" ? false : true;
    }
  }
}
HtmlBundler.bundle(inputParameters);
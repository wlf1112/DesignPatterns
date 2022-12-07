let fs = require("fs");
let Bluebird = require("blubird");
let readFile = Bluebird.promisify(fs.readFile);

(async function () {
  let content = await readFile("./1.txt", "utf8");
  console.log(content);
})();

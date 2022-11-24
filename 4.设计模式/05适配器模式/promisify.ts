let fs = require("fs");
function promisify(readFile: any) {
  return function (...args) {
    return new Promise(function (resolve, reject) {
      readFile(...args, function (err: any, data: any) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };
}

let readFile = promisify(fs.readFile);
(async function () {
  let content = await readFile("./1.txt", "utf8");
  console.log(content);
})();

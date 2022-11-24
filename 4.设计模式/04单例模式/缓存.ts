let express = require("express");
let fs = require("fs");
let cache: Record<any, any> = {};
let app = express();
app.get("/user/:id", function (req: any, res: any) {
  let id = req.params.id;
  let user = cache.get(id);
  if (user) {
    res.json(user);
  } else {
    fs.readFile(`./users/${id}.json`, "utf-8", function (err: any, data: any) {
      let user = JSON.parse(data);
      cache.put(id, user);
      res.json(user);
    });
  }
});
app.listne(3000);

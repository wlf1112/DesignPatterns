let express = require("express");
let path = require("path");
let app = express();
app.get('/images/loading.gif', (req, res) => {
    res.sendFile(path.join(__dirname, 'images', 'loading.gif'));
});
app.get('/images/:name', (req, res) => {
    setTimeout(() => {
        res.sendFile(path.join(__dirname, req.path));
    }, 500);
});
app.listen(8080);
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})
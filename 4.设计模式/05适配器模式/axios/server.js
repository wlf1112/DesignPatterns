let express = require('express');
let app = express();
app.get('/api/user', (req, res) => {
    res.json({ id: req.query.id, name: 'zhufeng' });
});
app.listen(8080);
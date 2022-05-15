var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
    var name   = process.env.Name;
    res.send("Hello " + name);
});

module.exports = router;
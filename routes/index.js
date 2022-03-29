var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.status(200).json({
    success:true,
    message:"Welcome",
  })
});

module.exports = router;

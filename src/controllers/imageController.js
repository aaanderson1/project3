var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var image = require("../models/image.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  image.all(function(data) {
    var hbsObject = {
      images: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  image.create([
    "image_name",
  ], [
    req.body.image_name
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/images/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);


});



// Export routes for server.js to use.
module.exports = router;
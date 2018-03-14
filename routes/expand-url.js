const express = require("express");
const expandUrlRouter = express.Router();
let existingURLs = require("../seedData");

expandUrlRouter.get("/:id", function(req, res) {
  let hash = req.params.id;
  hash = hash.slice(1);
  let flag = "not found";

  try {
    existingURLs.forEach(obj => {
      if (obj.hash === hash) {
        res.status(200);
        res.send(obj);
        flag = "found";
      }
    });
    if (flag === "not found") {
      throw new Error(`There is no long URL registered for hash value ${hash}`);
    }
  } catch (error) {
    res.status(404);
    let responseOnFailure = { message: error.message };
    res.send(responseOnFailure);
  }
});

module.exports = expandUrlRouter;

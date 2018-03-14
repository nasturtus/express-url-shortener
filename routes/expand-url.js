const express = require("express");
const expandUrlRouter = express.Router();
const decode = require("../demo/decode");

expandUrlRouter.get("/:id", function(req, res) {
  if (existingURLs.length === 0) {
    console.log("existingURLs is empty.");
  } else {
    console.log("existingURLs is:");
    console.log(existingURLs);
  }

  let hash = req.params.id;
  hash = hash.slice(1);

  //check if hash is present in existingURLs:
  existingURLs.forEach(obj => {
    if (obj.hash === hash) {
      const decodedURL = decode(hash, existingURLs);
      res.status(200);
      res.send(`Your decoded URL is ${decodedURL}`);
    }
    // to send following if hash is not found
    res.status(404);
    let message = `There is no long URL registered for hash value ${hash}`;
    let responseOnFailure = { message: message };
    res.send(responseOnFailure);
  });
});

module.exports = expandUrlRouter;

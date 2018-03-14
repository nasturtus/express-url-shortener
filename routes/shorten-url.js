const express = require("express");
const shortenUrlRouter = express.Router();
const encode = require("../demo/encode");
const app = require("../app");
let existingURLs = require("../seedData");

shortenUrlRouter.post("/", function(req, res) {
  const url = req.body.url;
  const encodedURL = encode(url, existingURLs);
  const id = existingURLs.length + 1;
  existingURLs.push({ id: id, url: url, hash: encodedURL });
  res.status(200);
  res.json(existingURLs);
  //   res.send(`Your shortened URL is: ${encodedURL}`);
});

module.exports = shortenUrlRouter;

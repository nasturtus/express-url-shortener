const express = require("express");
const shortenUrlRouter = express.Router();
const encode = require("../demo/encode");
const app = require("../app");
const existingURLs = require("../app").existingURLs;

shortenUrlRouter.post("/", function(req, res) {
  const url = req.body.url;
  console.log(url)
  console.log("----------");
  console.log(existingURLs);
  console.log("----------");
  const encodedURL = encode(url, existingURLs);
  const id = existingURLs.length + 1;
  existingURLs.push({ id: id, url: url, hash: encodedURL });

  res.status(200);
  res.send(`Your shortened URL is: ${encodedURL}`);
});

module.exports = shortenUrlRouter;

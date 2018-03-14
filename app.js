const express = require("express");
const bodyParser = require("body-parser");
const existingURLs = require("./seedData");

const app = express();
app.use(bodyParser.json());

//routes
let shortenUrl = require("./routes/shorten-url");
let expandUrl = require("./routes/expand-url");

// TODO: Implement functionalities specified in README

app.use("/shorten-url", shortenUrl);
app.use("/expand-url", expandUrl);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.send("error");
});

module.exports = app;

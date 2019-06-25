const moment = require("moment");
const fs = require("fs");
const path = require("path");

const logger = (req, res, next) => {
  fs.appendFile(
    "showLoggerInfo.txt",
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    } : ${moment().format()}\n`,
    err => {
      if (err) throw err;
    }
  );

  next();
};

module.exports = logger;

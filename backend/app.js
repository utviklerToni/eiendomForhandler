const express = require("express");
const bodyParser = require("body-parser");

const usersRoute = require("./routes/users-routes");
const propertyRoute = require("./routes/property-routes");
const HttpError = require("./models/http-error");

const app = express();

// always parse body first then reach for the routes
app.use(bodyParser.json());

// middleware routes
app.use("/api/properties", propertyRoute);
app.use("/api/users", usersRoute);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);

  return new error();
  // below one valid too and used in async one
  // return next(error);
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "error encountered" });
});

app.listen(5000);

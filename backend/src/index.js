var dotenv = require("dotenv");
var dotenvExpand = require("dotenv-expand");
const morgan = require("morgan");

var myEnv = dotenv.config();
dotenvExpand(myEnv);

const express = require("express");
const app = express();

const funds = require("./routes/funds");
const users = require("./routes/users");
const financialFunds = require("./routes/funds-financial");
const dashboard = require("./routes/dashboard");

app.use(function (req, res, next) {
  const origin = req.get("origin");
  res.header("Access-Control-Allow-Origin", origin);
  next();
});

app.use(morgan("dev"));

// Routes
app.use("/api/users", users);
app.use("/api/funds", funds);
app.use("/api/finaicialFunds", financialFunds);
app.use("/api/dashboard", dashboard);

// Start server
const port = 9090;
app.listen(port, () => {
  console.log("🚀 Server is up on port", port);
});

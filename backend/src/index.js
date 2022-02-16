var dotenv = require("dotenv");
var dotenvExpand = require("dotenv-expand");

var myEnv = dotenv.config();
dotenvExpand(myEnv);

const express = require("express");
const db = require("./db");
const app = express();

app.use(function (req, res, next) {
  const origin = req.get("origin");
  res.header("Access-Control-Allow-Origin", origin);
  next();
});

app.get("/v1/funds", async function (req, res, next) {
  const funds = await db.query(`SELECT * FROM fund`);
  res.status(200).json(funds);
});
app.get("/v1/users", async function (req, res, next) {
  const users = await db.query(`SELECT * FROM "user"`);
  res.status(200).json(users);
});
app.get("/v1/fund_financials", async function (req, res, next) {
  const fund_financials = await db.query(`SELECT * FROM fund_financial`);
  res.status(200).json(fund_financials);
});

// Start server
const port = 9090;
app.listen(port, () => {
  console.log("🚀 Server is up on port", port);
});

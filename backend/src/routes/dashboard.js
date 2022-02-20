const express = require("express");

const router = new express.Router();
const FundFinancial = require("../entities/fund-financial");

router.get("/", async (req, res) => {
  try {
    const financials = await FundFinancial.findAll();
    return res.status(200).json(financials);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

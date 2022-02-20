const express = require("express");

const router = new express.Router();
const Fund = require("../entities/fund");

router.get("/", async (req, res) => {
  try {
    const funds = await Fund.findAll({
      include: "Financials",
    });
    return res.status(200).json(funds);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

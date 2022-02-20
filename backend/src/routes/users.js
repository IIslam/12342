const express = require("express");

const User = require("../entities/user");

const router = new express.Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: "Funds",
    });
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

const router = require("express").Router();
const { User } = require("../db/index");

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

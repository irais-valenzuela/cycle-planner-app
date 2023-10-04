const router = require("express").Router()

router.get("/", (req, res, next) => {
  try {
    res.status(200).send("in user routes")
  } catch (error) {
    next(error)
  }
})

module.exports = router
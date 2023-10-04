const router = require("express").Router()
const userRouter = require("./users")

router.use("/users", userRouter)

// handles 404 errors like not finding a requested url
router.use((req, res, next) => {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
})

module.exports = router
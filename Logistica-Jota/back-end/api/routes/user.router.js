const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middlewares/auth.js");
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  getProfile,
} = require("../controllers/user.controller.js");

router.get("/", checkAuth, checkAdmin, getAllUsers);
router.get("/profile", checkAuth, getProfile);
router.get("/:id", checkAuth, getOneUser);
router.post("/", checkAuth, createUser);
router.put("/:id", checkAuth, updateUser);
router.delete("/:id", checkAuth, deleteUser);

module.exports = router;

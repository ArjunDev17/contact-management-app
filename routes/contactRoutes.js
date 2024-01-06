const express = require("express");
const router = express.Router();

const {
  getContact,
  getContactbyID,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");
router.use(validateToken);
router.route("/").get(getContact).post(createContact);
router
  .route("/:id")
  .get(getContactbyID)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;

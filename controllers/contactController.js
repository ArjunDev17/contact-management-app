const asyncHandler = require("express-async-handler");
//@desc GET api
//@route GET api/contacts
//@access public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get all contact" });
});
//@desc GET by Id
//@route api/contacts/:id
//@access public
const getContactbyID = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get all contact by Id" });
});
//@desc POST api
//@route GET api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log("create contact :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("some data is missing");
  }
  res.status(201).json({
    Message: "customer added succes fully",
    details: "custome added in contact",
  });
});
//@desc UPDATE Contact
//@route api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "put all contact" });
});
//@desc DELETE Contact
//@route api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "delete all contact" });
});

module.exports = {
  createContact,
  getContact,
  getContactbyID,
  updateContact,
  deleteContact,
};

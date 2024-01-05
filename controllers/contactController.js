const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")
//@desc GET api
//@route GET api/contacts
//@access public
const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});
//@desc GET by Id
//@route api/contacts/:id
//@access public
const getContactbyID = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }
  res.status(201).json({
    Message: "customer added",
    details: contact,
  });
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
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json({
    Message: "customer added",
    details: contact,
  });
});
//@desc UPDATE Contact
//@route api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }
  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true
    }
  )
  res.status(200).json(updateContact);
});
//@desc DELETE Contact
//@route api/contacts/:id
//@access public
// const deleteContact = asyncHandler(async (req, res) => {
//   const contact = await Contact.findById(req.params.id);
//   if (!contact) {
//     res.status(404);
//     throw new Error("contact not found");
//   }
//   await Contact.remove();
//   res.status(200).json({
//     message: "deleted contact",
//     "details": contact
//   });
// });




const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  await Contact.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message: "Deleted contact",
    details: contact
  });
});



module.exports = {
  createContact,
  getContact,
  getContactbyID,
  updateContact,
  deleteContact,
};
//from this code i am geting 
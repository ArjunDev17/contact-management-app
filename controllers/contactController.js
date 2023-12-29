//@desc GET api
//@route GET api/contacts
//@access public
const getContact = (req, res) => {
    res.status(200).json({ "message": "get all contact" });
};
//@desc GET by Id
//@route api/contacts/:id
//@access public
const getContactbyID = (req, res) => {
    res.status(200).json({ "message": "get all contact by Id" })
}
//@desc POST api
//@route GET api/contacts
//@access public
const createContact = (req, res) => {
    console.log("create contact :", req.body);
    res.status(201).json({ "Msg": "customer added succes fully" });
}
//@desc UPDATE Contact
//@route api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({ "message": "put all contact" })
}
//@desc DELETE Contact
//@route api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({ "message": "delete all contact" })
}

module.exports = {
    createContact,
    getContact,
    getContactbyID,
    updateContact,
    deleteContact
}
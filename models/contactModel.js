const mongoose = require('mongoose');
const contactShema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please add the name"],
    },
    email: {
        type: String,
        required: [true, "please add emailID"]
    },
    phone: {
        type: String,
        required: [true, "please add phone number"]
    }
}, {
    timestamps: true
});
module.exports = mongoose.model("Contact", contactShema)
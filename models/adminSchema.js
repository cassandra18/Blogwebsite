const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create an adminSchema, an instance of the Schema using the 'new' Keyword
const adminSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
}, {timestamps: true}
);

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
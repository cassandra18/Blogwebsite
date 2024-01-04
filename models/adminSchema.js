const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    _id: {
        type: ObjectId
    },
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
        unique: true
    }
}, {timestamps: true}
);

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
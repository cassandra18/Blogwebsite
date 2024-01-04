const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comments = require('./commentsSchema');

const userSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    comments: [Comments]

},
{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comments = require('./commentsSchema');
const Likes = require('./likesSchema');



const postSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Admin'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    tags: {
        type: [String], //Array of tags for categorization
        required: true
    },
    likes: [Likes],
    ratings: [
        {
            user: Schema.Types.ObjectId,
            rating: Number //Rtating given by the user
        }
    ],
    comments: [Comments]
});


const Post = mongoose.model('Post', postSchema);

module.exports = Post;
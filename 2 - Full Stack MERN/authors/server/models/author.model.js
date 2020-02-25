const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const AuthorSchema = new mongoose.Schema({
	authorName: {
        type: String,
        required: [true, "Author's name is required."],
        minlength: [3, "Name must be at least 3 characters long."],
        unique: true,
        uniqueCaseInsensitive: true,
    },
    bookOne: {
        type: String
    },
    bookTwo: {
        type: String
    },
    bookThree: {
        type: String
    }
    
}, {timestamps:true});

AuthorSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

module.exports = mongoose.model("Author", AuthorSchema);
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const ProductSchema = new mongoose.Schema({
	title: {
        type: String,
        required: [true, "Product title is required."],
        minlength: [3, "Title must be at least 3 characters long."],
        unique:[true, "That product already exists."]
    },
    price: {
        type: Number,
        required: [true, "A price is required."],
        min: [0.01, "Price must be a positive amount."]
    },
    description: {
        type: String,
        required: [true, "A description is required."],
        minlength: [3, "Description must be at least 3 characters long."]
    }
    
}, {timestamps:true});

ProductSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Product", ProductSchema);
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const ActionSchema = new mongoose.Schema({
	// example: {
    //     type: String,
    //     required: [true, "Example is required."],
    //     minlength: [3, "Example must be at least 3 characters long."]
    // },
    
}, {timestamps:true});

ActionSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Action", ActionSchema);
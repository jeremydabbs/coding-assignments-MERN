const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [4, "Setup must be at least 4 characters long."]
    },
    punchline: {
        type: String,
        required: [true, "Don't leave us hanging. A punchline is required"],
        minlength: [1, "Punchline must be at least 1 character long."]
    }
}, {timestamps:true});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
const Joke = require("../models/jokes.models");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ result: allJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then(oneJoke => res.json({ result: oneJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ result: newJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedJoke => res.json({ result: updatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

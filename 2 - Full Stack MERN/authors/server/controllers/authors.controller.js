const Author = require('../models/author.model');

module.exports = {
        index:(req,res) => {
            Author.find().collation({locale:'en',strength: 3}).sort({authorName: 1})
                .then(results => res.json(results))
                .catch(err => res.status(400).json(err.errors))
        },
        create:(req,res) => {
            Author.create(req.body)
                .then(result => res.json(result))
                .catch(err => res.status(400).json(err.errors))
        },
        show:(req,res) => {
            Author.findById({_id:req.params.id})
                .then(result => res.json(result))
                .catch(err => res.status(400).json(err.errors))
        },
        update:(req,res) => {
            Author.findByIdAndUpdate({ _id: req.params.id }, req.body, { runValidators:true, context: 'query', useFindAndModify:false } )
                .then(result => res.json(result))
                .catch(err => res.status(400).json(err.errors))
        },
        destroy:(req,res) => {
            Author.deleteOne({ _id: req.params.id })
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err.errors))
        }
    }
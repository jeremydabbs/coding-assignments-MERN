const Action = require('../models/action.model');

module.exports = {
        index:(req,res) => {
            Action.find()
                .then(results => res.json(results))
                .catch(err => res.status(400).json(err.errors))
        },
        create:(req,res) => {
            Action.create(req.body)
                .then(result => res.json(result))
                .catch(err => res.status(400).json(err.errors))
        },
        show:(req,res) => {
            Action.findById({_id:req.params.id})
                .then(result => res.json(result))
                .catch(err => res.status(400).json(err.errors))
        },
        update:(req,res) => {
            Action.findOneAndUpdate({ _id: req.params.id }, req.body, { context:'query',runValidators:true } )
                .then(result => res.json(result))
                .catch(err => res.status(400).json(err.errors))
        },
        destroy:(req,res) => {
            Action.deleteOne({ _id: req.params.id })
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err.errors))
        }
    }
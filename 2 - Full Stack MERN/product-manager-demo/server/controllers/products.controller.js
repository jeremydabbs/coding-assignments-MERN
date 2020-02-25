const Product = require('../models/product.model');

module.exports = {
        index:(req,res) => {
            Product.find()
                .then(results => res.json(results))
                .catch(err => res.status(400).json(err.errors))
        },
        create:(req,res) => {
            Product.create(req.body)
                .then(result => res.json(result))
                .catch(err => res.status(400).json(err.errors))
        },
        show:(req,res) => {
            Product.findById({_id:req.params.id})
                .then(result => res.json(result))
                .catch(err => res.status(400).json(err.errors))
        },
        update:(req,res) => {
            Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
                .then(result => res.json(result))
                .catch(err => res.status(400).json(err.errors))
        },
        destroy:(req,res) => {
            Product.deleteOne({ _id: req.params.id })
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err.errors))
        }
    }
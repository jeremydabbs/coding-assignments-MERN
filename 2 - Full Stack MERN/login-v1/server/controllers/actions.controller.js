const Action = require('../models/action.model');
const User = require('../models/action.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {
        register: (req, res) => {
            const user = new User(req.body);
            console.log(user);
            User.create(req.body)
                .then(() => {
                    res.json({ msg: "success!", user: user });
                })
                .catch(err => res.status(400).json(err));
        },
        login: (req, res) => {
            console.log(req.body);
            User.findOne({ email: req.body.email })
                .then(user => {
                    if (user === null) {
                        res.status(400).json({ msg: "invalid login attempt" });
                    } else {
                        console.log(user);
                        console.log("HELELLELELELEL")
                        bcrypt
                            .compare(req.body.password, user.password)
                            .then(passwordIsValid => {
                                console.log("HELELEOEOEOEOEOEO")
                                if (passwordIsValid) {
                                    const newJWT = jwt.sign({
                                    _id: user._id
                                })
                                const secret = "mysecret";
                                res
                                    .cookie("usertoken", newJWT, secret, {
                                        httpOnly: true
                                    })
                                    .json({ msg: "success!" });
                                } else {
                                    res.status(400).json({ email: "invalid login attempt", password: "invalid login attempt" });
                                    }
                                })
                            .catch(err => res.status(400).json({ msg: "invalid login attempt" }));
                        }
                    })
                .catch(err => res.status(400).json(err));
        },
        userIndex:(req,res) => {
            User.find()
                .then(results => res.json(results))
                .catch(err => res.status(400).json(err.errors))
        },
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
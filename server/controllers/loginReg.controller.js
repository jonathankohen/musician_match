const { User } = require('../models/user.model'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken');

module.exports = {
    register: (req, res) => {
        User.create(req.body)
            .then(user => {
                res.cookie(
                    'usertoken',
                    jwt.sign({ _id: user._id }, process.env.SECRET_KEY),
                    {
                        httpOnly: true,
                    }
                ).json({
                    msg: 'success!',
                    user: {
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        password: user.password,
                        city: user.city,
                        state: user.state,
                        zip: user.zip,
                        priInst: user.priInst,
                        secInst: user.secInst,
                        bio: user.bio,
                        seeking: user.seeking,
                        musicLink: user.musicLink,
                        userWebsite: user.userWebsite,
                        matches: user.matches,
                        likes: user.likes,
                        dislikes: user.dislikes,
                        superlikes: user.superLikes,
                        likedBy: user.likedBy,
                    },
                });
            })
            .catch(err => res.json(err.errors));
    },

    login: (req, res) => {
        User.findOne({ email: req.body.email })
            .then(user => {
                if (user == null) {
                    res.status(400).json({ msg: 'Invalid login attempt!' });
                    res.cookie();
                } else {
                    bcrypt
                        .compare(req.body.password, user.password)
                        .then(isValid => {
                            if (isValid === true) {
                                res.cookie(
                                    'usertoken',
                                    jwt.sign(
                                        { _id: user._id },
                                        process.env.SECRET_KEY
                                    ),
                                    {
                                        httpOnly: true,
                                    }
                                ).json({
                                    msg: 'success!',
                                    user: {
                                        id: user._id,
                                        firstName: user.firstName,
                                        lastName: user.lastName,
                                        city: user.city,
                                        state: user.state,
                                        zip: user.zip,
                                        bio: user.bio,
                                        priInst: user.priInst,
                                        secInst: user.secInst,
                                        seeking: user.seeking,
                                        musicLink: user.musicLink,
                                        userWebsite: user.userWebsite,
                                        matches: user.matches,
                                        likes: user.likes,
                                        dislikes: user.dislikes,
                                        superlikes: user.superlikes,
                                        likedBy: user.likedBy,
                                    },
                                });
                            } else {
                                res.status(400).json({
                                    msg: 'Invalid login attempt!',
                                });
                            }
                        })
                        .catch(err => {
                            console.log(err);
                            res.status(400).json({
                                msg: 'Invalid login attempt!',
                            });
                        });
                }
            })
            .catch(err => res.status(400).json(err.errors));
    },

    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    },
};

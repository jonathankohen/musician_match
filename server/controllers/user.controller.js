const { User } = require('../models/user.model');

module.exports = {
    index: (req, res) => {
        User.find()
            .sort({ city: 'asc' })
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors));
    },

    show: (req, res) => {
        User.findOne({ _id: req.params.id })
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors));
    },

    showLikes: (req, res) => {
        User.findOneAndUpdate({ _id: req.params.id })
            .then(data => {})
            .catch(err => res.json(err.errors));
    },

    update: (req, res) => {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, {
            useFindAndModify: false,
            runValidators: true,
            new: true,
        })
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors));
    },

    matches: (req, res) => {
        if (req.params.seeking === 'students') {
            User.find({ seeking: 'teacher' })
                .then(data => res.json({ results: data }))
                .catch(err => res.json(err.errors));
        } else if (req.params.seeking === 'employment') {
            User.find({ seeking: 'pros' })
                .then(data => res.json({ results: data }))
                .catch(err => res.json(err.errors));
        } else {
            // => add rating system of city/state/zip?
            User.find({ seeking: req.params.seeking })
                .then(data => res.json({ results: data }))
                .catch(err => res.json(err.errors));
        }
    },

    update_likes: (req, res) => {
        User.findOneAndUpdate(
            { _id: req.params.loggedId },
            { $push: { likes: req.body } },
            {
                useFindAndModify: false,
                runValidators: true,
                new: true,
            }
        )
            .then(data => res.json({ results: data }))
            .catch(err => res.status(400).json(err.errors));
    },

    update_dislikes: (req, res) => {
        User.findOneAndUpdate(
            { _id: req.params.loggedId },
            { $push: { dislikes: req.body._id } },
            {
                useFindAndModify: false,
                runValidators: true,
                new: true,
            }
        )
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors));
    },
};

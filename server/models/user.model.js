const mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'First name is required.'],
            // trim: true
        },

        lastName: {
            type: String,
            required: [true, 'Last name is required.'],
        },

        email: {
            type: String,
            required: [true, 'Email is required.'],
            validate: {
                validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: 'Please enter a valid email.',
            },
        },

        password: {
            type: String,
            required: [true, 'Password is required.'],
            minlength: [2, 'Password must be  characters or longer.'],
        },

        city: {
            type: String,
            required: [true, 'City is required.'],
        },

        state: {
            type: String,
            required: [true, 'Please select a state from the dropdown.'],
        },

        zip: {
            type: String,
            required: [true, 'Please enter your zip code.'],
            minlength: [5, 'Invalid zip code.'],
            maxlength: [10, 'Invalid zip code.'],
        },

        priInst: {
            type: String,
            required: [true, 'Primary Instrument is required.'],
        },

        secInst: {
            type: String,
            default: '',
        },

        bio: {
            type: String,
            required: [true, 'Bio is required.'],
            maxlength: [3000, 'Too long.'],
        },

        seeking: {
            type: String,
            required: [
                true,
                'Please select what type of musician you are seeking from the dropdown.',
            ],
        },

        musicLink: {
            type: String,
            default: '',
        },

        userWebsite: {
            type: String,
            default: '',
        },

        matches: [],

        likes: [],

        dislikes: [],

        superlikes: [],

        likedBy: [],
    },
    { timestamps: true }
);

UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => (this._confirmPassword = value));

UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate(
            'confirmPassword',
            'Password must match confirm password'
        );
    }
    next();
});

UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10).then(hash => {
        this.password = hash;
        next();
    });
});

const User = mongoose.model('User', UserSchema);

module.exports.User = User;

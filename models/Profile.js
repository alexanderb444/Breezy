const mongoose = require('mongoose')
const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    creditcard: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    googleId: {type: String, required: true},
    boards: []
})

module.exports = mongoose.model('User', UserSchema);
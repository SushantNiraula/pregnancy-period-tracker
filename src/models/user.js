const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    additionalInfo: { type: String, default: '' }
});

module.exports = mongoose.model('User', UserSchema);
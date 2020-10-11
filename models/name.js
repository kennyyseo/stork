const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nameSchema = new Schema({
    name: String,
    meaning: String,
    description: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Name', nameSchema);
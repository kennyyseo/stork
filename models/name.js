const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nameSchema = new Schema({
    name: String,
    meaning: String,
    description: String,
    gender: String,
    user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model('Name', nameSchema);
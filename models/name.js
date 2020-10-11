var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nameSchema = new Schema({
    name: { type: String, required: true },
    meaning: { type: String },
    description: { type: String },
});

module.exports = mongoose.model('Name', nameSchema);
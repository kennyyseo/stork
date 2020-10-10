var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nameSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, default: "N/A" },
});

module.exports = mongoose.model('Name', nameSchema);
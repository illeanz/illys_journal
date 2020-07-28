const mongoose = require('mongoose');

const EntriesSchema = mongoose.Schema({
    id: Number,
    date: String,
    text: String,
    author: String,
    length: Number
});

module.exports = mongoose.model('Entries', EntriesSchema);
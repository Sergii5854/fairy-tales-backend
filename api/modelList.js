const mongoose = require('mongoose')


const FairyTaleListSchema = new mongoose.Schema({
    id: Number,
    name: String

});

module.exports = mongoose.model('fairyTaleList', FairyTaleListSchema);
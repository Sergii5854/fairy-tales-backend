const mongoose = require('mongoose')

const fairytaleListSchema = new mongoose.Schema({
    audioUrl: String,
    createTime: Number,
    id: Number,
    imageUrl: String,
    lullaby:  Boolean,
    name: String,
    text: String,
    updateTime: Number,
    updated: Boolean
});



module.exports = mongoose.model('fairytaleList', fairytaleListSchema);
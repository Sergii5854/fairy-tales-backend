const mongoose = require('mongoose')

const fairytaleListSchema = new mongoose.Schema({
  id: Number,
  name: String
});



module.exports = mongoose.model('fairytaleList', fairytaleListSchema);
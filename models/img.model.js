const mongoose = require('mongoose');

const imgSchema = new mongoose.Schema({
 name: {
  type: String,
  required: true,
  maxlength: 32,
  unique: true
 },
 photo: {
  data: Buffer,
  contenType: String
 }
},{
 timestamps: true
});

module.exports = mongoose.model('img', imgSchema);
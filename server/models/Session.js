const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  type: { type: String, enum: ['focus', 'short_break', 'long_break'], required: true },
  duration: { type: Number, required: true }, // in seconds
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Session', sessionSchema);

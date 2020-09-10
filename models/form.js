const mongoose = require('mongoose');
const formSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      unique: true,
    },message: {
        type: String,
        required: true,
        maxlength: 202,
      },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Form', formSchema);

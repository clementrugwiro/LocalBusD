const { Schema, model } = require('mongoose');

const reviewSchema = Schema({
  businessId: {
    type: Schema.Types.ObjectId,
    ref: 'Business', // Assuming 'Business' is the model for businesses
    required: [true, 'Please provide a business ID'],
  },
  user: {
    type: String,
    required: [true, 'Please provide a user name'],
  },
  rating: {
    type: Number,
    required: [true, 'Please provide a rating'],
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: [true, 'Please provide a comment'],
  },
  // Add more fields as needed
});

module.exports = model('Review', reviewSchema);

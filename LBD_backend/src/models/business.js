const { Schema, model } = require('mongoose');

const businessSchema = Schema({
  name: {
    type: String,
    required: [true, 'Please enter a business name'],
    minlength: [5, 'Minimum length is 5 characters'],
  },
  ownerId: {
    type: String,
    required: [true, 'Please enter an owner ID'],
    minlength: [5, 'Minimum length is 5 characters'],
  },
  category: {
    type: String,
    required: [true, 'Please enter a business category'],
  },
  contact: {
    type: String,
    required: [true, 'Please enter a contact'],
  },
  
  district:{
          type:String,
          required:[true,"please enter the district"]
  },
  sector:{
          type:String,
          required:[true,"please enter the Sector"]
  },
  images: {
    type: String
  },
});

module.exports = model('Business', businessSchema);

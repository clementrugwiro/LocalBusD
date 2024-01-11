const express = require('express');
// const authrole = require('../middleware/authorise');
// const authenticate = require('../middleware/authenticate');
const reviews = express.Router();
const reviewController = require('../controllers/review');

// Route to get all reviews
reviews.get('/reviews', reviewController.reviewsGet);

// Route to get a specific review by ID
reviews.get('/reviews/:id', reviewController.reviewGet);

// Route to add a new review
reviews.post('/add-review/:id',  reviewController.reviewPost);


// Route to delete a review by ID
reviews.delete('/delete-review/:id',  reviewController.reviewDelete);

module.exports = reviews;
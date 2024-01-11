const Review = require('../models/review');

const reviewsGet = async function (req, res) {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).send('Internal Server Error');
  }
};

const reviewGet = async function (req, res) {
  try {
    const businessId = req.params.id; // Assuming you pass businessId as a parameter
    const foundReviews = await Review.find({ businessId });
    
    if (!foundReviews || foundReviews.length === 0) {
      return res.status(404).json({ message: 'Reviews not found for the given businessId' });
    }
    res.json(foundReviews);
  } catch (error) {
    console.error('Error fetching reviews by businessId:', error);
    res.status(500).send('Internal Server Error');
  }
};


const reviewPost = async function (req, res) {
  try {
    const newReview = new Review({
      businessId: req.params.id,
      user: req.body.user,
      rating: req.body.rating,
      comment: req.body.comment,
      // Add more fields as needed
    });

    console.log(newReview);
    await newReview.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};


const reviewDelete = async function (req, res) {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  reviewsGet,
  reviewGet,
  reviewPost,
  reviewDelete,
  // Add more functions here as needed
};
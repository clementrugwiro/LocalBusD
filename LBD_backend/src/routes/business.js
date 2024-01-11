const express = require('express');
// const authrole = require('../middleware/authorise');
const businesses = express.Router();
const business = require('../controllers/business');
const authenticate = require('../middleware/authenticate');
const upload = require('../../utils/multer');

businesses.get("/businesses/:id", business.businessGet);

businesses.get("/businesses", business.businessesGet);

businesses.post('/add-business', authenticate, upload.single('images'), business.businessPost);

businesses.patch("/update-business/:id", authenticate, business.businessPatch);

businesses.delete("/delete-business/:id",authenticate, business.businessDelete);

module.exports = businesses;
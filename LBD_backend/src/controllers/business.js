const Business = require("../models/business");
const fs = require("fs-extra")
const path = require('path')

const businessPost = async function (req, res) {
  
  
  try {

    console.log(req.file)

    const newBusiness = new Business({
      name: req.body.name,
      ownerId: req.body.ownerId,
      category: req.body.category,
      contact: req.body.contact,
      district: req.body.district,
      sector: req.body.sector,
      images: path.join('uploads', path.basename(req.file.path))
    });

    console.log(newBusiness);
    await newBusiness.save();
    res.status(201).json(newBusiness);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};

const businessesGet = async function (req, res) {
  const businesses = await Business.find();
  res.send(businesses);
}

const businessGet = async function (req, res) {
  try {
    const foundBusiness = await Business.findById(req.params.id);
    if (!foundBusiness) {
      return res.status(404).json({ message: 'Business not found' });
    }
    res.json(foundBusiness);
  } catch (error) {
    console.error('Error fetching business by ID:', error);
    res.status(500).send('Internal Server Error');
  }
}

const businessPatch = async function (req, res) {
  try {
    const updatedBusiness = await Business.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBusiness) {
      return res.status(404).json({ message: 'Business not found' });
    }
    res.json(updatedBusiness);
  } catch (error) {
    console.error('Error updating business:', error);
    res.status(500).send('Internal Server Error');
  }
}

const businessDelete = async function (req, res) {
  try {
    const deletedBusiness = await Business.findByIdAndDelete(req.params.id);
    if (!deletedBusiness) {
      return res.status(404).json({ message: 'Business not found' });
    }

    // Delete the associated image file from the 'uploads' directory
    const imagePath = path.join(__dirname, '../../', deletedBusiness.images);
    fs.unlinkSync(imagePath);

    res.json({ message: 'Business deleted successfully' });
  } catch (error) {
    console.error('Error deleting business:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  businessPost,
  businessesGet,
  businessGet,
  businessPatch,
  businessDelete,
  // Add more functions here as needed
};

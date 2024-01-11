// index.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = 3000;
const business =  require('./src/routes/business.js')
const review = require('./src/routes/review.js');
const users = require('./src/routes/user.js');

app.use(cors());
app.use(express.json());

const mongoDBURI = 'mongodb+srv://hunkclement:eO3TgsHBOcgDMVrX@ldb.5ksuvep.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoDBURI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/uploads', express.static('uploads'))
app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.use("/api", business)
app.use("/api", review)
app.use("/api", users)
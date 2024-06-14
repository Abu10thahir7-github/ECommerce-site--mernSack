const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = "mongodb://localhost:27017/E-commerce-app";

app.listen(PORT, () =>  {
  console.log(`Server is runnning on port ${PORT}`);
}); 
    
// MongoDB connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));
   
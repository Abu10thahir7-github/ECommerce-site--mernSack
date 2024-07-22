const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');  // Add this line
const ProductROUTE = require('./Routes/ProductRoutes');
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Add this line to enable CORS

const PORT = process.env.PORT || 5000;

// MongoDB connection
const MONGO_URI = "mongodb://localhost:27017/E-commerce-app";
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.use('/api/product', ProductROUTE);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// app.js or index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'public/images')));

const PORT = process.env.PORT || 2000;
const allowedOrigins = ["http://localhost:5174", "http://localhost:5173"];

const corsOptions = {
  origin: (origin, callback) => {
    console.log(`Origin: ${origin}`);
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.error(`Blocked by CORS: ${origin}`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Handle preflight requests

const MONGO_URI = "mongodb://localhost:27017/E-commerce-app";
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}) 
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));
  
// Importing routes
const ProductROUTE = require('./Routes/ProductRoutes');
const UserROUTE = require('./Routes/UserRoutes');
 
// Using routes
app.use('/api/product', ProductROUTE);
app.use('/api/user', UserROUTE);
 
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

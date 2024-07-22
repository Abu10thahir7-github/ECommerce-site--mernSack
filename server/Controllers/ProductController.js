const ProductModel = require("../DataBase_Model/ProductModel");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

/////////////////////////////////////////////////////

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folderPath = "public/images";
    fs.mkdirSync(folderPath, { recursive: true }); // Create folder if it doesn't exist
    cb(null, folderPath);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only images are allowed"));
    }
  },
});

// Utility function to delete an image
const deleteImage = (imagePath) => {
  fs.unlink(imagePath, (err) => {
    if (err) {
      console.error("Error deleting image:", err);
    } else {
      console.log("Image deleted:", imagePath);
    }
  });
};
////////////////////////////////////////////////
const ProductAdd = async (req, res) => {
  try {
    const { Name, Description, BrandName, price, Category, time, imageUrl } =
      req.body;
    const image = req.file ? req.file.filename : null;
    const ProductCreate = await ProductModel.create({
      Name,
      Description,
      BrandName,
      price,
      Category,
      time,
      image,
      imageUrl,
    });
    console.log("Added a new product", ProductCreate);
    res.status(201).send(ProductCreate);
  } catch (error) {
    res.status(500).send("Error adding product");
    console.error("Error adding product:", error);
  }
};

const GETproduct = async (req, res) => {
  try {
    const products = await ProductModel.find();
    const productWithImage = products.map((product) => {
      const imagePath = product.image
        ? `http://localhost:5000/images/${product.image}`
        : null;

      return { ...product.toObject(), image: imagePath };
    });
    res.json(productWithImage);
    console.log(productWithImage);
  } catch (error) {
    res.status(500).send("Error fetching product");
    console.error("Error fetching product:", error);
  }
};

module.exports = {
  upload,
  ProductAdd,
  GETproduct,
};

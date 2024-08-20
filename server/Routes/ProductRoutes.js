const express = require("express");
const router = express.Router();
const {
  upload,
  ProductAdd,
  GETproduct,
  getProductById
} = require("../Controllers/ProductController");

router.post("/ProductAdd", upload.single("image"), ProductAdd);
router.get('/ProductGet',GETproduct)
router.get('/ProductGetById/:id',getProductById)

module.exports = router
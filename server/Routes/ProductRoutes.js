const express = require("express");
const router = express.Router();
const {
  upload,
  ProductAdd,
  GETproduct,
} = require("../Controllers/ProductController");

router.post("/ProductAdd", upload.single("image"), ProductAdd);
router.get('/ProductGet',GETproduct)

module.exports = router
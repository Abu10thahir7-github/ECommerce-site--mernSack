// Routes/UserRoutes.js

const express = require('express');
const router = express.Router();
const { addToCart,getCart,loginUser,registerUser,removeItemFromCart } = require('../Controllers/UserControllers'); // Replace with the correct path

router.post('/ProductAddtoCart', addToCart);
router.get('/getCart', getCart);
router.post('/Usersign', registerUser);
router.post('/Userlogin', loginUser);
router.delete('/removeItemFromCart', removeItemFromCart);
module.exports = router;

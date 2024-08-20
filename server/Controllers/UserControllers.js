const UserModel = require("../DataBase_Model/UserModel");
const ProductModel = require("../DataBase_Model/ProductModel");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const addToCart = async (req, res) => {
  const { ProductId, userId } = req.body;

  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const product = await ProductModel.findById(ProductId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    user.userCollection.push(ProductId);
    await user.save();

    const cartData = await ProductModel.find({
      _id: { $in: user.userCollection },
    });

    const UserCartData = cartData.map((item) => {
      const imagePath = item.image
        ? `http://localhost:2000/images/${item.image}`
        : null;
      return { ...item.toObject(), image: imagePath };
    });

    res.status(200).json({ UserCartData });
    console.log("Cart order retrieved successfully");
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getCart = async (req, res) => {
  const { userId } = req.query;

  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const cartData = await ProductModel.find({
      _id: { $in: user.userCollection },
    });

    const formattedCartData = cartData.map((item) => {
      const imagePath = item.image
        ? `http://localhost:2000/images/${item.image}`
        : null;
      return { ...item.toObject(), image: imagePath };
    });

    res.status(200).json({ formattedCartData });
  } catch (error) {
    console.error("Error getting cart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const registerUser = async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      return res
        .status(409)
        .json({ status: "error", message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({
      name,
      email,
      password: hashedPassword,
      phone,
    });
    await user.save();

    res.json({ status: "success" });
    console.log("Sign Success");
  } catch (err) {
    console.error("Error during user registration:", err);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (isPasswordCorrect) {
        const token = jwt.sign(
          { id: user._id, email: user.email, role: user.role },
          process.env.JWT_SECRET || "jwt-secret-key",
          { expiresIn: "1d" }
        );
        res.cookie("token", token, { httpOnly: true });

        return res.json({
          status: "success",
          role: user.role,
          name: user.name,
          userId: user._id,
          phone: user.phone,
        });
        console.log("login success");
      } else {
        return res
          .status(401)
          .json({ status: "error", message: "Incorrect password" });
      }
    } else {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }
  } catch (err) {
    console.error("Error during login:", err);
    return res
      .status(500)
      .json({ status: "error", message: "Internal server error" });
  }
};
const removeItemFromCart = async (req, res) => {
  try {
    const { ProductId, userId } = req.body;

    if (!ProductId || !userId) {
      return res.status(400).send("ProductId and userId are required");
    }

    // Find the user by ID
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    // Ensure user.userCollection exists and is an array
    if (!Array.isArray(user.userCollection)) {
      return res.status(400).send("Invalid user collection");
    }

    // Remove the item from the user's collection
    user.userCollection = user.userCollection.filter((item) => {
      return item && item.toString() !== ProductId.toString();
    });

    // Save the updated user document
    await user.save();

    // Fetch the updated cart data
    const cartData = await ProductModel.find({
      _id: { $in: user.userCollection },
    });

    // Format the cart data to include image paths
    const formattedCartData = cartData.map((item) => {
      const imagePath = item.image
        ? `http://localhost:2000/images/${item.image}`
        : null;
      return { ...item.toObject(), image: imagePath };
    });

    res.status(200).send(formattedCartData);
  } catch (error) {
    res.status(500).send("Error removing item from cart");
    console.error("Error removing item from cart:", error);
  }
};

module.exports = {
  addToCart,
  getCart,
  registerUser,
  loginUser,
  removeItemFromCart,
};

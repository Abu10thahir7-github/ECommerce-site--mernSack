import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  fetchCartItems,
  removeItemFromCart,
} from "../../store/cartSlice";
import axios from "axios";
import { ProductAPI } from "../ApiEndpoint";
import Stack from "@mui/joy/Stack";
import Input from '@mui/joy/Input';

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import CircularProgress from '@mui/material/CircularProgress';

import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";

function Carts() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // State to track selected product
  const dispatch = useDispatch();
  const [ProductData, setProductData] = useState(null);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (user && user.userId) {
      dispatch(fetchCartItems(user.userId));
    }
  }, [dispatch, user.userId]);

  // const handleAddCart = (id) => {
  //   dispatch(addItemToCart({ productId: id, userId: user.userId }));
  // };
  const handleAddToCart = async (id) => {
    setLoading(true);
    try {
      
      await dispatch(addItemToCart({ productId: id, userId: user.userId }));
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  // const handleRemoveFromCart = (id) => {
  //   dispatch(removeItemFromCart({ productId: id, userId: user.userId }));
  // };
  const handleRemoveFromCart = async (id) => {
    setLoading(true);
    try {
      
      await  dispatch(removeItemFromCart({ productId: id, userId: user.userId }));
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const fetchAllFoods = async () => {
      try {
        const response = await axios.get(ProductAPI);
        setProductData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllFoods();
  }, []);

  const isItemInCart = (id) => {
    return (
      Array.isArray(cartItems) && cartItems.some((item) => item._id === id)
    );
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  return (
    <div className="Cart">
      <div className="fil-pri-bra-toggle">
        <div className="fil-pri-bra">
          <select>
            <option value="0">Sort by</option>
            <option value="">New</option>
            <option value="">Old</option>
          </select>
          <select>
            <option value="0">Sort by</option>
            <option value="">New</option>
            <option value="">Old</option>
          </select>
          <select>
            <option value="0">low - high</option>
            <option value="">0 - 199</option>
            <option value="">200 - 500</option>
            <option value="">500 - 1000</option>
            <option value="">1000 - 3000</option>
          </select>
          <div className="nav-search">
          <Input sx={{
    "--Input-decoratorChildHeight": "16px",
    "--Input-minHeight": "0px",
    "--Input-focusedThickness": "1px",
    "--Input-placeholderOpacity": 0.2,
    "--Input-gap": "5px"
  }} type="text" className="search-input" size="sm" placeholder="Search..." variant="soft"  endDecorator={<Button sx={{ }} variant="plain"> <SearchRoundedIcon /></Button>} />
    
          </div>
        </div>
        <div className="related">
          <p className="rele-name">Related</p>
          <div className="rele-con">
            {[
              "Football & Kits",
              "Shoes",
              "Laptop & PC",
              "Shirt",
              "Light & Bulbs",
            ].map((item) => (
              <p className="rele-item" key={item}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="carts">
        {ProductData &&
          ProductData.map((data) => (
            <Card sx={{ width: 320 }} key={data._id}>
              <div>
                <Typography level="title-lg">{data.Name}</Typography>
                <Chip>{data.Category}</Chip>
                <Chip>
                  <StarRateRoundedIcon className="cart-star" /> • 3.5+
                </Chip>
                <IconButton
                  aria-label="bookmark"
                  variant="plain"
                  color="neutral"
                  size="sm"
                  sx={{
                    position: "absolute",
                    top: "0.875rem",
                    right: "0.5rem",
                  }}
                >
                  <BookmarkAdd />
                </IconButton>
              </div>
              <AspectRatio
                onClick={() => openModal(data)} // Open modal with product details
                minHeight="120px"
                maxHeight="200px"
                sx={{ cursor: "pointer" }}
              >
                <img
                  src={data.imageUrl}
                  loading="lazy"
                  className="cart-img"
                  alt={data.Name} // Added alt text for better accessibility
                />
              </AspectRatio>
              <CardContent orientation="horizontal">
                <div>
                  <Typography
                    fontSize="lg"
                    className="price-text"
                    fontWeight="lg"
                  >
                    <span className="dollar-symbol">$</span> {data.price}
                  </Typography>
                </div>
                {isItemInCart(data._id) ? (
                  <Button
                    onClick={() => handleRemoveFromCart(data._id)}
                    variant="solid"
                    className="cart-add-btn"
                    size="md"
                    color="error"
                    aria-label="Remove from cart"
                    sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
                  >
                    <RemoveRoundedIcon />
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleAddToCart(data._id)}
                    variant="solid"
                    className="cart-add-btn"
                    size="md"
                    color="primary"
                    aria-label="Add to cart"
                    sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
                  >
                    <AddRoundedIcon />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
      </div>

      {/* Modal to show selected product details */}
      {selectedProduct && (
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={open}
          onClose={() => setOpen(false)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Sheet
            variant="soft"
            sx={{
              overflow: "auto",
              maxWidth: 900,
              height: "70vh",
              borderRadius: "md",
              p: 3,
              boxShadow: "lg",
              background: "#fff",
            }}
          >
            <Stack sx={{ display: "flex" }} spacing={1}>
              <div className="popup-img-name-des">
                <AspectRatio
                  flex
                  ratio="1"
                  variant=""
                  maxHeight={250}
                  sx={{
                    minWidth: 250,
                    padding: "10px",
                    background: "#00000000",
                    color: "#00000000",
                  }}
                >
                  <img
                    src={selectedProduct.imageUrl}
                    loading="lazy"
                    className="cart-img"
                    alt={selectedProduct.Name}
                  />
                </AspectRatio>
                <ModalClose variant="plain" sx={{ m: 1 }} />
                <Stack
                  direction="column"
                  justifyContent="space-evenly"
                  spacing={0.5}
                >
                  <Typography
                    component="h2"
                    id="modal-title"
                    level="h4"
                    textColor="inherit"
                    fontWeight="lg"
                    mb={1}
                  >
                    {selectedProduct.Name}
                  </Typography>
                  <Typography
                    sx={{ height: "30vh ", overflow: "auto" }}
                    id="modal-desc"
                    textColor="text.tertiary"
                    mt={2}
                  >
                    {selectedProduct.Description}
                  </Typography>
                </Stack>
              </div>
            </Stack>
            <Typography fontSize="sm" fontWeight="lg" mt={2}>
              Price: $ {selectedProduct.price}
            </Typography>
            <Typography fontSize="sm" fontWeight="lg" mt={2}>
              Brand : {selectedProduct.BrandName}
            </Typography>
            <Typography fontSize="sm" fontWeight="lg" mt={2}>
              Category : {selectedProduct.Category}
            </Typography>
            <Typography fontSize="sm" fontWeight="lg" mt={2}>
              Rating : {selectedProduct.Rating}
            </Typography>
            {isItemInCart(selectedProduct._id) ? (
        <Button
          onClick={() => handleRemoveFromCart(selectedProduct._id)}
          startDecorator={<ShoppingCartOutlinedIcon />}
          color="danger"
          sx={{}}
          variant="soft"
          disabled={loading} // Disable the button during loading
        >
          {loading ? <CircularProgress size={20} /> : 'Remove from cart'}
        </Button>
      ) : (
        <Button
          onClick={() => handleAddToCart(selectedProduct._id)}
          startDecorator={<ShoppingCartOutlinedIcon />}
          color="warning"
          sx={{}}
          variant="soft"
          disabled={loading} // Disable the button during loading
        >
          {loading ? <CircularProgress size={20} /> : 'Add to cart'}
        </Button>
      )}
          </Sheet>
        </Modal>
      )}
    </div>
  );
}

export default Carts;

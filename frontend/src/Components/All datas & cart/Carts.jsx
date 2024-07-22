import React from "react";
import "./cart.css";

import Rating from "@mui/material/Rating";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import shoes from "./shoes.jpeg";
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
import { useState, useEffect } from "react";

import axios from "axios";
function Carts() {
  const [ProductData, setProductData] = useState(null);

  useEffect(() => {
    const fetchAllFoods = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/product/ProductGet"
        );
        setProductData(response.data);

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllFoods();
  }, []);

  const items = [
    "Football & Kits",
    "Shoes",
    "Laptop & PC",
    "Shirt",
    "Light & Bulbs",
  ];
  return (
    <div className="Cart">
      <div className="fil-pri-bra-toggle">
        <div className="fil-pri-bra">
          <select name="" id="">
            <option value="0">Sort by</option>
            <option value="">New</option>
            <option value="">Old</option>
          </select>
          <select name="" id="">
            <option value="0">Sort by</option>
            <option value="">New</option>
            <option value="">Old</option>
          </select>
          <select name="" id="">
            <option value="0">low - high</option>
            <option value="">0 - 199</option>
            <option value="">200 - 500</option>
            <option value="">500 - 1000</option>
            <option value="">1000 - 3000</option>
          </select>
          <div className="nav-search">
            <input type="text" placeholder="Search..." />
            <button>
              <SearchRoundedIcon />
            </button>
          </div>
        </div>
        <div className="related">
          <p className="rele-name">Related</p>
          <div className="rele-con">
            {items.map((datas) => (
              <p className="rele-item">{datas}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="carts">
        {ProductData &&
          ProductData.map((data) => (
            <Card sx={{ width: 320 }}>
              <div>
                <Typography level="title-lg">{data.Name}</Typography>
                <Chip>{data.Category}</Chip>{" "}
                <Chip>
                  <StarRateRoundedIcon className="cart-star" /> • 3.5+{" "}
                </Chip>
                <IconButton
                  aria-label="bookmark Bahamas Islands"
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
              <AspectRatio minHeight="120px" maxHeight="200px">
                <img
                  src={data.imageUrl}
                  loading="lazy"
                  className="cart-img"
                  alt=""
                />
              </AspectRatio>
              <CardContent orientation="horizontal">
                <div>
                  <Typography level="body-xs"></Typography>
                  <Typography
                    fontSize="lg"
                    className="price-text"
                    fontWeight="lg"
                  >
                    <span className="doller-symbel">$</span> {data.price}
                  </Typography>
                </div>
                <Button
                  variant="solid"
                  className="cart-add-btn"
                  size="md"
                  color="primary"
                  aria-label="<AddRoundedIcon /> Bahamas Islands"
                  sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
                >
                  <AddRoundedIcon />
                </Button>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}

export default Carts;

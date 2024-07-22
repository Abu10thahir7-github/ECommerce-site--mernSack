import React, { useState, useRef } from "react";
import axios from "axios";
import "./Product.css";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Textarea from "@mui/joy/Textarea";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CardCover from "@mui/joy/CardCover";
import CircularProgress from "@mui/joy/CircularProgress";

function AddProduct() {
  const [prevImage, setPrevImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Description: "",
    Category: "",
    BrandName: "",
    price: "",
    time: "",
    image: null,
    imageUrl: "",
  });
  console.log(formData);

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
      imageUrl: "", // clear the imageUrl when a file is selected
    });
    setPrevImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleImageUrlChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      imageUrl: value,
      image: null, // clear the file input when an image URL is provided
    });
    setPrevImage(value);
  };

  const handleCategoryChange = (event, newValue) => {
    setFormData({
      ...formData,
      Category: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    formDataToSend.append("Name", formData.Name);
    formDataToSend.append("Description", formData.Description);
    formDataToSend.append("Category", formData.Category);
    formDataToSend.append("BrandName", formData.BrandName);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("time", formData.time);

    if (formData.image) {
      formDataToSend.append("image", formData.image);
    } else if (formData.imageUrl) {
      formDataToSend.append("imageUrl", formData.imageUrl);
    }
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/product/ProductAdd",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Product created:", response.data);
      setFormData({
        Name: "",
        Description: "",
        Category: "",
        BrandName: "",
        price: "",
        time: "",
        image: null,
        imageUrl: "",
      });
      setTimeout(() => {
        setLoading(false);
        window.location.reload();
      }, 2000); // 2-second timeout before hiding the loader
    } catch (error) {
      console.error("Error creating product:", error);
      setLoading(false);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="AddProduct">
      {loading && (
        <div className="loading-overlay">
          <CircularProgress />
        </div>
      )}
      <Card
        variant="outlined"
        sx={{
          maxHeight: "max-content",
          maxWidth: "50%",
          mx: "auto",
          overflow: "auto",
          resize: "horizontal",
          padding: 2,
        }}
      >
        <Typography
          level="title-lg"
          startDecorator={<AddCircleOutlineRoundedIcon />}
        >
          Add new product
        </Typography>
        <Divider inset="none" sx={{ my: 2 }} />
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <CardContent
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 2,
            }}
          >
            <Input
              placeholder="Enter name"
              name="Name"
              required
              type="text"
              value={formData.Name}
              onChange={handleChange}
            />
            <Input
              placeholder="Enter price"
              name="price"
              required
              type="number"
              value={formData.price}
              onChange={handleChange}
            />
            <Input
              placeholder="Your brand name"
              name="BrandName"
              required
              value={formData.BrandName}
              onChange={handleChange}
            />

            <Select
              variant="outlined"
              name="Category"
              value={formData.Category}
              onChange={(event, newValue) =>
                handleCategoryChange(event, newValue)
              }
              placeholder="Select category"
              startDecorator={<CategoryRoundedIcon />}
              required
            >
              <Option value="electronics">Electronics</Option>
              <Option value="fashion">Fashion</Option>
              <Option value="smart phone">Smart phone</Option>
              <Option value="books">Books</Option>
              <Option value="toys">Toys</Option>
              <Option value="sports">Sports</Option>
              <Option value="health-beauty">Health & Beauty</Option>
              <Option value="automotive">Automotive</Option>
              <Option value="furniture">Furniture</Option>
              <Option value="jewelry">Jewelry</Option>
              <Option value="laptop">Laptop</Option>
              <Option value="pet-supplies">Pet Supplies</Option>
              <Option value="groceries">Groceries</Option>
              <Option value="garden">Garden</Option>
              <Option value="music">Music</Option>
              <Option value="movies">Movies</Option>
              <Option value="baby-products">Baby Products</Option>
              <Option value="handmade">Handmade</Option>
              <Option value="outdoor">Outdoor</Option>
              <Option value="collectibles">Collectibles</Option>
              <Option value="healthcare">Healthcare</Option>
            </Select>
            <Input
              placeholder="Or enter image URL"
              name="imageUrl"
              value={formData.imageUrl}
              sx={{ gridColumn: "1/-1" }}
              onChange={handleImageUrlChange}
            />
            <Input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }} // Hide the file input
            />

            <Textarea
                    maxRows={8}

              minRows={4}
           
              name="Description"
              value={formData.Description}
              onChange={handleChange}
              placeholder="Enter description"
              variant="outlined"
              startDecorator={<DescriptionRoundedIcon />}
              required
            />
            <Card sx={{ minHeight: "250px", width: "100%" }}>
              <CardCover>
                <img
                  src={
                    prevImage ||
                    "https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png"
                  }
                  loading="lazy"
                  alt="Product"
                />
              </CardCover>
              <CardContent sx={{ justifyContent: "flex-end" }}>
                <Typography>
                  <EditRoundedIcon
                    className="addproduct-image-icon"
                    sx={{ color: "white", cursor: "pointer" }}
                    onClick={handleButtonClick}
                  />
                </Typography>
              </CardContent>
            </Card>
            <CardActions
              sx={{ gridColumn: "1/-1", justifyContent: "center", mt: 2 }}
            >
              <Button variant="soft" type="submit" color="primary">
                Add Product
              </Button>
            </CardActions>
          </CardContent>
        </form>
      </Card>
      <style jsx>{`
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
      `}</style>
    </div>
  );
}

export default AddProduct;

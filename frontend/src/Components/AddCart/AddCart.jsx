import axios from "axios";
import React, { useEffect, useState } from "react";
import { GetCart, RemoveItemFromCart_API } from "../ApiEndpoint";
import './AddCart.css'
import Button from '@mui/joy/Button';
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
// import PopupItem from "../";

function AddCart() {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  const userId = user.userId;
  const [selectedFood, setSelectedFood] = useState(null);

  const [CartData, setCartData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const GetCartData = async () => {
    try {
      const response = await axios.get(GetCart, { params: { userId } });
      setCartData(response.data.formattedCartData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetCartData();
  }, []);
  const handleGetItem = (id) => {
    const item = CartData.find((item) => item._id === id);
    setSelectedFood({
  item
    });
    setShowPopup(true);
  };

  const handleRemoveFromCart = async (id) => {
    try {
      const response = await axios.delete(RemoveItemFromCart_API, {
        data: { ProductId: id, userId },
        headers: { "Content-Type": "application/json" },
      });

      // Update the CartData state by filtering out the removed item
      setCartData(CartData.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Cart-container">
      <div className="cart-con-container">
        {CartData ? (
          CartData.map((item) => (
            <div className="cart-con">
              <img onClick={() => handleGetItem(item._id)} width={100} src={item.imageUrl} alt="" />
              <div className="cart-details">
                <p>{item.Name}</p>
                <p>{item.price}</p>
              </div>
              <Button
                className=""
                variant="plain"
                size="sm"
                color="warning"
                onClick={() => handleRemoveFromCart(item._id)}
              >
                <RemoveRoundedIcon />
              </Button>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {showPopup && selectedFood && (
        <PopupItem
          item={selectedFood}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default AddCart;
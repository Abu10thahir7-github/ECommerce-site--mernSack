import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GetCart, AddToCart, RemoveItemFromCart_API } from '../Components/ApiEndpoint';

// Async thunk for fetching cart items
export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(GetCart, { params: { userId } });
      return response.data.formattedCartData || []; // Ensure this matches your API response
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for adding an item to the cart
export const addItemToCart = createAsyncThunk(
  'cart/addItemToCart',
  async ({ productId, userId }, { rejectWithValue }) => {
    try {
      const response = await axios.post(AddToCart, { ProductId: productId, userId });
      return response.data.UserCartData; // Ensure this matches your API response
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for removing an item from the cart
// Async thunk for removing an item from the cart
export const removeItemFromCart = createAsyncThunk(
  'cart/removeItemFromCart',
  async ({ productId, userId }, { getState, rejectWithValue }) => {
    try {
      const response = await axios.delete(RemoveItemFromCart_API, {
        data: { ProductId: productId, userId },
        headers: { "Content-Type": "application/json" },
      });

      // Get the current cart items from the state
      const state = getState();
      const cartItems = state.cart.cartItems;

      // Filter out the removed item from the cart items
      const updatedCartItems = cartItems.filter((item) => item._id !== productId);

      return updatedCartItems;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],  // Ensure cartItems is initialized as an empty array
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cartItems = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to add item to cart';
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(removeItemFromCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to remove item from cart';
      });
  },
});

export default cartSlice.reducer;

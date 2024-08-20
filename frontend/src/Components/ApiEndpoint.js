// apiEndpoints.js (or wherever you define your endpoints)
const baseUrl = "http://localhost:2000"; // Ensure no leading or trailing spaces

// API Endpoints
export const AddToCart = `${baseUrl}/api/user/ProductAddtoCart`;
export const GetCart = `${baseUrl}/api/user/getCart`;
export const ProductAPI = `${baseUrl}/api/product/ProductGet`;
export const RemoveItemFromCart_API = `${baseUrl}/api/user/removeItemFromCart`;

// export const FoodgetByID_API = (id) => `${baseUrl}/api/allFood/getFoodById/${id}`;
 export const ProductgetByID_API = (id) => `${baseUrl}/api/product/ProductGetById/${id}`;

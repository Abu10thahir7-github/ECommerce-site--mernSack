import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);

    try {
      const response = await axios.post('/api/items', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage('Item added successfully!');
      setName('');
      setDescription('');
      setPrice('');
      setImage(null);
    } catch (error) {
      setMessage('Failed to add item. Please try again.');
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Item Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddProduct;

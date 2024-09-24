import React, { useState } from "react";
import axios from "axios";
import Cookie from "cookie-universal";
import "./Writer.css";

export default function Writer() {
  const cookie = Cookie();
  const token = cookie.get("CuberWeb");

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    birthday: "",
    address: "",
    phone: "",
    email: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file,
      }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, age, birthday, address, phone, email, image } = formData;

    const data = new FormData();
    data.append("name", name);
    data.append("age", age);
    data.append("birthday", birthday);
    data.append("address", address);
    data.append("phone", phone);
    data.append("email", email);
    data.append("image", image);

    try {
      await axios.post("http://127.0.0.1:8000/api/dataUser", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Data submitted successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="writer-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Birthday:</label>
          <input
            type="date"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      {imagePreview && (
        <div className="image-preview">
          <h2>Image Preview:</h2>
          <img src={imagePreview} alt="Preview" />
        </div>
      )}
    </div>
  );
}

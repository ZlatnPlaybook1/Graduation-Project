import React, { useState, useEffect } from "react";
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
    image: "",
  });

  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const difference = Date.now() - birthDate.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8080/api/personalInfo`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res);
        const data = res.data.data;

        setFormData((prevData) => ({
          ...prevData,
          name: data.name,
          age: calculateAge(data.birthday),
          birthday: data.birthday,
          address: data.address,
          phone: data.phone,
          image: data.image,
        }));

        setImagePreview(data.image);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "birthday") {
      const age = calculateAge(value);
      setFormData((prevData) => ({
        ...prevData,
        birthday: value,
        age: age,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          image: reader.result,
        }));
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErr("");

    try {
      const res = await axios.post(
        "http://127.0.0.1:8080/api/dataUser",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const submittedData = res.data.data;
      console.log("Response:", submittedData);
      setLoading(false);
      // Optionally reset the form
      // setFormData({
      //   name: "",
      //   age: "",
      //   birthday: "",
      //   address: "",
      //   phone: "",
      //   image: "",
      // });
    } catch (error) {
      setLoading(false);
      setErr("Error submitting data");
      console.error("Error:", error);
    }
  };

  return (
    <div className="writer-form">
      {loading && <p>Loading...</p>}
      {imagePreview && (
        <div className="image-preview">
          <img src={imagePreview} alt="Preview" />
        </div>
      )}
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
            disabled
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
          <label>Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
        {err && <p className="error">{err}</p>}
      </form>
    </div>
  );
}

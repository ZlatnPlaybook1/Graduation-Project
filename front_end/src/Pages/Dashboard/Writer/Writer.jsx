import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookie from "cookie-universal";
import "./Writer.css";

export default function Writer() {
  const cookie = Cookie();
  const token = cookie.get("CuberWeb");

  const [formData, setFormData] = useState({
    name: "",
    birthday: "",
    address: "",
    phoneNum: "",
    image: null, // Store image as file object
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

        const data = res.data.data;
        // Construct full image URL
        const imageUrl = data.image
          ? `http://127.0.0.1:8080/${data.image.path.replace("\\", "/")}`
          : "";

        setFormData((prevData) => ({
          ...prevData,
          name: data.name,
          birthday: data.birthday,
          address: data.address,
          phoneNum: data.phoneNum,
          image: imageUrl, // Set the full image URL
        }));

        setImagePreview(imageUrl); // Set the preview image URL
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
          image: file, // Store the file object for form submission
        }));
        setImagePreview(reader.result); // Preview image using base64
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErr("");

    // Prepare FormData to submit
    const submissionData = new FormData();
    submissionData.append("name", formData.name);
    submissionData.append("birthday", formData.birthday);
    submissionData.append("address", formData.address);
    submissionData.append("phoneNum", formData.phoneNum);

    if (formData.image) {
      submissionData.append("image", formData.image); // Append image file
    }

    try {
      const res = await axios.post(
        "http://127.0.0.1:8080/api/dataUser",
        submissionData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Ensure it's set for file upload
          },
        }
      );

      const submittedData = res.data.data;
      console.log("Response:", submittedData);
      setLoading(false);
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
            value={calculateAge(formData.birthday)}
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
            name="phoneNum"
            value={formData.phoneNum}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" name="image" onChange={handleImageChange} />
        </div>
        <button type="submit">Submit</button>
        {err && <p className="error">{err}</p>}
      </form>
    </div>
  );
}

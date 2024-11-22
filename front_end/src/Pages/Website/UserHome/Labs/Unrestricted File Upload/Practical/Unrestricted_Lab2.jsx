import React, { useState } from "react";
import "./FileUplode.css";
import Header from "../../../Header/Header";
import Cookie from "cookie-universal";

const UnrestrictedLab1 = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    // Validate file type (Only allow images: gif, jpg, jpeg, png)
    if (
      selectedFile &&
      (selectedFile.type === "image/gif" ||
        selectedFile.type === "image/jpeg" ||
        selectedFile.type === "image/jpg" ||
        selectedFile.type === "image/png")
    ) {
      setFile(selectedFile);
    } else {
      setStatus("invalidFile");
      setFile(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      setStatus("empty");
      return;
    }

    const formData = new FormData();
    formData.append("input_image", file);

    const cookie = Cookie();
    const token = cookie.get("CuberWeb");

    try {
      const response = await fetch(
        "http://127.0.0.1:8080/api/UnrestrictedFileUplodeLab2",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setStatus("success");
      } else {
        setStatus("unsuccess");
      }
    } catch (error) {
      setStatus("unsuccess");
    }
  };

  const handleDeleteFile = () => {
    setFile(null);
    setStatus("");
    document.getElementById("input_image").value = "";
    window.location.reload();
  };

  return (
    <>
      <Header />
      <div className="unique-container">
        <div className="unique-container-wrapper">
          <div className="row pt-5 mt-5 mb-3">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <h1 className="mb-4">Subject: The Importance of Cybersecurity</h1>
              <p>
                In today's digital age, cybersecurity plays a crucial role in
                protecting sensitive information. With increasing threats like
                phishing, malware, and ransomware, individuals and organizations
                must implement strong security measures. This includes using
                strong passwords, enabling multi-factor authentication, and
                regularly updating software.
              </p>
              <p>
                Moreover, cybersecurity awareness is vital. By educating people
                about potential risks and safe online practices, we can minimize
                the chances of successful cyberattacks. As technology evolves,
                staying informed and proactive is the best defense against cyber
                threats.
              </p>
              <p>
                Would you like to share a photo related to your cybersecurity
                journey? 😊 Please upload your photo!
              </p>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={handleDeleteFile}
              >
                Delete Files
              </button>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row pt-3">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="card border-primary mb-4">
                <div className="card-header text-primary">
                  Supported Formats: <b>GIF, JPG, JPEG, PNG</b>
                </div>
              </div>
              <h3 className="mb-3">Upload Your Files</h3>

              {status === "success" && (
                <div className="alert alert-success" role="alert">
                  <b>File uploaded successfully!</b>
                </div>
              )}
              {status === "unsuccess" && (
                <div className="alert alert-danger" role="alert">
                  <b>File upload failed. Please try again.</b>
                </div>
              )}
              {status === "empty" && (
                <div className="alert alert-danger" role="alert">
                  <b>No file selected. Please upload a file.</b>
                </div>
              )}
              {status === "invalidFile" && (
                <div className="alert alert-danger" role="alert">
                  <b>
                    Invalid file type. Please upload an image (GIF, JPG, JPEG,
                    PNG).
                  </b>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="input_image" className="form-label">
                    Choose an image file
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="input_image"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" type="submit">
                    Upload
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnrestrictedLab1;

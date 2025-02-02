import Footer from "../../../../Footer/Footer";
import GoBack_Btn from "../../../../GoBack_Btn/GoBack_Btn";
import ShowHint_Btn from "../../../../ShowHint_Btn/ShowHint_Btn";
import "../../../Page_Styles/Practical_Flag_answers.css";
import React, { useEffect, useState } from "react";

// Import images for the capitals
import ParisImage from "../images/Paris.jpeg";
import BerlinImage from "../images/Berlin.jpeg";
import TokyoImage from "../images/Tokyo.jpeg";
import CairoImage from "../images/Cairo.jpeg";
import LondonImage from "../images/London.jpeg";
import PyongyangImage from "../images/Pyongyang.jpeg";

export default function Learn_capital_1() {
  const [selectedFile, setSelectedFile] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [capitalImage, setCapitalImage] = useState("");
  const [error, setError] = useState("");

  // Simulated file system for educational purposes
  const allowedFiles = {
    Paris: {
      content: "Paris is the capital of France.",
      image: ParisImage,
    },
    Berlin: {
      content: "Berlin is the capital of Germany.",
      image: BerlinImage,
    },
    Tokyo: {
      content: "Tokyo is the capital of Japan.",
      image: TokyoImage,
    },
    Cairo: {
      content: "Cairo is the capital of Egypt.",
      image: CairoImage,
    },
    London: {
      content: "London is the capital of England.",
      image: LondonImage,
    },
    Pyongyang: {
      content: "Pyongyang is the capital of North Korea.",
      image: PyongyangImage,
    },
  };

  useEffect(() => {
    document.title = "File Inclusion Demonstration";

    // Parse the file name from the URL query parameters
    const queryParams = new URLSearchParams(window.location.search);
    const fileFromUrl = queryParams.get("file");

    if (fileFromUrl && allowedFiles[fileFromUrl]) {
      // If the file exists in the allowedFiles object, set the content and image
      setSelectedFile(fileFromUrl);
      setFileContent(allowedFiles[fileFromUrl].content);
      setCapitalImage(allowedFiles[fileFromUrl].image);
      setError(""); // Clear any errors
    } else if (fileFromUrl) {
      // If the file is in the URL but not in allowedFiles, show an error
      setError("File not found or access denied.");
    }
  }, []);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.value);
    setError(""); // Clear any previous errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile && allowedFiles[selectedFile]) {
      // Update the URL with the selected file as a query parameter
      const newUrl = `${window.location.pathname}?file=${selectedFile}`;
      window.history.pushState({}, "", newUrl);

      // Set the file content and image
      setFileContent(allowedFiles[selectedFile].content);
      setCapitalImage(allowedFiles[selectedFile].image);
      setError("");
    } else {
      // Simulate a file inclusion vulnerability (for educational purposes)
      setError("File not found or access denied.");
      setFileContent("");
      setCapitalImage("");
    }
  };

  return (
    <>
      <div className="course-labcc">
        <GoBack_Btn />
        <ShowHint_Btn
          hintText={
            "This exercise demonstrates how file inclusion vulnerabilities work. Try to access files by manipulating the input. Always validate and sanitize user input to prevent such attacks!"
          }
        />
        <div className="container-labcc">
          <div className="faq-section-labcc">
            <div className="question-div">
              <div className="text-center">
                <h2>File Inclusion Demonstration</h2>
                <p>
                  Select a file to view its content and the image of the capital. This simulates a file inclusion vulnerability in a controlled environment.
                </p>
              </div>
              <form onSubmit={handleSubmit} style={{ flexDirection: "column" }}>
                <div className="selection-style">
                  <select name="file" onChange={handleFileChange} value={selectedFile}>
                    <option value="" disabled>
                      Select a File
                    </option>
                    {Object.keys(allowedFiles).map((file) => (
                      <option key={file} value={file}>
                        {file}
                      </option>
                    ))}
                  </select>
                </div>
                <button type="submit" id="check">
                  <i className="fa-regular fa-file"></i> View File Content
                </button>
              </form>
              <div className="capital-info">
                {fileContent && (
                  <div className="file-content">
                    <h3>File Content:</h3>
                    <pre>{fileContent}</pre>
                  </div>
                )}
                {capitalImage && (
                  <div className="capital-image">
                    <h3>Capital Image:</h3>
                    <img src={capitalImage} alt="Capital" style={{ maxWidth: "100%", height: "auto" }} />
                  </div>
                )}
                {error && (
                  <div className="error-message">
                    <h3>Error:</h3>
                    <p>{error}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
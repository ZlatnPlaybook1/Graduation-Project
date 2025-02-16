import axios from "axios";
import Footer from "../../../../Footer/Footer";
import GoBackBtn from "../../../../GoBack_Btn/GoBack_Btn";
import ShowHintBtn from "../../../../ShowHint_Btn/ShowHint_Btn";
import "../../../Page_Styles/Practical_Flag_answers.css";
import React, { useEffect, useState } from "react";

export default function Learn_capital_3() {
  const [selectedFile, setSelectedFile] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [setError] = useState("");

  // Simulated file system for educational purposes

  useEffect(() => {
    document.title = "File Inclusion Demonstration";

    // Parse the file name from the URL query parameters
    const queryParams = new URLSearchParams(window.location.search);
    const fileFromUrl = queryParams.get("car");

    if (fileFromUrl) {
      // Fetch file data from the backend
      fetchFileData(fileFromUrl);
    }
  });

  const fetchFileData = async (car) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8080/api/fileInclusionLab3?car=${car}`
      );

      // Use response.data directly without checking response.ok
      setFileContent(response.data);
      setError("");
    } catch (err) {
      console.error("Error fetching file:", err);
      setError("File not found or access denied.");
      setFileContent("");
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.value);
    setError(""); // Clear any previous errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      // Update the URL with the selected file as a query parameter
      const newUrl = `${window.location.pathname}?car=${selectedFile}`;
      window.history.pushState({}, "", newUrl);
      // submitFileData(selectedFile);
      // Fetch file data from the backend
      fetchFileData(selectedFile);
    } else {
      setError("Please select a file.");
    }
  };

  return (
    <>
      <div className="course-labcc">
        <GoBackBtn />
        <ShowHintBtn
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
                  Select a file to view its content and the image Car Brand
                  Logos. This simulates a file inclusion vulnerability in a
                  controlled environment.
                </p>
              </div>
              <form onSubmit={handleSubmit} style={{ flexDirection: "column" }}>
                <div className="selection-style">
                  <select
                    name="file"
                    onChange={handleFileChange}
                    value={selectedFile}
                  >
                    <option value="" disabled>
                      Select a File
                    </option>
                    <option value="BMW">BMW</option>
                    <option value="GTR">GTR</option>
                    <option value="Honda">Honda</option>
                    <option value="Kia">Kia</option>
                    <option value="Mazda">Mazda</option>
                    <option value="Nissan">Nissan</option>
                  </select>
                </div>
                <button type="submit" id="check">
                  <i className="fa-regular fa-file"></i> View File Content
                </button>
              </form>
              <div className="capital-info">
                {fileContent && (
                  <div className="file-content">
                    {/* <h3>Rendered HTML:</h3> */}
                    <div
                      dangerouslySetInnerHTML={{ __html: fileContent }}
                    ></div>
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

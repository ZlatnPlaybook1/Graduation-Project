import Footer from "../../../../Footer/Footer";
import GoBack_Btn from "../../../../GoBack_Btn/GoBack_Btn";
import ShowHint_Btn from "../../../../ShowHint_Btn/ShowHint_Btn";
import "../../../Page_Styles/Practical_Flag_answers.css";
import React, { useEffect, useState } from "react";

export default function Learn_capital_2() {
  const [selectedFile, setSelectedFile] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [capitalImage, setCapitalImage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "File Inclusion Demonstration";

    // Parse the file name from the URL query parameters
    const queryParams = new URLSearchParams(window.location.search);
    const fileFromUrl = queryParams.get("file");

    if (fileFromUrl) {
      // Fetch file data from the backend
      fetchFileData(fileFromUrl);
    }
  }, []);

  const fetchFileData = async (fileName) => {
    try {
      const response = await fetch(`/api/getFileData?file=${fileName}`);
      if (!response.ok) {
        throw new Error("File not found or access denied.");
      }
      const data = await response.json();
      setFileContent(data.content);
      setCapitalImage(data.image);
      setError("");
    } catch (err) {
      setError(err.message);
      setFileContent("");
      setCapitalImage("");
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
      const newUrl = `${window.location.pathname}?file=${selectedFile}`;
      window.history.pushState({}, "", newUrl);

      // Fetch file data from the backend
      fetchFileData(selectedFile);
    } else {
      setError("Please select a file.");
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
                  Select a file to view its content and the image of Fruits. This simulates a file inclusion vulnerability in a controlled environment.
                </p>
              </div>
              <form onSubmit={handleSubmit} style={{ flexDirection: "column" }}>
                <div className="selection-style">
                  <select name="file" onChange={handleFileChange} value={selectedFile}>
                    <option value="" disabled>
                      Select a File
                    </option>
                    <option value="Apple">Apple</option>
                    <option value="Banana">Banana</option>
                    <option value="Guava">Guava</option>
                    <option value="Mango">Mango</option>
                    <option value="Strawberry">Strawberry</option>
                    <option value="WaterMelon">WaterMelon</option>
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
                    <h3>Friut Image:</h3>
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

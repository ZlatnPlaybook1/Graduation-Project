import React, { useEffect, useState } from "react";

export default function TextFileViewer() {
  const [fileContent, setFileContent] = useState("");

  useEffect(() => {
    // Fetch the robots.txt file from the correct path
    fetch("/robots2.txt")
      .then((response) => response.text())
      .then((data) => {
        setFileContent(data); // Set the file content to the state
      })
      .catch((error) => {
        console.error("Error fetching robots.txt:", error);
      });
  }, []);

  // Return raw text content
  return <pre>{fileContent}</pre>;
}

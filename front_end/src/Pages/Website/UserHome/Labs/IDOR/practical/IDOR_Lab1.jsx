import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./IDOR_LAB1.css";
import GoBack_Btn from "../../../GoBack_Btn/GoBack_Btn";

export default function IDOR_Lab1() {
  const strings = {
    title: "Invoice Viewer",
    card_alert: "Invoice Alert",
    middle_title: "View Your Invoice",
    button: "View Invoice",
  };

  const navigate = useNavigate();
  const location = useLocation();

  // Helper function to parse query parameters
  const getQueryParam = (param) => {
    return new URLSearchParams(location.search).get(param);
  };

  // Fetch the invoice data (including the PDF path) from the backend
  const fetchInvoiceData = async (invoiceId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8080/api/IDORSLab1?id=${invoiceId}`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch the invoice data: ${response.status}`);
      }

      const data = await response.json();
      const { message, pdfs } = data;

      if (message === "Pdfs retrieved successfully") {
        const pdf = pdfs.find((pdf) => pdf.id === Number(invoiceId));
        if (pdf) {
          return `http://127.0.0.1:8080/${pdf.path}`;
        }
      }
      return null;
    } catch (error) {
      console.error("Error fetching the invoice:", error);
      return null;
    }
  };

  // Handle button click to update the URL and open the PDF in a new tab
  const handleViewClick = async (id) => {
    navigate(`?invoice_id=${id}`, { replace: true });

    const pdfUrl = await fetchInvoiceData(id);
    if (pdfUrl) {
      window.open(pdfUrl, "_blank");
    } else {
      alert("Unable to retrieve the PDF. Please try again.");
    }
  };

  // Fetch the PDF on component load if query param exists
  useEffect(() => {
    const invoiceId = getQueryParam("invoice_id");
    if (invoiceId) {
      fetchInvoiceData(invoiceId).then((pdfUrl) => {
        if (pdfUrl) {
          window.open(pdfUrl, "_blank");
        } else {
          alert("Invalid or missing PDF.");
        }
      });
    }
  }, [location.search]);

  return (
    <>
      <GoBack_Btn />
      <div className="idor-container">
        <div className="idor-container-wrapper">
          <div className="idor-row idor-pt-5 idor-mt-5 idor-mb-3">
            <div className="idor-col-md-3"></div>
            <div className="idor-col-md-6">
              <h1 className="idor-title">{strings.title}</h1>
            </div>
            <div className="idor-col-md-3"></div>
          </div>

          <div className="idor-row idor-pt-2">
            <div className="idor-col-md-3"></div>
            <div className="idor-col-md-6">
              <div className="idor-card idor-border-primary idor-mb-4">
                <div className="idor-card-header idor-text-primary">
                  {strings.card_alert}
                </div>
              </div>

              <h3 className="idor-middle-title idor-mb-3">
                {strings.middle_title}
              </h3>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="idor-d-grid idor-gap-2">
                  <button
                    className="idor-btn idor-btn-primary"
                    type="button"
                    onClick={() => handleViewClick(1)} // Example with invoice_id = 1
                  >
                    {strings.button}
                  </button>
                </div>
              </form>
            </div>
            <div className="idor-col-md-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}

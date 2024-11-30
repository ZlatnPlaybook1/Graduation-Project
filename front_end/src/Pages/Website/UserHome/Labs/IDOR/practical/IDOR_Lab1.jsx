import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./IDOR_LAB1.css";

export default function IDOR_Lab1() {
  const strings = {
    title: "Invoice Viewer",
    card_alert: "Invoice Alert",
    middle_title: "View Your Invoice",
    button: "View Invoice",
  };

  const [pdfUrl, setPdfUrl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // To get the invoice_id from the URL query params
  const getInvoiceIdFromUrl = () => {
    const params = new URLSearchParams(location.search);
    return params.get("invoice_id");
  };

  // Effect to load the PDF whenever the invoice_id changes in the URL
  useEffect(() => {
    const invoiceId = getInvoiceIdFromUrl();
    if (invoiceId) {
      fetchInvoiceData(invoiceId);
    }
  }, [location.search]);
  const fetchInvoiceData = async (invoiceId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8080/api/IDORLab1?id=${invoiceId}`
      );
      if (!response.ok) throw new Error("Failed to fetch the PDF");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (error) {
      console.error("Error fetching the invoice:", error);
    }
  };

  const handleViewClick = (id) => {
    navigate(`?invoice_id=${id}`, { replace: true });
  };

  return (
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
                  onClick={() => handleViewClick(1)}
                >
                  {strings.button}
                </button>
              </div>
            </form>
          </div>
          <div className="idor-col-md-3"></div>
        </div>

        {/* Conditionally render the iframe when pdfUrl is available */}
        {pdfUrl && (
          <div className="idor-pdf-viewer">
            <iframe
              src={pdfUrl}
              title="Invoice PDF"
              className="idor-iframe"
              style={{ width: "100%", height: "90vh", border: "none" }}
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

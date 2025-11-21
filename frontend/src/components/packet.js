import React, { useState } from "react";

export default function Packet() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="packet-wrapper">
      {isLoading && (
        <div className="packet-loading">
          <div className="loading-spinner"></div>
          <p>Loading sponsorship package...</p>
        </div>
      )}
      
      {hasError ? (
        <div className="packet-error">
          <h3>Unable to load PDF</h3>
          <p>Please download the sponsorship package directly:</p>
          <a href="WashU_SHPE_Sponsorship_Package.pdf" download className="error-download-btn">
            Download Sponsorship Package
          </a>
        </div>
      ) : (
        <iframe 
          src="WashU_SHPE_Sponsorship_Package.pdf" 
          className="package"
          title="SHPE Sponsorship Package"
          onLoad={handleLoad}
          onError={handleError}
        ></iframe>
      )}
    </div>
  );
}

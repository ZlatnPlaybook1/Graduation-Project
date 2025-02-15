import React from 'react';

const DownloadImage = () => {
  // URL of the image you want to download
  const imageUrl = '../../../../assets/img/BLV/background.png';
  // Desired name of the downloaded file
  const fileName = 'downloaded_image.jpg';

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Download Image Example</h2>
      <img 
        src={imageUrl} 
        alt="Downloadable" 
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '1rem' }} 
      />
      <br />
      <a href={imageUrl} download={fileName}>
        <button type="button">Download Image</button>
      </a>
    </div>
  );
};

export default DownloadImage;

import React, { useState } from 'react';

const ImageUploader = ({ onFileSelect }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="file-upload-wrapper">
      <input id="file-upload" type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
};

export default ImageUploader;
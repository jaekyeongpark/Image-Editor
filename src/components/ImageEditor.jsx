import React from 'react';

const ImageEditor = ({ image, onEdit }) => {
  const handleEdit = () => {
    // 편집 로직 (예: 크기 조정, 자르기 등)
    onEdit(editedImage);
  };

  return (
    <div>
      {image && <img src={URL.createObjectURL(image)} alt="To edit" />}
      <button onClick={handleEdit}>Edit Image</button>
    </div>
  );
};

export default ImageEditor;

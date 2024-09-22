import { useState } from 'react';

import ImageUploader from '@/components/ImageUploader';
import ImagePreview from '@/components/ImagePreview';
import ImageEditor from '@/components/ImageEditor';

export default function ImageEditorPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [editedImage, setEditedImage] = useState(null);

  const handleFileSelect = (file) => {
    setSelectedImage(file);
    setEditedImage(null);
  };

  const handleImageEdit = (image) => {
    setEditedImage(image);
  };

  return (
    <div className="image-editor-page">
      <h1>이미지 에디터</h1>
      <ImageUploader onFileSelect={handleFileSelect} />
      <ImagePreview image={editedImage || selectedImage} />
      <ImageEditor image={selectedImage} onEdit={handleImageEdit} />
    </div>
  );
}
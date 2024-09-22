import { useRef, useEffect } from 'react';

const ImagePreview = ({ image }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (image && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      const img = new Image();

      img.src = URL.createObjectURL(image);

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        context.clearRect(0, 0, canvas.width, canvas.height); // 기존 그림 지우기
        context.drawImage(img, 0, 0);
      };

      // 메모리 누수 방지
      return () => URL.revokeObjectURL(img.src);
    }
  }, [image]);

  return (
    <div>
      {image ? (
        <canvas ref={canvasRef} className='image-canvas' />
      ) : (
        <p>No image selected</p>
      )}
    </div>
  );
};

export default ImagePreview;

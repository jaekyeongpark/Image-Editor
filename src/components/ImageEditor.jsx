import { useRef, useEffect } from 'react';
import ImageProcessor from '@/utils/imageProcessor';

const ImageEditor = ({ image, onEdit }) => {
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

  const grayScale = () => {
    const processor = new ImageProcessor(canvasRef.current);
    processor.applyGrayscale();
  };
  const blackWhite = () => {
    const processor = new ImageProcessor(canvasRef.current);
    processor.applyBlackWhite();
  };

  return (

    <div className='edit-canvas-wrapper'>
      <button type="button" onClick={grayScale}>Gray Scale</button>
      <button type="button" onClick={blackWhite}>Black White</button>

      {image ? (
        <canvas ref={canvasRef} className='edit-canvas' />
      ) : ""}


    </div>
  );
};

export default ImageEditor;

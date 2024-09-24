import { useRef, useEffect, useState } from 'react';
import ImageProcessor from '@/utils/imageProcessor';

const ImageEditor = ({ image }) => {
  const canvasRef = useRef(null);
  const processorRef = useRef(null); // Use useRef to store the processor instance
  const [originalImage, setOriginalImage] = useState(null);

  useEffect(() => {
    if (image && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      const img = new Image();

      img.src = URL.createObjectURL(image);

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0);

        const originalData = context.getImageData(0, 0, canvas.width, canvas.height);
        setOriginalImage(originalData);

        processorRef.current = new ImageProcessor(canvas);
      };

      return () => URL.revokeObjectURL(img.src);
    }
  }, [image]);

  const grayScale = () => {
    if (processorRef.current) {
      processorRef.current.applyGrayscale();
    }
  };

  const blackWhite = () => {
    if (processorRef.current) {
      processorRef.current.applyBlackWhite();
    }
  };

  const reverse = () => {
    if (processorRef.current) {
      processorRef.current.applyReverse();
    }
  };

  const reset = () => {
    if (originalImage && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      context.putImageData(originalImage, 0, 0);
    }
  };

  const seva = () => {
    const canvas = canvasRef.current;

    if (canvas) {
      canvas.toBlob((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'save.png';
        link.click()

        URL.revokeObjectURL(link.href);
      }, 'image/png');
    }
  }

  return (
    <>
      <div className='edit-canvas-buttons'>
        <button type="button" onClick={seva}>Save</button>
        <button type="button" onClick={reset}>Reset</button>
        <button type="button" onClick={grayScale}>Gray Scale</button>
        <button type="button" onClick={blackWhite}>Black White</button>
        <button type="button" onClick={reverse}>Reverse</button>
      </div>

      <div className='edit-canvas-wrapper'>
        {image ? (
          <canvas ref={canvasRef} className='edit-canvas' />
        ) : ""}
      </div>
    </>
  );
};

export default ImageEditor;

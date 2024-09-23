export default class ImageProcessor {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
  }

  applyGrayscale() {
    const imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = avg;        // Red
      data[i + 1] = avg;    // Green
      data[i + 2] = avg;    // Blue
    }

    this.context.putImageData(imageData, 0, 0);
  }
}
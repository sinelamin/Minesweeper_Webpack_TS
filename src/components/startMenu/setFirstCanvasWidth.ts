export function setFirstCanvasWidth(firstCanvas: HTMLCanvasElement): void {
  const container = document.querySelector('.container');

  if (container && firstCanvas) {
    const containerCss = getComputedStyle(container);
    const containerWidth = parseFloat(containerCss.getPropertyValue('width'));
    const containerHeight = parseFloat(containerCss.getPropertyValue('height'));

    firstCanvas.width = (containerWidth * 90) / 100;
    firstCanvas.height = (containerHeight * 90) / 100;
  }
}
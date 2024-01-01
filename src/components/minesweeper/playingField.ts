import { getSizeCell } from "./sizeCell";

export function createPlayingField(context: CanvasRenderingContext2D | null, arrField: number[][]): void {
  const sizeCell = getSizeCell();
  
  if (context && sizeCell) {
    for (let i = 0; i < arrField.length; i += 1) {
      for (let j = 0; j < arrField.length; j += 1) {
        if (arrField[i][j] === 11) {
          context.beginPath();
          context.fillStyle = '#9c9c9c';
          context.lineWidth = 2;
          context.fillRect((i * sizeCell) + 1, (j * sizeCell) + 1, sizeCell - 1, sizeCell - 1);
          context.closePath();
        }
      }
    }
  }
}
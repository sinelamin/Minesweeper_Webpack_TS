import { getSizeCell } from "./sizeCell";

export function testGame(
  context: CanvasRenderingContext2D | null,
  arrField: number[][]): void {
    const sizeCell = getSizeCell();

  if (context && sizeCell) {
    for (let i = 0; i < arrField.length; i += 1) {
      for (let j = 0; j < arrField.length; j += 1) {
        if (arrField[i][j] === 9) {
          context.beginPath();
          context.fillStyle = 'red';
          context.strokeStyle = 'rgb(197, 234, 197)';
          context.lineWidth = 2;
          context.fillRect((i * sizeCell) + 1, (j * sizeCell) + 1, sizeCell - 2, sizeCell - 2);
          context.strokeRect((i * sizeCell) + 1, (j * sizeCell) + 1, sizeCell - 2, sizeCell - 2);
          context.closePath();
        }
      }
    }
  }
}
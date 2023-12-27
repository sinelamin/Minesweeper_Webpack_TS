import { createFlag } from "./Flags";
import { mineConstructor, mineDeactive } from "./mines";

export function createPlayingCell(context: CanvasRenderingContext2D | null, arrCell: number[][]): void {
  if (context) {
    for (let i = 0; i < arrCell.length; i += 1) {
      for (let j = 0; j < arrCell.length; j += 1) {
        if (arrCell[i][j] === 0) {
          context.beginPath();
          context.fillStyle = '#8f8f8f';
          context.strokeStyle = '#fff';
          context.lineWidth = 2;
          context.fillRect((i * 40) + 1, (j * 40) + 1, 38, 38);
          context.strokeRect((i * 40) + 1, (j * 40) + 1, 38, 38);
          context.closePath();
        }

        if (arrCell[i][j] === 1) {
          createFlag(context, i, j);
        }

        if (arrCell[i][j] === 12) {
          mineConstructor(context, i, j, '#9c9c9c');
          mineDeactive(context, i, j);
        }
      }
    }
  }
}
import { createFlag } from "./Flags";
import { mineConstructor, mineDeactive } from "./mines";
import { getSizeCell } from "./sizeCell";

export function createPlayingCell(
  context: CanvasRenderingContext2D | null,
  arrCell: number[][]
): void {
  const sizeCell = getSizeCell();

  if (context && sizeCell) {
    for (let i = 0; i < arrCell.length; i += 1) {
      for (let j = 0; j < arrCell.length; j += 1) {
        if (arrCell[i][j] === 0) {
          context.beginPath();
          context.fillStyle = '#8f8f8f';
          context.strokeStyle = 'rgb(197, 234, 197)';
          context.lineWidth = 2;
          context.fillRect(
            (i * sizeCell) + 1,
            (j * sizeCell) + 1,
            sizeCell - 1,
            sizeCell - 1
          );
          context.strokeRect(
            (i * sizeCell) + 1,
            (j * sizeCell) + 1,
            sizeCell - 1,
            sizeCell - 1
          );
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
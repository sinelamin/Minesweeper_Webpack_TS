import { openCell } from "./openCell";
import { mineConstructor } from "./mines";
import { deadSmile } from "./changeSmile";

export function mineExplosion(
  sizeCell: number,
  context: CanvasRenderingContext2D | null,
  arrField: number[][],
  arrCell: number[][],
  x: number,
  y: number,
  btnStartNewGame: Element | null
): void {
  if (context) {
    if (arrField[x][y] === 9) {
      for (let k = 0; k < arrField.length; k += 1) {
        for (let l = 0; l < arrField.length; l += 1) {
          if (arrField[k][l] === 9 && arrCell[k][l] !== 1) {
            arrCell[k][l] = 10;
          }

          if (arrField[k][l] === 9 && arrCell[k][l] === 1) {
            arrCell[k][l] = 12;
          }
        }
      }
    }
  }

  openCell(sizeCell, context, arrField, arrCell);
  mineConstructor(context, x, y, 'red');
  deadSmile(btnStartNewGame);
}
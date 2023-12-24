import { openCell } from "./openCell";
import { openEmptyCells } from "./openEmptyCells";
import { mineConstructor } from "./mines";
import { mineExplosion } from "./mineExplosion";
import { timerId, startTimer, stopTimer } from "./changeTimer";

let gameStepCounter = 0;


export function clickToCanvas(
  event: MouseEvent,
  context: CanvasRenderingContext2D | null,
  arrField: number[][],
  arrCell: number[][],
  gameTimer: Element | null,
  boom: boolean
  ): void {
  let x = Math.floor(event.offsetX / 40);
  let y = Math.floor(event.offsetY / 40);

  arrCell[x][y] = 10;

  if (arrField[x][y] === 11) {
    openEmptyCells(arrField, arrCell, x, y);
  }

  openCell(context, arrField, arrCell);

  if (arrField[x][y] === 9) {
    mineExplosion(context, arrField, arrCell, x, y);

    openCell(context, arrField, arrCell);

    mineConstructor(context, x, y, 'red');
  }

  if (gameTimer) {
    if (!gameStepCounter) {
      startTimer(gameTimer);
    }

    if (boom) {
      stopTimer(timerId);
    }

    gameStepCounter += 1;
  }
}
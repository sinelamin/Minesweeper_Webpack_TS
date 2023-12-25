import { openCell } from "./openCell";
import { openEmptyCells } from "./openEmptyCells";
import { mineExplosion } from "./mineExplosion";
import { timerId, startTimer, stopTimer } from "./changeTimer";
import { gameStepCounter, resetGameStepCounter } from "./gameStepCounter";

export function clickToCanvas(
  event: MouseEvent,
  context: CanvasRenderingContext2D | null,
  btnStartNewGame: Element | null,
  arrField: number[][],
  arrCell: number[][],
  gameTimer: Element | null,
): void {
  let x = Math.floor(event.offsetX / 40);
  let y = Math.floor(event.offsetY / 40);

  arrCell[x][y] = 10;

  if (arrField[x][y] === 11) {
    openEmptyCells(arrField, arrCell, x, y);
  }

  if (!gameStepCounter) {
    startTimer(gameTimer);
  }

  openCell(context, arrField, arrCell);

  if (arrField[x][y] === 9) {
    mineExplosion(context, arrField, arrCell, x, y, btnStartNewGame);
    stopTimer(timerId);
    resetGameStepCounter();
  }
}
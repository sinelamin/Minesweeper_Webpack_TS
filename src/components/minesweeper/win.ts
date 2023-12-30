import { timerId, stopTimer } from "./changeTimer";
import { gameStepCounter } from "./gameStepCounter";
import { counterSeconds } from "./changeTimer";

const windowOfWin = document.createElement('div');
let counterOpenCells = 0;

windowOfWin.classList.add('minesweeper-windowOfWin');

export function checkOpenCell(arrCell: number[][], body: Element | null): void {
  let openCells = 0;

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (arrCell[i][j] === 10) {
        openCells += 1;
      }
    }
  }

  counterOpenCells = openCells;
  openCells = 0;

  getWin(body);
}

function getWin(body: Element | null): void {
  if (counterOpenCells === 90) {
    createWindowWin(body);
  }
}

function createWindowWin(body: Element | null): void {
  body?.classList.add('body-overlay');

  windowOfWin.innerHTML = `
    <h3 class="windowOfWin__title">You win!</h3>
    <p class="windowOfWin-moves">
      Number of moves:
      <span class="windowOfWin-moves__value">${gameStepCounter}</span>
    </p>
    <p class="windowOfWin-time">
      Time:
      <span class="windowOfWin-time__value">${counterSeconds}s</span>
    </p>
    <button class="btn_newGame">New Game</button>
  `;

  body?.append(windowOfWin);
  stopTimer(timerId);
}

export function removeWindowWin(body: Element | null): void {
  if (windowOfWin) {
    windowOfWin.remove();
    body?.classList.remove('body-overlay');
  }
}
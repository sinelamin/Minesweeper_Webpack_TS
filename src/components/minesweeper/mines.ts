import { getDifficultyLevel } from "./difficultyLevel";
import { getSizeCell, calcSizeFromPct } from "./sizeCell";
import { getRandomInt } from "./getRandomInt";

export function createMineList(arrField: number[][]): void {
  const difficultyLevel = getDifficultyLevel();
  let randomNumderX = 0;
  let randomNumderY = 0;

  if (difficultyLevel) {
    for (let i = 0; i < difficultyLevel[1]; i += 1) {
      randomNumderX = getRandomInt(0, difficultyLevel[0] - 1);
      randomNumderY = getRandomInt(0, difficultyLevel[0] - 1);

      if (arrField[randomNumderX][randomNumderY] !== 9) {
        arrField[randomNumderX][randomNumderY] = 9;
      } else {
        i -= 1;
      }
    }
  }
}

export function addMine(
  context: CanvasRenderingContext2D | null,
  arrField: number[][],
): void {
  if (context) {
    for (let i = 0; i < arrField.length; i += 1) {
      for (let j = 0; j < arrField.length; j += 1) {
        if (arrField[i][j] === 9) {
          mineConstructor(context, i, j, '#9c9c9c');
        }
      }
    }
  }
}

export function mineConstructor(
  context: CanvasRenderingContext2D | null,
  i: number,
  j: number,
  color: string
): void {
  const sizeCell = getSizeCell();

  if (context && sizeCell) {
    context.beginPath();
    context.fillStyle = color;
    context.fillRect(
      (i * sizeCell) + 1,
      (j * sizeCell) + 1,
      sizeCell - 2,
      sizeCell - 2
    );
    context.closePath();

    context.beginPath();
    context.fillStyle = '#000';
    context.strokeStyle = '#000';
    context.arc(
      (i * sizeCell) + calcSizeFromPct(55, sizeCell),
      (j * sizeCell) + calcSizeFromPct(55, sizeCell),
      sizeCell / 4, 0,
      Math.PI * 2
    );
    context.fill();
    context.stroke();
    context.closePath();

    context.beginPath();
    context.lineWidth = 2;
    context.moveTo(
      (i * sizeCell) + calcSizeFromPct(30, sizeCell),
      (j * sizeCell) + calcSizeFromPct(30, sizeCell)
    );
    context.lineTo(
      (i * sizeCell) + calcSizeFromPct(80, sizeCell),
      (j * sizeCell) + calcSizeFromPct(80, sizeCell)
    );
    context.stroke();
    context.moveTo(
      (i * sizeCell) + calcSizeFromPct(80, sizeCell),
      (j * sizeCell) + calcSizeFromPct(30, sizeCell)
    );
    context.lineTo(
      (i * sizeCell) + calcSizeFromPct(30, sizeCell),
      (j * sizeCell) + calcSizeFromPct(80, sizeCell)
    );
    context.stroke();
    context.closePath();

    context.beginPath();
    context.lineWidth = 3;
    context.moveTo(
      (i * sizeCell) + calcSizeFromPct(55, sizeCell),
      (j * sizeCell) + calcSizeFromPct(17, sizeCell)
    );
    context.lineTo(
      (i * sizeCell) + calcSizeFromPct(55, sizeCell),
      (j * sizeCell) + calcSizeFromPct(92.5, sizeCell)
    );
    context.stroke();
    context.moveTo(
      (i * sizeCell) + calcSizeFromPct(17, sizeCell),
      (j * sizeCell) + calcSizeFromPct(55, sizeCell)
    );
    context.lineTo(
      (i * sizeCell) + calcSizeFromPct(92.5, sizeCell),
      (j * sizeCell) + calcSizeFromPct(55, sizeCell)
    );
    context.stroke();
    context.closePath();

    context.beginPath();
    context.fillStyle = '#fff';
    context.strokeStyle = '#fff';
    context.arc(
      (i * sizeCell) + calcSizeFromPct(42.5, sizeCell),
      (j * sizeCell) + calcSizeFromPct(45, sizeCell),
      1,
      0,
      Math.PI * 2
    );
    context.fill();
    context.stroke();
    context.closePath();
  }
}

export function mineDeactive(
  context: CanvasRenderingContext2D | null,
  i: number,
  j: number
): void {
  const sizeCell = getSizeCell();

  if (context && sizeCell) {
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 1;
    context.moveTo(
      (i * sizeCell) + calcSizeFromPct(12.5, sizeCell),
      (j * sizeCell) + calcSizeFromPct(12.5, sizeCell)
    );
    context.lineTo(
      (i * sizeCell) + calcSizeFromPct(87.5, sizeCell),
      (j * sizeCell) + calcSizeFromPct(87.5, sizeCell)
    );
    context.moveTo(
      (i * sizeCell) + calcSizeFromPct(87.5, sizeCell),
      (j * sizeCell) + calcSizeFromPct(12.5, sizeCell)
    );
    context.lineTo(
      (i * sizeCell) + calcSizeFromPct(12.5, sizeCell),
      (j * sizeCell) + calcSizeFromPct(87.5, sizeCell)
    );
    context.stroke();
    context.closePath();
  }
}
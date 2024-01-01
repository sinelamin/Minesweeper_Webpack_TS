import { getDifficultyLevel } from "./difficultyLevel";
import { getSizeCell } from "./sizeCell";

const colorOfNumbers = [
  '#0000FF', // синяя
  '#008000', // зелёная
  '#FF0000', // красная
  '#00008B', // тёмно-синяя
  '#A52A2A', // коричневая
  '#40E0D0', // бирюзовая
  '#000000', // чёрная
  '#FFFFFF'  // белая
];

export function setNumberMines(context: CanvasRenderingContext2D | null, arrField: number[][]): void {
  const difficultyLevel = getDifficultyLevel();
  const sizeCell = getSizeCell();

  if (difficultyLevel) {
    for (let i = 0; i < difficultyLevel[0]; i += 1) {
      for (let j = 0; j < difficultyLevel[0]; j += 1) {
        if (context && sizeCell) {
          if (arrField[i][j] !== 9) {
            if (checkMine(arrField, i, j)) {
              context.beginPath();
              context.beginPath();
              context.fillStyle = '#9c9c9c';
              context.fillRect((i * sizeCell) + 1, (j * sizeCell) + 1, sizeCell - 2, sizeCell - 2);
              context.closePath();

              context.font = '20px serif';
              context.fillStyle = `${colorOfNumbers[checkMine(arrField, i, j) - 1]}`;
              context.textAlign = 'center';
              context.textBaseline = 'middle';
              context.fillText(`${checkMine(arrField, i, j)}`, (i * sizeCell) + (sizeCell / 2), (j * sizeCell) + (sizeCell / 2));
              context.closePath();

              arrField[i][j] = checkMine(arrField, i, j);
            } else {
              arrField[i][j] = 11;
            }

          }
        }
      }
    }
  }
}

function checkMine(arrField: number[][], i: number, j: number): number {
  let counter = 0;

  for (let k = -1; k < 2; k += 1) {
    for (let l = -1; l < 2; l += 1) {
      if (arrField[i + k]) {
        if (arrField[i + k][j + l] === 9) {
          counter += 1;
        }
      }
    }
  }

  return counter;
}
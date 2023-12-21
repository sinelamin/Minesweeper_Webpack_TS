const colorOfNumbers = [
  "#0000FF", // синяя
  "#008000", // зелёная
  "#FF0000", // красная
  "#00008B", // тёмно-синяя
  "#A52A2A", // коричневая
  "#40E0D0", // бирюзовая
  "#000000", // чёрная
  "#FFFFFF"  // белая
];

export function setNumberMines(context: CanvasRenderingContext2D | null, arrField: number[][]): void {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (context) {
        if (arrField[i][j] !== 9) {
          if (checkMine(arrField, i, j)) {
            context.beginPath();
            context.beginPath();
            context.fillStyle = "#b3b3b3";
            context.fillRect(i * 40, j * 40, 40, 40);
            context.closePath();
            
            context.font = '20px serif';
            context.fillStyle = `${colorOfNumbers[checkMine(arrField, i, j) - 1]}`;
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(`${checkMine(arrField, i, j)}`, (i * 40) + 20, (j * 40) + 20);
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

function checkMine(arrField: number[][], i: number, j: number): number {
  let counter = 0;

  for (let k = -1; k < 2; k += 1) {
    for (let l = -1; l < 2; l += 1) {
      if (arrField[i + k]) {
        if (arrField[i + k][j + l] === 9) {
          counter += 1
        }
      }
    }
  }

  return counter;
}
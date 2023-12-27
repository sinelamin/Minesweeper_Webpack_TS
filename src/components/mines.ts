export function createMineList(arrField: number[][]): void {
  let randomNumderX = 0;
  let randomNumderY = 0;

  for (let i = 0; i < 10; i += 1) {
    randomNumderX = getRandomInt(0, 10);
    randomNumderY = getRandomInt(0, 10);

    if (arrField[randomNumderX][randomNumderY] !== 9) {
      arrField[randomNumderX][randomNumderY] = 9;
    } else {
      i -= 1;
    }
  }
}

export function addMine(
  context: CanvasRenderingContext2D | null,
  arrField: number[][]
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
  if (context) {
    context.beginPath();
    context.fillStyle = color;
    context.fillRect((i * 40) + 1, (j * 40) + 1, 38, 38);
    context.closePath();

    context.beginPath();
    context.fillStyle = '#000';
    context.strokeStyle = '#000';
    context.arc((i * 40) + 22, (j * 40) + 22, 10, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.closePath();

    context.beginPath();
    context.lineWidth = 2;
    context.moveTo((i * 40) + 12, (j * 40) + 12);
    context.lineTo((i * 40) + 32, (j * 40) + 32);
    context.stroke();
    context.moveTo((i * 40) + 32, (j * 40) + 12);
    context.lineTo((i * 40) + 12, (j * 40) + 32);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.lineWidth = 3;
    context.moveTo((i * 40) + 22, (j * 40) + 7);
    context.lineTo((i * 40) + 22, (j * 40) + 37);
    context.stroke();
    context.moveTo((i * 40) + 7, (j * 40) + 22);
    context.lineTo((i * 40) + 37, (j * 40) + 22);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.fillStyle = '#fff';
    context.strokeStyle = '#fff';
    context.arc((i * 40) + 17, (j * 40) + 18, 1, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.closePath();
  }
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
export function createMine(arrField: number[][]): void {
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

export function addMine(context: CanvasRenderingContext2D | null, arrField: number[][]): void {
  if (context) {
    for (let i = 0; i < arrField.length; i += 1) {
      for (let j = 0; j < arrField.length; j += 1) {
        if (arrField[i][j] === 9) {
          context.beginPath();
          context.fillStyle = "#b3b3b3";
          context.fillRect(i * 40, j * 40, 40, 40);
          context.closePath();

          context.beginPath();
          context.fillStyle = "#000";
          context.strokeStyle = '#000';
          context.arc((i * 40) + 20, (j * 40) + 20, 10, 0, Math.PI * 2);
          context.fill();
          context.stroke();
          context.closePath();

          context.beginPath();
          context.lineWidth = 2;
          context.moveTo((i * 40) + 10, (j * 40) + 10);
          context.lineTo((i * 40) + 30, (j * 40) + 30);
          context.stroke();
          context.moveTo((i * 40) + 30, (j * 40) + 10);
          context.lineTo((i * 40) + 10, (j * 40) + 30);
          context.stroke();
          context.closePath();

          context.beginPath();
          context.lineWidth = 3;
          context.moveTo((i * 40) + 20, (j * 40) + 5);
          context.lineTo((i * 40) + 20, (j * 40) + 35);
          context.stroke();
          context.moveTo((i * 40) + 5, (j * 40) + 20);
          context.lineTo((i * 40) + 35, (j * 40) + 20);
          context.stroke();
          context.closePath();

          context.beginPath();
          context.fillStyle = "#fff";
          context.strokeStyle = '#fff';
          context.arc((i * 40) + 16, (j * 40) + 17, 1, 0, Math.PI * 2);
          context.fill();
          context.stroke();
          context.closePath();
        }
      }
    }
  }
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
import { colorOfNumbers } from "../minesweeper/colorOfNumber";

const sizeElem = 40;
const arrElem: number[][] = [];

export let animationId: NodeJS.Timeout;

createElemsForAnimation();

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createElemsForAnimation(): void {
  for (let i = 0; i < 45; i += 1) {
    const number = getRandomInt(1, 8);
    const sizeNumber = getRandomInt(32, 45);
    const x = getRandomInt(10, 990);
    const y = getRandomInt(200, 800);

    let vectorX;
    let vectorY;

    getRandomInt(0, 1) ? vectorX = 0.5 : vectorX = -0.5;
    getRandomInt(0, 1) ? vectorY = -0.5 : vectorY = 0.5;


    arrElem[i] = [sizeNumber, number, x, y, vectorX, vectorY];
  }
}

function addElemsForAnimation(
  context: CanvasRenderingContext2D | null,
  i: number
): void {
  if (context) {
    context.beginPath();
    context.font = `${arrElem[i][0]}px serif`;
    context.fillStyle = `${colorOfNumbers[arrElem[i][1] - 1]}`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(`${arrElem[i][1]}`, arrElem[i][2], arrElem[i][3]);
    context.closePath();
  }
}

function amimationElems(
  context: CanvasRenderingContext2D | null,
  arrElem: number[][],
  firstCanvasWidth: number,
  firstCanvasHeight: number
): void {
  if (context) {
    context.clearRect(0, 0, firstCanvasWidth, firstCanvasHeight);

    for (let i = 0; i < arrElem.length; i += 1) {
      if (sizeElem) {
        const distanceToEdgeX = firstCanvasWidth - arrElem[i][2];
        const distanceToEdgeY = firstCanvasHeight - arrElem[i][3];

        if (distanceToEdgeX === 10 || distanceToEdgeX === firstCanvasWidth - 10) {
          arrElem[i][4] = -arrElem[i][4];
          getRandomInt(0, 1) ? arrElem[i][5] = -0.5 : arrElem[i][5] = 0.5;
        }

        if (distanceToEdgeY === 50 || distanceToEdgeY === firstCanvasHeight - 50) {
          arrElem[i][5] = -arrElem[i][5];
          getRandomInt(0, 1) ? arrElem[i][4] = 0.5 : arrElem[i][4] = -0.5;
        }

        arrElem[i][2] = arrElem[i][2] + arrElem[i][4];
        arrElem[i][3] = arrElem[i][3] + arrElem[i][5];
        addElemsForAnimation(context, i);
      }
    }
  }
}

export function startAnimation(
  context: CanvasRenderingContext2D | null,
  firstCanvasWidth: number,
  firstCanvasHeight: number
): void {
  animationId = setInterval(() => {
    amimationElems(context, arrElem, firstCanvasWidth, firstCanvasHeight);
  }, 16.6)
}

export function stopAnimation(animationId: NodeJS.Timeout): void {
  clearInterval(animationId);
}
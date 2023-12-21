import { createInterface } from "../components/interface";

createInterface();

const canvas: HTMLCanvasElement | null = document.querySelector('.canvas');

if (canvas) {
  const ctx = canvas.getContext('2d');

  if (ctx) {
    let playingField: number[][] = [];

    createPlayingArr(playingField);
    createPlayingField(ctx, playingField);

    console.log(playingField);

    createPlayingCell(ctx, playingField);

    canvas.addEventListener('click', (e) => {
      console.log('clientX ', e.offsetX);
      console.log('pageX ', e.offsetY);
      let x = Math.floor(e.offsetX / 40);
      let y = Math.floor(e.offsetY / 40);
      console.log('X ', x);
      console.log('Y', y);

      playingField[x][y] = 10;
      console.log(playingField);
    })
  }
}

function createPlayingField(context: CanvasRenderingContext2D | null, arr: number[][]): void {
  if (context) {
    for (let i = 0; i < arr.length; i += 1) {
      for (let j = 0; j < arr.length; j += 1) {
        if (arr[i][j] === 0) {
          context.beginPath();
          context.fillStyle = "#b3b3b3";
          context.fillRect(i * 40, j * 40, 40, 40);
          context.closePath();
        }
      }
    }
  }
}

function createPlayingCell(context: CanvasRenderingContext2D | null, arr: number[][]): void {
  if (context) {
    for (let i = 0; i < arr.length; i += 1) {
      for (let j = 0; j < arr.length; j += 1) {
        if (!arr[i][j]) {
          context.beginPath();
          context.fillStyle = "#b3b3b3";
          context.strokeStyle = '#fff';
          context.fillRect(i * 40, j * 40, 40, 40);
          context.strokeRect(i * 40, j * 40, 40, 40);
          context.closePath();
        }
      }
    }
  }
}

function createPlayingArr(arr: number[][]): void {
  for (let i = 0; i < 10; i += 1) {
    arr[i] = [];
    for (let j = 0; j < 10; j += 1) {
      arr[i][j] = 0;
    }
  }
}

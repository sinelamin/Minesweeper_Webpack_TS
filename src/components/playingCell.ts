import { addFlag, counterFlags } from "./Flags";

export function createPlayingCell(context: CanvasRenderingContext2D | null, arrCell: number[][]): void {
  if (context) {
    for (let i = 0; i < arrCell.length; i += 1) {
      for (let j = 0; j < arrCell.length; j += 1) {
        if (arrCell[i][j] === 0) {
          context.beginPath();
          context.fillStyle = '#8f8f8f';
          context.strokeStyle = '#fff';
          context.lineWidth = 2;
          context.fillRect((i * 40) + 1, (j * 40) + 1, 38, 38);
          context.strokeRect((i * 40) + 1, (j * 40) + 1, 38, 38);
          context.closePath();
        }

        if (arrCell[i][j] === 1) {
          addFlag(context, arrCell, i, j);
          console.log('addFlag work!');
        }
      }
    }
  }
}
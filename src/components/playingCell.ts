export function createPlayingCell(context: CanvasRenderingContext2D | null, arrCell: number[][]): void {
  if (context) {
    for (let i = 0; i < arrCell.length; i += 1) {
      for (let j = 0; j < arrCell.length; j += 1) {
        if (arrCell[i][j] === 0) {
          context.beginPath();
          context.fillStyle = "#8f8f8f";
          context.strokeStyle = '#fff';
          context.fillRect(i * 40, j * 40, 40, 40);
          context.strokeRect(i * 40, j * 40, 40, 40);
          context.closePath();
        }
      }
    }
  }
}
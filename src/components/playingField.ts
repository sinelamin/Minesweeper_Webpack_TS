export function createPlayingField(context: CanvasRenderingContext2D | null, arrField: number[][]): void {
  if (context) {
    for (let i = 0; i < arrField.length; i += 1) {
      for (let j = 0; j < arrField.length; j += 1) {
        if (arrField[i][j] === 11) {
          context.beginPath();
          context.fillStyle = '#9c9c9c';
          context.fillRect((i * 40) + 2, (j * 40) + 2, 38, 38);
          context.closePath();
        }
      }
    }
  }
}
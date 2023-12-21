export function createPlayingField(context: CanvasRenderingContext2D | null, arrField: number[][]): void {
  if (context) {
    for (let i = 0; i < arrField.length; i += 1) {
      for (let j = 0; j < arrField.length; j += 1) {
        if (arrField[i][j] === 0) {
          context.beginPath();
          context.fillStyle = "#b3b3b3";
          context.fillRect(i * 40, j * 40, 40, 40);
          context.closePath();
        }
      }
    }
  }
}
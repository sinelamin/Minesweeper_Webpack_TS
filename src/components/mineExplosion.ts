export function mineExplosion(
  context: CanvasRenderingContext2D | null,
  arrField: number[][],
  arrCell: number[][],
  x: number,
  y: number
  ): void {
  if (context) {
    if (arrField[x][y] === 9) {
      for (let k = 0; k < 10; k += 1) {
        for (let l = 0; l < 10; l += 1) {
          if (arrField[k][l] === 9) {
            arrCell[k][l] = 10;
          }
        }
      }
    }
  }
}
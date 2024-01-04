export function openEmptyCells(
  arrField: number[][],
  arrCell: number[][],
  x: number,
  y: number
): void {
  if (arrField[x][y] === 11) {
    checkEmptyNeighbors(arrField, arrCell, x, y);
  }
}

function checkEmptyNeighbors(
  arrField: number[][],
  arrCell: number[][],
  x: number,
  y: number
): void {
  for (let k = -1; k < 2; k += 1) {
    for (let l = -1; l < 2; l += 1) {
      if (arrField[x + k]) {
        if (arrCell[x + k][y] !== 1) {
          if (
            arrField[x + k][y] === 11 &&
            arrCell[x + k][y] !== 10 &&
            arrCell[x + k][y] !== 1
          ) {
            arrCell[x + k][y] = 10;
            checkEmptyNeighbors(arrField, arrCell, x + k, y);
          }

          if (
            arrField[x + k][y] !== 11 &&
            arrField[x + k][y] !== 9 &&
            arrCell[x + k][y] !== 10
          ) {
            arrCell[x + k][y] = 10;
          }
        }

        if (arrCell[x][y + l] !== 1) {
          if (
            arrField[x][y + l] === 11 &&
            arrCell[x][y + l] !== 10 &&
            arrCell[x][y + l] !== 1
          ) {
            arrCell[x][y + l] = 10;
            checkEmptyNeighbors(arrField, arrCell, x, y + l);
          }

          if (
            arrField[x][y + l] !== 11 &&
            arrField[x][y + l] !== 9 &&
            arrCell[x][y + l] !== 10
          ) {
            arrCell[x][y + l] = 10;
          }
        }
      }
    }
  }
}
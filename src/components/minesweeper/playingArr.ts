export function createPlayingArr(arr: number[][]): void {
  for (let i = 0; i < 10; i += 1) {
    arr[i] = [];
    for (let j = 0; j < 10; j += 1) {
      arr[i][j] = 0;
    }
  }
}
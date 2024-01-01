import { getDifficultyLevel } from "./difficultyLevel";

export function createPlayingArr(
  arr: number[][]
): void {
  const difficultyLevel = getDifficultyLevel();

  if (difficultyLevel) {
    for (let i = 0; i < difficultyLevel[0]; i += 1) {
      arr[i] = [];
      for (let j = 0; j < difficultyLevel[0]; j += 1) {
        arr[i][j] = 0;
      }
    }
  }
}
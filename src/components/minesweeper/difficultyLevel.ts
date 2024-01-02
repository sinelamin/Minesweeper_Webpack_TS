import { difficulty } from "../../pages/startMenu/startMenu";

export function getDifficultyLevel(): number[] | undefined {
  interface DifficultyObject {
    [key: string]: number[];
  }
  

  const difficultyObj: DifficultyObject = {
    easy: [10, 10],
    normal: [15, 40],
    hard: [25, 99],
  }
  for (let key in difficultyObj) {
    if (localStorage.getItem('difficulty')) {
      if (key === localStorage.getItem('difficulty')) {
        return difficultyObj[key];
      }
    } else {
      if (key === difficulty) {
        return difficultyObj[key];
      }
    }
  }

  return undefined;
}
import { createPlayingField } from "./playingField";
import { createPlayingCell } from "./playingCell";
import { addMine } from "./mines";
import { setNumberMines } from "./setNumberMines";
import { upGameStepCounter } from "./gameStepCounter";
import { getDifficultyLevel } from "./difficultyLevel";

export function openCell(
  sizeCell: number,
  context: CanvasRenderingContext2D | null,
  arrField: number[][],
  arrCell: number[][]
  ): void {
    const difficultyLevel = getDifficultyLevel();

  if (context && difficultyLevel) {
    const widthField = (difficultyLevel[0] * sizeCell);
    const heightField = widthField;

    context.clearRect(0, 0, widthField, heightField);
    createPlayingField(context, arrField);
    addMine(context, arrField);
    setNumberMines(context, arrField);
    createPlayingCell(context, arrCell);
    upGameStepCounter();
  }
}
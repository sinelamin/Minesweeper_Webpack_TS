import { createPlayingField } from "./playingField";
import { createPlayingCell } from "./playingCell";
import { addMine } from "./mines";
import { setNumberMines } from "./setNumberMines";

export function openCell(
  context: CanvasRenderingContext2D | null,
  arrField: number[][],
  arrCell: number[][]
  ): void {
  if (context) {
    context.clearRect(0, 0, 400, 400);
    createPlayingField(context, arrField);
    addMine(context, arrField);
    setNumberMines(context, arrField);
    createPlayingCell(context, arrCell);
  }
}
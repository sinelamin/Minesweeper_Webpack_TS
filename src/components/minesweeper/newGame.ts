import { createPlayingArr } from "./playingArr";
import { createPlayingField } from "./playingField";
import { createPlayingCell } from "./playingCell";
import { createMineList, addMine } from "./mines";
import { setNumberMines, clearNumberMines } from "./setNumberMines";
import { happySmile } from "./changeSmile";

export function newGame(
  context: CanvasRenderingContext2D | null,
  btnStartNewGame: Element | null,
  arrField: number[][],
  arrCell: number[][]
) {
  createPlayingArr(arrField);
  createPlayingArr(arrCell);

  happySmile(btnStartNewGame);

  createPlayingField(context, arrField);
  createMineList(arrField);

  clearNumberMines(context, arrField);
  setNumberMines(context, arrField)

  addMine(context, arrField);

  createPlayingCell(context, arrCell);
}
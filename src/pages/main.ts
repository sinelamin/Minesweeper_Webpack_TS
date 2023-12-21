import { createInterface } from "../components/interface";
import { createPlayingArr } from "../components/playingArr";
import { createPlayingField } from "../components/playingField";
import { createPlayingCell } from "../components/playingCell";
import { createMine, addMine } from "../components/mines";
import { setNumberMines } from "../components/setNumberMines";
import { openEmptyCells } from "../components/openEmptyCells";
import { openCell } from "../components/openCell";

createInterface();

const canvas: HTMLCanvasElement | null = document.querySelector('.canvas');

if (canvas) {
  const ctx = canvas.getContext('2d');

  if (ctx) {
    let playingField: number[][] = [];
    let playingCell: number[][] = [];

    createPlayingArr(playingField);
    createPlayingArr(playingCell);

    createPlayingField(ctx, playingField);

    createMine(playingField);

    setNumberMines(ctx, playingField)

    addMine(ctx, playingField);

    createPlayingCell(ctx, playingCell);

    canvas.addEventListener('click', (e) => {
      let x = Math.floor(e.offsetX / 40);
      let y = Math.floor(e.offsetY / 40);

      playingCell[x][y] = 10;

      if (playingField[x][y] === 11) {
        openEmptyCells(playingField, playingCell, x, y);
      }


      openCell(ctx, playingField, playingCell);
      console.log('playingCell', playingCell);
    })

    console.log('playingField', playingField);
    console.log('playingCell', playingCell);
  }
}


//      (Y) (Y) (Y) (Y) (Y) (Y) (Y) (Y) (Y) (Y)
// (X) [01, 09, 09, 02, 01, 01, 11, 11, 11, 11]
// (X) [01, 02, 02, 02, 09, 02, 01, 01, 11, 11]
// (X) [11, 11, 11, 01, 01, 02, 09, 01, 11, 11]
// (X) [11, 11, 11, 11, 11, 01, 01, 01, 01, 01]
// (X) [01, 01, 11, 11, 11, 11, 11, 01, 02, 09]
// (X) [09, 01, 11, 11, 11, 11, 11, 01, 09, 02]
// (X) [01, 01, 11, 11, 11, 01, 01, 02, 01, 01]
// (X) [11, 11, 11, 01, 01, 02, 09, 01, 11, 11]
// (X) [11, 11, 11, 02, 09, 03, 01, 01, 11, 11]
// (X) [11, 11, 11, 02, 09, 02, 11, 11, 11, 11]
import { createInterface } from "../components/interface";
import { clickToCanvas } from "../components/clickToCanvas";
import { createPlayingArr } from "../components/playingArr";
import { createPlayingField } from "../components/playingField";
import { createPlayingCell } from "../components/playingCell";
import { createMineList, addMine } from "../components/mines";
import { setNumberMines } from "../components/setNumberMines";

createInterface();

const canvas: HTMLCanvasElement | null = document.querySelector('.canvas');
const gameTimer = document.querySelector('.interface-two__timer');

if (canvas) {
  const ctx = canvas.getContext('2d');

  if (ctx) {
    let playingField: number[][] = [];
    let playingCell: number[][] = [];

    createPlayingArr(playingField);
    createPlayingArr(playingCell);

    createPlayingField(ctx, playingField);

    createMineList(playingField);

    setNumberMines(ctx, playingField)

    addMine(ctx, playingField);

    createPlayingCell(ctx, playingCell);

    const clickToHandler = (event: MouseEvent) => {
      let x = Math.floor(event.offsetX / 40);
      let y = Math.floor(event.offsetY / 40);
      let boom = false;
      
      if (playingField[x][y] === 9) {
        canvas.removeEventListener('click', clickToHandler);
        boom = true;
      }

      clickToCanvas(event, ctx, playingField, playingCell, gameTimer, boom);
    }

    canvas.addEventListener('click', clickToHandler);
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
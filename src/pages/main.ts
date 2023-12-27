import { createInterface } from "../components/interface";
import { newGame } from "../components/newGame";
import { timerId, stopTimer } from "../components/changeTimer";
import { resetGameStepCounter } from "../components/gameStepCounter";
import { worriedSmile, happySmile } from "../components/changeSmile";
import { clickToCanvas } from "../components/clickToCanvas";
import { addFlag, removeFlag } from "../components/Flags";

createInterface();

const canvas: HTMLCanvasElement | null = document.querySelector('.canvas');
const gameTimer = document.querySelector('.interface-two__timer');
const flags = document.querySelector('.interface-one__flags');
const btnStartNewGame = document.querySelector('.interface-one__smile');

if (canvas) {
  const ctx = canvas.getContext('2d');

  if (ctx) {
    let playingField: number[][] = [];
    let playingCell: number[][] = [];

    newGame(ctx, btnStartNewGame, playingField, playingCell);

    const clickToWorriedSmile = () => {
      worriedSmile(btnStartNewGame);
    }

    const clickToHappySmile = () => {
      happySmile(btnStartNewGame);
    }

    const clickToHandler = (event: MouseEvent) => {
      event.preventDefault();
      
      let x = Math.floor(event.offsetX / 40);
      let y = Math.floor(event.offsetY / 40);

      if (event.type === 'contextmenu') {

        if (playingCell[x][y] !== 10) {
          if (playingCell[x][y] !== 1) {
            // addFlag(ctx, playingCell, x, y, flags);
            addFlag(ctx, playingCell, x, y);
          } else {
            // removeFlag(ctx, playingCell, x, y, flags);
            removeFlag(ctx, playingCell, x, y);
          }
        }
      }

      if (event.type === 'click') {
        if (playingField[x][y] === 9) {
          canvas.removeEventListener('click', clickToHandler);
          canvas.removeEventListener('mousedown', clickToWorriedSmile);
          canvas.removeEventListener('mouseup', clickToHappySmile);
        }

        clickToCanvas(event, ctx, btnStartNewGame, playingField, playingCell, x, y, gameTimer);
      }

      console.log('playingCell', playingCell);
      console.log('playingField', playingField);
    }

    canvas.addEventListener('click', clickToHandler);
    canvas.addEventListener('mousedown', clickToWorriedSmile);
    canvas.addEventListener('mouseup', clickToHappySmile);

    canvas.addEventListener('contextmenu', clickToHandler);

    if (btnStartNewGame && gameTimer) {
      btnStartNewGame.addEventListener('click', () => {
        resetGameStepCounter();
        newGame(ctx, btnStartNewGame, playingField, playingCell);
        stopTimer(timerId);

        canvas.addEventListener('click', clickToHandler);
        canvas.addEventListener('mousedown', clickToWorriedSmile);
        canvas.addEventListener('mouseup', clickToHappySmile);

        gameTimer.textContent = '000';
      })
    }
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
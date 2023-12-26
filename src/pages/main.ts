import { createInterface } from "../components/interface";
import { newGame } from "../components/newGame";
import { timerId, stopTimer } from "../components/changeTimer";
import { resetGameStepCounter } from "../components/gameStepCounter";
import { worriedSmile, happySmile } from "../components/changeSmile";
import { clickToCanvas } from "../components/clickToCanvas";

createInterface();

const canvas: HTMLCanvasElement | null = document.querySelector('.canvas');
const gameTimer = document.querySelector('.interface-two__timer');
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
      let x = Math.floor(event.offsetX / 40);
      let y = Math.floor(event.offsetY / 40);

      if (playingField[x][y] === 9) {
        canvas.removeEventListener('click', clickToHandler);
        canvas.removeEventListener('mousedown', clickToWorriedSmile);
        canvas.removeEventListener('mouseup', clickToHappySmile);
      }

      clickToCanvas(event, ctx, btnStartNewGame, playingField, playingCell, gameTimer);
    }

    canvas.addEventListener('click', clickToHandler);
    canvas.addEventListener('mousedown', clickToWorriedSmile);
    canvas.addEventListener('mouseup', clickToHappySmile);

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
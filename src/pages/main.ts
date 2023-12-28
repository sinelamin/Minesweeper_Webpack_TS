import { createInterface } from "../components/interface";
import { newGame } from "../components/newGame";
import { timerId, stopTimer } from "../components/changeTimer";
import { resetGameStepCounter } from "../components/gameStepCounter";
import { worriedSmile, happySmile } from "../components/changeSmile";
import { clickToCanvas } from "../components/clickToCanvas";
import { addFlag, removeFlag, resetFlags } from "../components/Flags";
import { checkOpenCell, removeWindowWin } from "../components/win";

const body = document.querySelector('body');


createInterface(body);

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
      let x = Math.floor(event.offsetX / 40);
      let y = Math.floor(event.offsetY / 40);

      if (event.type === 'contextmenu') {
        event.preventDefault();

        if (playingCell[x][y] !== 10) {
          if (playingCell[x][y] !== 1) {
            addFlag(ctx, playingCell, x, y, flags);
          } else {
            removeFlag(ctx, playingCell, x, y, flags);
          }
        }
      }

      if (event.type === 'click') {
        if (playingField[x][y] === 9) {
          canvas.removeEventListener('click', clickToHandler);
          canvas.removeEventListener('mousedown', clickToWorriedSmile);
          canvas.removeEventListener('mouseup', clickToHappySmile);
          canvas.removeEventListener('contextmenu', clickToHandler);
        }

        clickToCanvas(ctx, btnStartNewGame, playingField, playingCell, x, y, gameTimer);
        checkOpenCell(playingCell, body);
      }
    }

    canvas.addEventListener('click', clickToHandler);
    canvas.addEventListener('mousedown', clickToWorriedSmile);
    canvas.addEventListener('mouseup', clickToHappySmile);
    canvas.addEventListener('contextmenu', clickToHandler);

    if (btnStartNewGame && gameTimer) {
      btnStartNewGame.addEventListener('click', () => {
        resetGame(
          canvas,
          ctx,
          btnStartNewGame,
          playingField,
          playingCell,
          gameTimer,
          clickToHandler,
          clickToWorriedSmile,
          clickToHappySmile
        );
      })
    }

    if (body && gameTimer) {
      body.addEventListener('click', (event) => {
        const targetElement = event.target as HTMLElement

        if (targetElement.classList.contains('btn_newGame')) {
          resetGame(
            canvas,
            ctx,
            btnStartNewGame,
            playingField,
            playingCell,
            gameTimer,
            clickToHandler,
            clickToWorriedSmile,
            clickToHappySmile
          );
          removeWindowWin(body);
        }
      })
    }
  }
}

function resetGame(
  canvas: HTMLCanvasElement | null,
  context: CanvasRenderingContext2D | null,
  btnStartNewGame: Element | null,
  arrField: number[][],
  arrCell: number[][],
  gameTimer: Element | null,
  clickToHandler: (event: MouseEvent) => void,
  clickToWorriedSmile: () => void,
  clickToHappySmile: () => void
): void {
  if (canvas && gameTimer) {
    resetGameStepCounter();
    newGame(context, btnStartNewGame, arrField, arrCell);
    stopTimer(timerId);
    resetFlags(flags);

    canvas.addEventListener('click', clickToHandler);
    canvas.addEventListener('mousedown', clickToWorriedSmile);
    canvas.addEventListener('mouseup', clickToHappySmile);
    canvas.addEventListener('contextmenu', clickToHandler);

    gameTimer.textContent = '000';
    console.log('reset Game');
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
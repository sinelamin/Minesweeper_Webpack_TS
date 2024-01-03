import { createGameInterface } from "../../components/minesweeper/gameInterface";
import { newGame } from "../../components/minesweeper/newGame";
import { timerId, stopTimer, resetTimer } from "../../components/minesweeper/changeTimer";
import { resetGameStepCounter } from "../../components/minesweeper/gameStepCounter";
import { worriedSmile, happySmile } from "../../components/minesweeper/changeSmile";
import { clickToCanvas } from "../../components/minesweeper/clickToCanvas";
import { addFlag, removeFlag, resetFlags } from "../../components/minesweeper/Flags";
import { checkOpenCell, removeWindowWin } from "../../components/minesweeper/win";
import { getDifficultyLevel } from "../../components/minesweeper/difficultyLevel";
import { getSizeCell } from "../../components/minesweeper/sizeCell";
import { animationId, stopAnimation } from "../../components/startMenu/animationForCanvasElem";

// (easy: 10x10 - 10 mine, medium: 15x15 - 45 mine, hard: 25x25 - 99 mine)

export function minesweeperPage() {
  const body = document.querySelector('body');

  createGameInterface(body);
  stopAnimation(animationId);

  const canvas: HTMLCanvasElement | null = document.querySelector('.canvas');
  const gameTimer = document.querySelector('.interface-two__timer');
  const flags = document.querySelector('.interface-one__flags');
  const btnStartNewGame = document.querySelector('.interface-one__smile');
  const interfaceBody = document.querySelector('.interface-body');

  const canvasElem = canvas as HTMLCanvasElement;
  const interfaceBodyElem = interfaceBody as HTMLElement;
  const difficultyLevel = getDifficultyLevel();
  const sizeCell = getSizeCell();

  let counterFlags = 10;
  let countMins = 10;

  if (difficultyLevel && sizeCell) {
    canvasElem.width = difficultyLevel[0] * sizeCell;
    canvasElem.height = difficultyLevel[0] * sizeCell;
    canvasElem.style.width = `${difficultyLevel[0] * sizeCell}px`;
    canvasElem.style.height = `${difficultyLevel[0] * sizeCell}px`;

    interfaceBodyElem.style.height = `${(difficultyLevel[0] * sizeCell) + 7}px`;

    countMins = difficultyLevel[1];
    counterFlags = countMins;
  }

  if (canvas && sizeCell) {
    const ctx = canvas.getContext('2d');

    if (ctx) {
      let playingField: number[][] = [];
      let playingCell: number[][] = [];

      newGame(ctx, btnStartNewGame, playingField, playingCell);
      resetFlags(countMins, flags); // **

      const clickToWorriedSmile = () => {
        worriedSmile(btnStartNewGame);
      }

      const clickToHappySmile = () => {
        happySmile(btnStartNewGame);
      }

      const clickToHandler = (event: MouseEvent) => {
        let x = Math.floor(event.offsetX / sizeCell);
        let y = Math.floor(event.offsetY / sizeCell);

        if (event.type === 'contextmenu') {
          event.preventDefault();

          if (playingCell[x][y] !== 10) {
            if (playingCell[x][y] !== 1) {
              if (counterFlags > 0) {
                counterFlags -= 1;
                addFlag(counterFlags, ctx, playingCell, x, y, flags); //***
              }
            } else {
              if (counterFlags < countMins) {
                counterFlags += 1;
                removeFlag(counterFlags, ctx, playingCell, x, y, flags);
              }
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

          clickToCanvas(
            sizeCell,
            ctx,
            btnStartNewGame,
            playingField,
            playingCell,
            x,
            y,
            gameTimer
          );
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
      resetFlags(countMins, flags); // **

      canvas.addEventListener('click', clickToHandler);
      canvas.addEventListener('mousedown', clickToWorriedSmile);
      canvas.addEventListener('mouseup', clickToHappySmile);
      canvas.addEventListener('contextmenu', clickToHandler);

      resetTimer(gameTimer);
    }
  }
}
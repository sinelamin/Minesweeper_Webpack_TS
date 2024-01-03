import { addStartMenu } from "../../components/startMenu/addStartMenu";
import { activOptions, addOptions, removeOptions } from "../../components/startMenu/menuOptions";
import { activAboutApp, addAbout, removeAbout } from "../../components/startMenu/menuAboutApp";
import { setFirstCanvasWidth } from "../../components/startMenu/setFirstCanvasWidth";
import { startAnimation } from "../../components/startMenu/createElemsForAnimation";

export let difficulty: string = 'easy';

export function startPage() {
  const body = document.querySelector('body');

  addStartMenu(body);

  const firstCanvas = document.querySelector('.canvas-first') as HTMLCanvasElement;

  setFirstCanvasWidth(firstCanvas);

  if (firstCanvas) {
    const ctx = firstCanvas.getContext('2d');
    const firstCanvasWidth = firstCanvas.width;
    const firstCanvasHeight = firstCanvas.height;

    startAnimation(ctx, firstCanvasWidth, firstCanvasHeight);
  }

  const startMinesweeperPage = document.querySelector('.minesweeper-start');
  const options = document.querySelector('.menu-options');
  const aboutApp = document.querySelector('.menu-about');

  options?.addEventListener('click', () => {
    addOptions(startMinesweeperPage, body);

    const difficultyElem = document.querySelectorAll('.options-list__radio');

    difficultyElem.forEach(item => {
      const itemElement = item as HTMLInputElement;

      if (itemElement.checked) {
        itemElement.checked = false;
      }

      if (localStorage.getItem('difficulty')) {
        if (itemElement.value === localStorage.getItem('difficulty')) {
          itemElement.checked = true;
        }
      } else {
        console.log(difficulty);
        if (itemElement.value === difficulty) {
          itemElement.checked = true;
        }
      }
    })
  });

  aboutApp?.addEventListener('click', () => {
    addAbout(startMinesweeperPage, body);
  });

  body?.addEventListener('click', (e) => {
    const targetElem = e.target as HTMLElement;

    if (
      targetElem.classList.contains('minesweeper-close') ||
      targetElem.classList.contains('line__one') ||
      targetElem.classList.contains('line__two')
    ) {
      removeOptions(activOptions, body);
      removeAbout(activAboutApp, body);
    }

    if (targetElem.classList.contains('options-list__radio')) {
      const inputElement = targetElem as HTMLInputElement;
      difficulty = inputElement.value;
      localStorage.setItem('difficulty', difficulty);
    }
  })
}
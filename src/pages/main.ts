import { startPage } from './startMenu/startMenu';
import { minesweeperPage } from './minesweeperPage/minesweeper';

import page from 'page';

const home = () => {
  startPage();
};

const minesweeper = () => {
  minesweeperPage();
};

// Определение маршрутов
page('/', home);
page('/minesweeper', minesweeper);

// // Запуск page.js
page();
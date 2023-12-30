import { startPage } from './startMenu/startMenu';
import { minesweeperPage } from './minesweeperPage/minesweeper'; 

import page from 'page';

const home = () => {
  startPage();
  window.addEventListener('resize', () => {
    location.reload(); // обновлние страницы для динамической адаптивности
  });
};

const minesweeper = () => {
  minesweeperPage();
  window.addEventListener('resize', () => {
    location.reload();
  });
};

// Определение маршрутов
page('/', home);
page('/minesweeper', minesweeper);

// // Запуск page.js
page();
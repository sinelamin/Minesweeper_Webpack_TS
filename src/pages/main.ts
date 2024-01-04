import { startPage } from './startMenu/startMenu';
import { minesweeperPage } from './minesweeperPage/minesweeper';

import page from 'page';

// Определение маршрутов
page('/', startPage);
page('/minesweeper', minesweeperPage);

// // Запуск page.js
page();
const img = require('../../img/mineswepper_start_mine.png');

export function addStartMenu(body: Element | null): void {
  if (body) {
    body.innerHTML = `
    <div class="container">
      <div class="minesweeper-start">
        <div class="minesweeper-top">
          <h1 class="minesweeper-start__title">
            Mine
            <span class="minesweeper-start__subtitle">Sweeper</span>
          </h1>
          <img class="minesweeper-start__img" src="${img}" alt="mine">
          <img class="minesweeper-start__img img__two" src="${img}" alt="mine">
          <img class="minesweeper-start__img img__tree" src="${img}" alt="mine">
        </div>
        <nav class="minesweeper-menu">
          <ul class="menu-list">
            <a class="menu-list__link" href="/minesweeper">
              <li class="menu-list__item">New Game</li>
            </a>
            <li class="menu-list__item menu-options">Options</li>
            <li class="menu-list__item menu-about">About app</li>
          </ul>
        </nav>
      </div>
    </div>
  `;
  }
}
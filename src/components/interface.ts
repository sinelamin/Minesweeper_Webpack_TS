export function createInterface() {
  const body = document.querySelector('body');


  const container = document.createElement('div');
  container.classList.add('container');

  if (body) {
    container.innerHTML = `
      <div class="minesweeper-top">
        <nav class="menu">
          <ul class="menu-list">
            <li class="menu-list__item">Game</li>
            <li class="menu-list__item">Options</li>
            <li class="menu-list__item">Help</li>
          </ul>
        </nav>
      </div>

      <div class="interface">
        <div class="interface-top">
          <ul class="interface-list">
            <li class="interface-list__item">010</li>
            <li class="interface-list__item">
              <div class="smile">&#128578;</div>
            </li>
            <li class="interface-list__item">000</li>
          </ul>
        </div>
        <div class="interface-body">
          <canvas class="canvas" width="400" height="400"></canvas>
        </div>
      </div>
  `;

    body.append(container);
  }
}
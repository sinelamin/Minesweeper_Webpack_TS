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
          <div class="interface-inform">
            <div class="interface-one">
              <div class="interface-one__flags">010</div>
              <div class="interface-one__smile">&#128578;</div>
            </div>
            <div class="interface-two">
              <div class="interface-two__timer">000</div>
            </div>
          </div>
        </div>
        <div class="interface-body">
          <canvas class="canvas" width="400" height="400"></canvas>
        </div>
      </div>
  `;

    body.append(container);
  }
}
const arrowImg = require('../../img/img_arrow_back.png');

export function createGameInterface(body: Element | null): void {

  if (body) {
    body.innerHTML = `
    <div class="container">
      <a class="minesweeper-link" href="/">
        <img class="minesweeper-link__img" src="${arrowImg}" alt="arrow for back to starting menu">
        <span class="minesweeper-link__text">Back to menu</span>
      </a>
      <div class="minesweeper-game">
        <div class="interface">
          <div class="interface-top">
            <div class="interface-inform">
              <div class="interface-one">
                <div class="interface-one__flags">010</div>
                <div class="interface-one__smile"></div>
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
      </div>
    </div>
  `;
  }
}
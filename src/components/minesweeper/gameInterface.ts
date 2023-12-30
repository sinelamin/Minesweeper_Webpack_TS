export function createGameInterface(body: Element | null): void {

  if (body) {
    body.innerHTML = `
    <div class="container">
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
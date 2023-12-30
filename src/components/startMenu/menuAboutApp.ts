export const activAboutApp = document.createElement('div');
activAboutApp.classList.add('minesweeper-about');

export function addAbout(
  startMinesweeperPage: Element | null,
  body: HTMLBodyElement | null
): void {
  if (startMinesweeperPage) {
    activAboutApp.innerHTML = `
    <h3 class="about-title">About App</h3>
    <p class="about-descr">
      My name is Aleksey, i develop this app. This app is created with Webpack and TypeScript, also I learned how to use canvas. I am genius ;)
    </p>
    <button class="minesweeper-close about__close">
      <span class="minesweeper-close__line line__one"></span>
      <span class="minesweeper-close__line line__two"></span>
    </button>
  `
    startMinesweeperPage.append(activAboutApp);
  }

  body?.classList.add('body-overlay');
}

export function removeAbout(
  activOptions: Element | null,
  body: HTMLBodyElement | null
): void {
  activOptions?.remove();
  body?.classList.remove('body-overlay');
}
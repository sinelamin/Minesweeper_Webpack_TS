export const activOptions = document.createElement('div');
activOptions.classList.add('minesweeper-options');

export function addOptions(
  startMinesweeperPage: Element | null,
  body: HTMLBodyElement | null
): void {
  if (startMinesweeperPage) {
    activOptions.innerHTML = `
      <h3 class="options-title">Difficulty level</h3>
      <div class="options-list">
        <label class="options-list__label">
          <span class="options-list__title">Easy</span>
          <input class="options-list__radio" type="radio" name="difficulty" value="easy" id="easy" checked>
          <span class="radio-custom">
            <span class="radio-custom__dot"></span>
          </span>
        </label>
        <label class="options-list__label">
          <span class="options-list__title">Normal</span>
          <input class="options-list__radio" type="radio" name="difficulty" value="normal" id="normal">
          <span class="radio-custom">
            <span class="radio-custom__dot"></span>
          </span>
        </label>
        <label class="options-list__label">
          <span class="options-list__title">Hard</span>
          <input class="options-list__radio" type="radio" name="difficulty" value="hard" id="hard">
          <span class="radio-custom">
            <span class="radio-custom__dot"></span>
          </span>
        </label>
      </div>
      <button class="minesweeper-close">
        <span class="minesweeper-close__line line__one"></span>
        <span class="minesweeper-close__line line__two"></span>
      </button>
  `
    startMinesweeperPage.append(activOptions);
  }

  body?.classList.add('body-overlay');
}

export function removeOptions(
  activOptions: Element | null,
  body: HTMLBodyElement | null
): void {
  activOptions?.remove();
  body?.classList.remove('body-overlay');
}
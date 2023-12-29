

const body = document.querySelector('body');
const startMinesweeperPage = document.querySelector('.minesweeper-start');
const options = document.querySelector('.menu-options');

let difficulty: string;

const activOptions = document.createElement('div');
activOptions.classList.add('minesweeper-options');

options?.addEventListener('click', (e) => {
  addOptions(startMinesweeperPage);

  if (difficulty) {
    const difficultyValue = document.querySelectorAll('.options-list__radio');

    difficultyValue.forEach(item => {
      const itemElement = item as HTMLInputElement;

      if (itemElement.checked) {
        itemElement.checked = false;
      }

      if (itemElement.value === difficulty) {
        itemElement.checked = true;
      }
    })
  }
});

body?.addEventListener('click', (e) => {
  const targetElem = e.target as HTMLElement;

  if (
    targetElem.classList.contains('minesweeper-options__close') ||
    targetElem.classList.contains('line__one') ||
    targetElem.classList.contains('line__two')
  ) {
    removeOptions(activOptions);
  }

  if (targetElem.classList.contains('options-list__radio')) {
    const inputElement = targetElem as HTMLInputElement;
    difficulty = inputElement.value;
    console.log('difficulty', difficulty);
  }
})


function addOptions(
  startMinesweeperPage: Element | null
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
      <button class="minesweeper-options__close">
        <span class="options-close line__one"></span>
        <span class="options-close line__two"></span>
      </button>
  `
    startMinesweeperPage.append(activOptions);
  }

  body?.classList.add('body-overlay');
}

function removeOptions(
  activOptions: Element | null
): void {
  activOptions?.remove();
  body?.classList.remove('body-overlay');
}
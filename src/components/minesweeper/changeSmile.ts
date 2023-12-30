export function happySmile(btnStartNewGame: Element | null) {
  if (btnStartNewGame) {
    btnStartNewGame.innerHTML = '&#128578;';
  }
}

export function deadSmile(btnStartNewGame: Element | null) {
  if (btnStartNewGame) {
    btnStartNewGame.innerHTML = '&#128565;';
  }
}

export function worriedSmile(btnStartNewGame: Element | null) {
  if (btnStartNewGame) {
    btnStartNewGame.innerHTML = '&#128558;';
  }
}
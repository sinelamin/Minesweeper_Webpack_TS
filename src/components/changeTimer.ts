export let timerId: NodeJS.Timeout;

export function startTimer(timer: Element | null): void {
  let counter = 0;

  timerId = setInterval(() => {
    counter += 1;

    if (timer) {
      timer.textContent = `${counter}`.padStart(3, '0');
    }
  }, 1000);

}

export function stopTimer(id: NodeJS.Timeout): void {
  clearInterval(id);
}
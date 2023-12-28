export let timerId: NodeJS.Timeout;
export let counterSeconds = 0;

export function startTimer(timer: Element | null): void {

  timerId = setInterval(() => {
    counterSeconds += 1;

    if (timer) {
      timer.textContent = `${counterSeconds}`.padStart(3, '0');
    }
  }, 1000);

}

export function stopTimer(id: NodeJS.Timeout): void {
  clearInterval(id);
  counterSeconds = 0;
}
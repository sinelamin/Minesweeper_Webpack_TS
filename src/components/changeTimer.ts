export function changeTimer(timer: Element | null) {
  let counter = 0;
  setInterval(() => {
    counter += 1;
    if (timer) {
      timer.textContent = `${counter}`.padStart(3, '0');
    }
  }, 1000);
}
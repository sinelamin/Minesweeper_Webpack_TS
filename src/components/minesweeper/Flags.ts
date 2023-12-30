export let counterFlags = 10;

export function addFlag(
  context: CanvasRenderingContext2D | null,
  arrCell: number[][],
  x: number,
  y: number,
  flags: Element | null
): void {
  if (counterFlags > 0 && flags) {
    counterFlags -= 1;

    flags.innerHTML = `${counterFlags}`.padStart(3, '0');

    arrCell[x][y] = 1;

    createFlag(context, x, y);
  }
}

export function removeFlag(
  context: CanvasRenderingContext2D | null,
  arrCell: number[][],
  x: number,
  y: number,
  flags: Element | null
): void {
  if (context) {
    if (counterFlags < 10 && flags) {
      counterFlags += 1;

      flags.innerHTML = `${counterFlags}`.padStart(3, '0');

      arrCell[x][y] = 0;

      context.beginPath();
      context.fillStyle = '#8f8f8f';
      context.strokeStyle = '#fff';
      context.lineWidth = 2;
      context.fillRect((x * 40) + 1, (y * 40) + 1, 38, 38);
      context.strokeRect((x * 40) + 1, (y * 40) + 1, 38, 38);
      context.closePath();
    }
  }
}

export function resetFlags(flags: Element | null) {
  counterFlags = 10;

  if (flags) {
    flags.innerHTML = `${counterFlags}`.padStart(3, '0');
  }
}

export function createFlag(
  context: CanvasRenderingContext2D | null,
  x: number,
  y: number
): void {

  if (context) {
    context.beginPath();
    context.fillStyle = '#8f8f8f';
    context.strokeStyle = '#fff';
    context.lineWidth = 2;
    context.fillRect((x * 40) + 1, (y * 40) + 1, 38, 38);
    context.strokeRect((x * 40) + 1, (y * 40) + 1, 38, 38);
    context.closePath();

    context.beginPath();
    context.strokeStyle = '#000'
    context.lineWidth = 5;
    context.moveTo((x * 40) + 8, (y * 40) + 32);
    context.lineTo((x * 40) + 32, (y * 40) + 32);
    context.moveTo((x * 40) + 12, (y * 40) + 30);
    context.lineTo((x * 40) + 28, (y * 40) + 30);
    context.moveTo((x * 40) + 20, (y * 40) + 5);
    context.lineTo((x * 40) + 20, (y * 40) + 30);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 1;
    context.moveTo((x * 40) + 20, (y * 40) + 6);
    context.lineTo((x * 40) + 20, (y * 40) + 20);
    context.lineTo((x * 40) + 5, (y * 40) + 13);
    context.lineTo((x * 40) + 20, (y * 40) + 6);
    context.fillStyle = 'red';
    context.fill();
    context.stroke();
    context.closePath();
  }
}
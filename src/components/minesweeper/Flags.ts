import { getSizeCell, calcSizeFromPct } from "./sizeCell";

export function addFlag(
  counterFlags: number,
  context: CanvasRenderingContext2D | null,
  arrCell: number[][],
  x: number,
  y: number,
  flags: Element | null
): void {
  if (flags) {
    flags.innerHTML = `${counterFlags}`.padStart(3, '0');

    arrCell[x][y] = 1;

    createFlag(context, x, y);
  }
}

export function removeFlag(
  counterFlags: number,
  context: CanvasRenderingContext2D | null,
  arrCell: number[][],
  x: number,
  y: number,
  flags: Element | null
): void {
  const sizeCell = getSizeCell();

  if (context) {
    if (flags && sizeCell) {
      flags.innerHTML = `${counterFlags}`.padStart(3, '0');

      arrCell[x][y] = 0;

      context.beginPath();
      context.fillStyle = '#8f8f8f';
      context.strokeStyle = 'rgb(197, 234, 197)';
      context.lineWidth = 2;
      context.fillRect((x * sizeCell) + 1, (y * sizeCell) + 1, sizeCell - 2, sizeCell - 2);
      context.strokeRect((x * sizeCell) + 1, (y * sizeCell) + 1, sizeCell - 2, sizeCell - 2);
      context.closePath();
    }
  }
}

export function resetFlags(countMins: number, flags: Element | null) {
  if (flags) {
    flags.innerHTML = `${countMins}`.padStart(3, '0');
  }
}

export function createFlag(
  context: CanvasRenderingContext2D | null,
  x: number,
  y: number
): void {
  const sizeCell = getSizeCell();

  if (context && sizeCell) {
    context.beginPath();
    context.fillStyle = '#8f8f8f';
    context.strokeStyle = 'rgb(197, 234, 197)';
    context.lineWidth = 2;
    context.fillRect((x * sizeCell) + 1, (y * sizeCell) + 1, sizeCell - 2, sizeCell - 2);
    context.strokeRect((x * sizeCell) + 1, (y * sizeCell) + 1, sizeCell - 2, sizeCell - 2);
    context.closePath();

    context.beginPath();
    context.strokeStyle = '#000'
    context.lineWidth = 5;
    context.moveTo((x * sizeCell) + calcSizeFromPct(20, sizeCell), (y * sizeCell) + calcSizeFromPct(80, sizeCell));
    context.lineTo((x * sizeCell) + calcSizeFromPct(80, sizeCell), (y * sizeCell) + calcSizeFromPct(80, sizeCell));
    context.moveTo((x * sizeCell) + calcSizeFromPct(30, sizeCell), (y * sizeCell) + calcSizeFromPct(75, sizeCell));
    context.lineTo((x * sizeCell) + calcSizeFromPct(70, sizeCell), (y * sizeCell) + calcSizeFromPct(75, sizeCell));
    context.moveTo((x * sizeCell) + calcSizeFromPct(50, sizeCell), (y * sizeCell) + calcSizeFromPct(12.5, sizeCell));
    context.lineTo((x * sizeCell) + calcSizeFromPct(50, sizeCell), (y * sizeCell) + calcSizeFromPct(75, sizeCell));
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 1;
    context.moveTo((x * sizeCell) + calcSizeFromPct(50, sizeCell), (y * sizeCell) + calcSizeFromPct(15, sizeCell));
    context.lineTo((x * sizeCell) + calcSizeFromPct(50, sizeCell), (y * sizeCell) + calcSizeFromPct(50, sizeCell));
    context.lineTo((x * sizeCell) + calcSizeFromPct(12.5, sizeCell), (y * sizeCell) + calcSizeFromPct(32.5, sizeCell));
    context.lineTo((x * sizeCell) + calcSizeFromPct(50, sizeCell), (y * sizeCell) + calcSizeFromPct(15, sizeCell));
    context.fillStyle = 'red';
    context.fill();
    context.stroke();
    context.closePath();
  }
}
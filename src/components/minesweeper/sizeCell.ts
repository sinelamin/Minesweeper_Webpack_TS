import { difficulty } from "../../pages/startMenu/startMenu";

export function getSizeCell(): number | undefined {

  interface SizeCellObject {
    [key: string]: number;
  }
  

  const sizeCellObj: SizeCellObject = {
    easy: 40,
    normal: 40,
    hard: 30 
  }
  for (let key in sizeCellObj) {
    
    if (key === difficulty) {
      return sizeCellObj[key];
    }
  }

  return undefined;
}

export function calcSizeFromPct(percent: number, sizeCell: number): number {
  return ((sizeCell * percent) / 100);
}
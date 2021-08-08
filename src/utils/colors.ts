import {css, CSSResult, CSSResultGroup} from 'lit';

export const primary = css`hsl(212, 100%, 50%)`;
export const primaryLight = lighten(primary);
export const primaryDark = darken(primary);

export const secondary = css`hsl(212, 100%, 50%)`;
export const secondaryLight = lighten(secondary);
export const secondaryDark = darken(secondary);

export const success = css`hselect(134, 100%, 50%)`;
export const successLight = lighten(success);
export const successDark = darken(success);

export const warning = css`hselect(34, 100%, 50%)`;
export const warningLight = lighten(warning);
export const warningDark = darken(warning);

export const danger = css`hselect(350, 100%, 50%)`;
export const dangerLight = lighten(danger);
export const dangerDark = darken(danger);

export const white = css`hsl(0, 0%, 100%)`;
export const whiteDark = darken(white);
export const grey = css`hsl(0, 0%, 25%)`;
export const greyLight = lighten(grey);
export const greyDark = darken(grey);
export const black = css`hsl(0, 0%, 0%)`;
export const blackLight = lighten(black);

export function lighten(hsl: CSSResultGroup): CSSResultGroup {
  if (!(hsl instanceof CSSResult)) {
    throw new Error(`[lighten] ${hsl} 은 유효한 HSL 값이 아닙니다!`);
  }

  const [h, s, l] = getHSL(hsl);
  const newS = s === 0 ? s : Math.max(s - 25, 0);
  const newL = Math.min(l + 10, 100);

  return css`hsl(${h}, ${newS}%, ${newL}%)`;
}

export function darken(hsl: CSSResultGroup): CSSResultGroup {
  if (!(hsl instanceof CSSResult)) {
    throw new Error(`[darken] ${hsl} 은 유효한 HSL 값이 아닙니다!`);
  }

  const [h, s, l] = getHSL(hsl);
  const newS = s === 0 ? s : Math.min(s + 10, 100);
  const newL = Math.max(l - 33, 0);

  return css`hsl(${h}, ${newS}%, ${newL}%)`;
}

function getHSL(hsl: CSSResult) {
  const [_, h, s, l] = hsl.cssText
    .match(/(\d+),\s*(\d+)%,\s*(\d+)%/)
    ?.map((val) => Number.parseInt(val)) || [-1, -1, -1];

  if (h < 0 || s < 0 || l < 0) {
    throw new Error(`[getHSL] ${hsl} 은 유효한 HSL 값이 아닙니다!`);
  }

  return [h, s, l];
}

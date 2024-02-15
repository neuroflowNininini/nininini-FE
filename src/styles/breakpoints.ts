import { css } from 'styled-components';
import type { CSSObject } from 'styled-components';

interface Size {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export const deviceSizes: Size = {
  xs: 400,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
};

/* eslint-disable  @typescript-eslint/no-explicit-any */
/**
 * 사용예시
 * ${media.xs`
 *  // css 속성들을 이곳에 작성합니다.
 * `}
 */
export const media = Object.entries(deviceSizes).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (first: CSSObject | TemplateStringsArray, ...interpolations: any[]) => css`
      @media (min-width: ${value}px) {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {}) as Record<keyof typeof deviceSizes, any>;

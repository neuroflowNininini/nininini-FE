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
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1440,
  xxl: 1920,
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
      @media (max-width: ${value}px) {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {}) as Record<keyof typeof deviceSizes, any>;

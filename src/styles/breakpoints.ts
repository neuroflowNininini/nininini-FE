import { css } from 'styled-components';
import type { CSSObject } from 'styled-components';

interface Size {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export const deviceSizes: Size = {
  xs: '400px',
  sm: '600px',
  md: '900px',
  lg: '1280px',
  xl: '1440px',
  xxl: '1920px',
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
      @media (max-width: ${value}) {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {}) as Record<keyof typeof deviceSizes, any>;
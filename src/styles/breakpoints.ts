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
  xs: '400px', // for small screen mobile
  sm: '600px', // for mobile screen
  md: '900px', // for tablets
  lg: '1280px', // for laptops
  xl: '1440px', // for desktop / monitors
  xxl: '1920px', // for big screens
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

import theme from '~/styles/theme';

type Theme = typeof theme;

export type FontSize = keyof Theme['fontSize'];

type ColorShade = keyof Theme['colors'][keyof Theme['colors']];
export type Color = `${keyof Omit<Theme['colors'], 'theme'>}[${ColorShade}]` | 'themeColor';

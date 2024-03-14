import styled, { CSSProperties } from 'styled-components';
import { Color, FontSize } from '~/types/typography';

interface TextProps {
  children: React.ReactNode;
  color?: Color;
  fontSize?: FontSize;
  isBold?: boolean;
  className?: string;
  style?: CSSProperties;
}
export default function Text({ color, children, fontSize, isBold, className, style }: TextProps) {
  return (
    <TextBox
      color={color}
      fontSize={fontSize}
      isBold={isBold}
      className={className}
      style={{ ...style }}
    >
      {children}
    </TextBox>
  );
}

const TextBox = styled.div<Omit<TextProps, 'children'>>`
  font-size: ${({ theme, fontSize }) =>
    fontSize ? theme.fontSize[fontSize] : theme.fontSize.medium};
  font-weight: ${({ isBold }) => (isBold ? 700 : 400)};
  color: ${({ theme, color }) => {
    if (color === 'themeColor') return theme.colors.theme;
    return color ? theme.colors[color] : theme.colors.gray['900'];
  }};
`;

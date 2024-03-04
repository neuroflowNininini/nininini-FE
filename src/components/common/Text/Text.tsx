import styled, { CSSProperties } from 'styled-components';
import theme from '~/styles/theme';

interface TextProps {
  children: string;
  fontSize?: keyof typeof theme.fontSize;
  isBold?: boolean;
  className?: string;
  style?: CSSProperties;
}
export default function Text({ children, fontSize, isBold, className, style }: TextProps) {
  return (
    <TextBox
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
`;

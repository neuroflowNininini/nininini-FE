import styled, { CSSProperties } from 'styled-components';
import theme from '~/styles/theme';

interface ThemeButtonProps {
  children: string;
  onClick: () => void;
  variant?: 'default' | 'reversed';
  width?: string;
  height?: string;
  fontSize?: keyof typeof theme.fontSize;
  style?: CSSProperties;
}

export default function ThemeButton({
  children,
  onClick,
  variant = 'default',
  width = '100%',
  height = '5rem',
  fontSize = 'medium',
  style,
}: ThemeButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      width={width}
      height={height}
      fontSize={fontSize}
      style={{ ...style }}
    >
      {children}
    </Button>
  );
}

export const Button = styled.button<
  Pick<ThemeButtonProps, 'variant' | 'width' | 'height' | 'fontSize'>
>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1px solid ${({ theme }) => theme.colors.gray['900']};
  font-size: ${({ fontSize }) => fontSize};
  background-color: ${({ theme }) => theme.colors.gray['900']};
  color: ${({ theme }) => theme.colors.white['100']};
  ${({ theme, variant }) =>
    variant === 'reversed' &&
    `
    background-color: ${theme.colors.white['100']};
    color: ${theme.colors.gray['900']};
  `}
  font-weight: 700;
  margin: auto;
`;

import styled, { CSSProperties } from 'styled-components';
import { FontSize } from '~/types/typography';

interface ThemeButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'default' | 'reversed';
  width?: string;
  height?: string;
  fontSize?: FontSize;
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
  ...props
}: ThemeButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      width={width}
      height={height}
      fontSize={fontSize}
      style={{ ...style }}
      {...props}
    >
      {children}
    </Button>
  );
}

export const Button = styled.button<
  Pick<ThemeButtonProps, 'variant' | 'width' | 'height' | 'fontSize' | 'disabled'>
>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1px solid ${({ theme, disabled }) => (!disabled ? theme.colors.gray['900'] : 'none')};
  font-size: ${({ fontSize }) => fontSize};
  background-color: ${({ theme, disabled }) =>
    !disabled ? theme.colors.gray['900'] : theme.colors.gray['200']};
  color: ${({ theme }) => theme.colors.white['100']};
  ${({ theme, variant }) =>
    variant === 'reversed' &&
    `
    background-color: ${theme.colors.white['100']};
    color: ${theme.colors.gray['900']};
  `}
  font-weight: 700;
`;

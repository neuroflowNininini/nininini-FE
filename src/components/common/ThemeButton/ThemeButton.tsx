import styled, { CSSProperties } from 'styled-components';

interface ThemeButtonProps {
  children: string;
  onClick: () => void;
  variant?: 'default' | 'reversed';
  width?: string;
  height?: string;
  style?: CSSProperties;
}

export default function ThemeButton({
  children,
  onClick,
  variant = 'default',
  width = '100%',
  height = '5rem',
  style,
}: ThemeButtonProps) {
  return (
    <Button
      onclick={onClick}
      variant={variant}
      width={width}
      height={height}
      style={{ ...style }}
    >
      {children}
    </Button>
  );
}

const Button = styled.button<Pick<ThemeButtonProps, 'variant' | 'width' | 'height'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1px solid ${({ theme }) => theme.colors.gray['900']};
  font-size: ${({ theme }) => theme.fontSize.medium};
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
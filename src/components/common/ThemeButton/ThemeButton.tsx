import styled, { CSSProperties } from 'styled-components';

type ButtonVariant = 'default' | 'reversed';
interface ThemeButtonProps {
  children: string;
  onClick: () => void;
  variant?: ButtonVariant;
  style?: CSSProperties;
}

export default function ThemeButton({
  children,
  onClick,
  variant = 'default',
  ...style
}: ThemeButtonProps) {
  return (
    <Button
      onclick={onClick}
      variant={variant}
      style={{ ...style }}
    >
      {children}
    </Button>
  );
}

const Button = styled.button<{ variant: ButtonVariant }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
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

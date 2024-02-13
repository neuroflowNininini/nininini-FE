import styled, { CSSProperties } from 'styled-components';

type Variant = 'squared' | 'rounded';
interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  variant?: Variant;
  style?: CSSProperties;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function Input({ variant = 'squared', onChange, style, ...props }: InputProps) {
  return (
    <InputBox
      variant={variant}
      style={{ ...style }}
    >
      <input
        type="text"
        onChange={onChange}
        {...props}
      />
    </InputBox>
  );
}

const InputBox = styled.div<{ variant: Variant }>`
  border: 0.5px solid ${({ theme }) => theme.colors.gray['200']};
  border-radius: ${({ variant }) => variant === 'rounded' && '.5rem'};
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
  & > input {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.smallmedium};
  }
`;

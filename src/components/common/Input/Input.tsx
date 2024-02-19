import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import styled, { CSSProperties } from 'styled-components';

type Variant = 'squared' | 'rounded';
interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  variant?: Variant;
  padding?: string;
  style?: CSSProperties;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  register?: UseFormRegisterReturn;
  error?: FieldError;
  message?: string;
}

export default function Input({
  variant = 'squared',
  padding = '1rem',
  onChange,
  style,
  register,
  error,
  message,
  ...props
}: InputProps) {
  return (
    <Layout>
      <InputBox
        variant={variant}
        padding={padding}
        style={{ ...style }}
      >
        <input
          type="text"
          onChange={onChange}
          {...register}
          {...props}
        />
      </InputBox>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {!error && message && <NonErrorMessage>{message}</NonErrorMessage>}
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  height: 100%;
  width: 100%;
`;

const InputBox = styled.div<{ variant: Variant; padding: string }>`
  border: 0.5px solid ${({ theme }) => theme.colors.gray['200']};
  border-radius: ${({ variant }) => variant === 'rounded' && '.5rem'};
  display: flex;
  align-items: center;
  padding: ${({ padding }) => padding};
  & > input {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.smallmedium};
  }
`;

const ErrorMessage = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: red;
`;

const NonErrorMessage = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.gray['300']};
`;

import { error } from 'console';
import {
  ErrorOption,
  FieldError,
  FieldErrors,
  FieldValues,
  Message,
  UseFormRegisterReturn,
} from 'react-hook-form';
import styled, { CSSProperties } from 'styled-components';

type Variant = 'squared' | 'rounded';
interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  variant?: Variant;
  style?: CSSProperties;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  register?: UseFormRegisterReturn;
  error?: FieldError;
}

export default function Input({
  variant = 'squared',
  onChange,
  style,
  register,
  error,
  ...props
}: InputProps) {
  return (
    <Layout>
      <InputBox
        variant={variant}
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
const InputBox = styled.div<{ variant: Variant }>`
  border: 0.5px solid ${({ theme }) => theme.colors.gray['200']};
  border-radius: ${({ variant }) => variant === 'rounded' && '.5rem'};
  display: flex;
  align-items: center;
  padding: 1rem;
  & > input {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.smallmedium};
  }
`;

const ErrorMessage = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: red;
`;

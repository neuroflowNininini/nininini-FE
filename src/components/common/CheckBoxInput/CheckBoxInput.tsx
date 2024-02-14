import { IoIosCheckboxOutline, IoIosCheckbox } from 'react-icons/io';
import styled from 'styled-components';
import theme from '~/styles/theme';

interface CheckBoxInputProps {
  id: string;
  text: string;
  /** 체크박스 svg 사이즈 */
  boxSize?: string;
  fontSize?: keyof typeof theme.fontSize;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}

export default function CheckBoxInput({
  id,
  text,
  boxSize = '2.4rem',
  fontSize,
  onChange,
  isChecked,
}: CheckBoxInputProps) {
  return (
    <Container>
      <input
        id={id}
        type="checkbox"
        onChange={(e) => {
          onChange(e);
        }}
      />
      <CheckBox htmlFor={id}>
        {isChecked ? (
          <IoIosCheckbox fontSize={boxSize} />
        ) : (
          <IoIosCheckboxOutline
            fontSize={boxSize}
            color={theme.colors.gray['200']}
          />
        )}
      </CheckBox>
      <Text fontSize={fontSize}>{text}</Text>
    </Container>
  );
}

const Container = styled.div`
  height: 2rem;
  display: flex;
  gap: 1rem;
  width: 100%;
  input {
    display: none;
  }
`;

const CheckBox = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Text = styled.div<Pick<CheckBoxInputProps, 'fontSize'>>`
  font-size: ${({ theme, fontSize }) =>
    fontSize ? theme.fontSize[fontSize] : theme.fontSize.medium};
`;

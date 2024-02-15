import { IoIosCheckboxOutline, IoIosCheckbox } from 'react-icons/io';
import styled from 'styled-components';
import theme from '~/styles/theme';

interface CheckBoxTagsProps {
  id: string;
  text: string;
  boxPadding?: string;
  fontSize?: keyof typeof theme.fontSize;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}

export default function CheckBoxTag({
  id,
  text,
  boxPadding = '.6rem',
  fontSize = 'smallmedium',
  onChange,
  isChecked,
}: CheckBoxTagsProps) {
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
        <Tag
          $ischecked={isChecked}
          $boxPadding={boxPadding}
          $fontSize={fontSize}
        >
          {text}
        </Tag>
      </CheckBox>
    </Container>
  );
}

const Container = styled.div`
  white-space: nowrap;
  input {
    display: none;
  }
`;

const CheckBox = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Tag = styled.div<{ $ischecked: boolean; $boxPadding: string; $fontSize: string }>`
  border: 1px solid ${({ theme }) => theme.colors.gray['900']};
  border-radius: 1rem;
  background-color: ${({ $ischecked, theme }) =>
    $ischecked ? theme.colors.gray['900'] : theme.colors.white['100']};
  color: ${({ $ischecked, theme }) =>
    $ischecked ? theme.colors.white['100'] : theme.colors.gray['900']};
  padding: ${({ $boxPadding }) => $boxPadding};
  font-size: ${({ $fontSize, theme }) => theme.fontSize[$fontSize]};
  cursor: pointer;
`;

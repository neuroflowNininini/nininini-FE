import styled from 'styled-components';
import theme from '~/styles/theme';
import { Tag } from '~/types/tag';

interface TagButtonsProps {
  boxPadding?: string;
  fontSize?: keyof typeof theme.fontSize;
  defaultTagId?: number;
  onChange: (tag_id: number) => void;
  selectedIds: number[];
  tagsData: Tag[];
}

export default function TagButtons({
  boxPadding = '.6rem',
  fontSize = 'smallmedium',
  onChange,
  selectedIds,
  tagsData,
}: TagButtonsProps) {
  return (
    <>
      {tagsData.map(({ tag_id, tag }) => (
        <Container key={tag_id}>
          <input
            id={tag_id.toString()}
            type="checkbox"
            onChange={() => onChange(tag_id)}
          />
          <CheckBox htmlFor={tag_id.toString()}>
            <TagBox
              $ischecked={selectedIds.includes(tag_id)}
              $boxPadding={boxPadding}
              $fontSize={fontSize}
            >
              {tag}
            </TagBox>
          </CheckBox>
        </Container>
      ))}
    </>
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

const TagBox = styled.div<{ $ischecked: boolean; $boxPadding: string; $fontSize: string }>`
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

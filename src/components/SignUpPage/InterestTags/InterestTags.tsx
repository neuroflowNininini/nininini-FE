import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getInterestTags } from '~/api/interestTags';
import { TagButtons } from '~/components/common/TagButtons';
import { ThemeButton } from '~/components/common/ThemeButton';
import { useCheckBox } from '~/hooks/useCheckBox';
import { SignUpInterestTags } from '~/types/apis/signUp';
import { Tag } from '~/types/tag';
import { SignUpHeader } from '../SignUpHeader';

interface InterstTagsProps {
  onNext: (args?: SignUpInterestTags) => void;
}

export default function InterestTags({ onNext }: InterstTagsProps) {
  const [tagsData, setTagsData] = useState<Tag[]>([]);

  useEffect(() => {
    const updateTags = async () => {
      const data = await getInterestTags();
      setTagsData(data);
    };
    updateTags();
  }, []);

  const handleContinue = () => {
    onNext({ tags: checkedIds });
  };

  /*FIXME - 데이터 undefined 처리 - suspense 걸어주기 */
  const { checkedIds, onChangeTag } = useCheckBox();

  return (
    <Container>
      <SignUpHeader
        totalSteps={4}
        step={3}
      />
      <Title>{'관심가는 디자인을 선택해주세요\n비슷한 네일을 추천해드려요!'}</Title>
      <CheckBoxWrap>
        <TagButtons
          fontSize={'small'}
          selectedIds={checkedIds}
          onChange={onChangeTag}
          /*FIXME - 데이터 undefined 처리 - suspense 걸어주기 */
          tagsData={tagsData}
        />
      </CheckBoxWrap>
      <ButtonsWrap>
        <ThemeButton onClick={handleContinue}>다음</ThemeButton>
        <button onClick={() => onNext()}>다음에 답변하기</button>
      </ButtonsWrap>
    </Container>
  );
}

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.largemedium};
  font-weight: 700;
  text-align: center;
  white-space: pre-wrap;
  flex-shrink: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

const CheckBoxWrap = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 0.7rem;
  row-gap: 0.5rem;
`;

const ButtonsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

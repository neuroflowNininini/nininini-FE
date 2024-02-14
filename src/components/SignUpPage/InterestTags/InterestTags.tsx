import { useState } from 'react';
import styled from 'styled-components';
import { CheckBoxTag } from '~/components/common/CheckBoxTag';
import { ThemeButton } from '~/components/common/ThemeButton';
import { SignUpInterestTags } from '~/types/apis/signUp';
import { SignUpHeader } from '../SignUpHeader';

interface InterstTagsProps {
  onNext: (args: SignUpInterestTags) => void;
}

export default function InterestTags({ onNext }: InterstTagsProps) {
  const handleContinue = () => {};

  const handleSkip = () => {};

  const tags = [
    {
      id: 1,
      text: '가을 느낌 낭낭한',
    },
    {
      id: 2,
      text: '따뜻한 색감 위주의',
    },
    {
      id: 3,
      text: '귀엽고 알록달록한',
    },
    {
      id: 4,
      text: '시크하고 도시적인',
    },
    {
      id: 5,
      text: '심플하고 자연스러운',
    },
    {
      id: 6,
      text: '유니크하고 독창적인',
    },
  ];

  const [checkedStatus, setCheckedStatus] = useState(
    tags.reduce((acc, cur) => {
      acc[cur.id] = false;
      return acc;
    }, {}),
  );

  return (
    <Container>
      <SignUpHeader
        totalSteps={4}
        step={1}
      />
      <Title>{'관심가는 디자인을 선택해주세요\n비슷한 네일을 추천해드려요!'}</Title>
      <CheckBoxWrap>
        {tags.map(({ id, text }) => (
          <CheckBoxTag
            key={id}
            id={id.toString()}
            text={text}
            fontSize={'small'}
            isChecked={checkedStatus[id]}
            onChange={() => {
              setCheckedStatus((prev) => ({ ...prev, [id]: !prev[id] }));
            }}
          />
        ))}
      </CheckBoxWrap>
      <ButtonsWrap>
        <ThemeButton onClick={handleContinue}>다음</ThemeButton>
        <button onClick={handleSkip}>다음에 답변하기</button>
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

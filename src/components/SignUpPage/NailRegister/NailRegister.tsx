import { useState } from 'react';
import styled from 'styled-components';
import { postNailMeasure } from '~/api/nailMeasure';
import { ThemeButton } from '~/components/common/ThemeButton';
import { Button } from '~/components/common/ThemeButton/ThemeButton';
import { NailMeasure } from '~/components/domain/NailMeasure';
import { ReadAiMeasure } from '~/types/apis/aiMeasure';
import { HandType } from '~/types/handType';
import { SignUpHeader } from '../SignUpHeader';

interface NailRegisterProps {
  onNext: (aiResult?: ReadAiMeasure) => void;
}

export default function NailRegister({ onNext }: NailRegisterProps) {
  const isMobile = navigator.userAgent.indexOf('Mobi') > -1;
  const [imageFiles, setImageFiles] = useState<Record<HandType, File | undefined>>({
    left: undefined,
    right: undefined,
  });
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, handType: HandType) => {
    if (!e.target.files) return;
    const imageFile = e.target.files[0];
    setImageFiles((prev) => ({ ...prev, [handType]: imageFile as File }));
  };
  const handleNailRegister = () => {
    const nailImageFormData = new FormData();
    for (const handType in imageFiles) {
      nailImageFormData.append(handType, imageFiles[handType]);
    }
    postNailMeasure(nailImageFormData).then(({ resultText, resultImage }) => {
      onNext({ resultText, resultImage });
    });
  };

  return (
    <Container>
      <SignUpHeader
        totalSteps={4}
        step={4}
      />
      <ContentsWrap>
        <div>
          <Title>
            {'지금 AI를 통해 손톱을 측정하세요.\n내 손톱 맞춤 상품을 만나볼 수 있어요!'}
          </Title>
          <NailMeasure onImageChange={handleImageChange} />
        </div>
        <ButtonsWrap>
          <ThemeButton
            onClick={handleNailRegister}
            disabled={!imageFiles.left || !imageFiles.right}
          >
            다음
          </ThemeButton>
          <button onClick={() => onNext()}>다음에 답변하기</button>
        </ButtonsWrap>
        {!isMobile && (
          <>
            <PcCover />
            <PcGuideSection>
              <PcMessage>모바일을 통해 확인해주세요</PcMessage>
              <PcNextButton onClick={() => onNext()}>회원가입 완료</PcNextButton>
            </PcGuideSection>
          </>
        )}
      </ContentsWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const ContentsWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
  white-space: pre-wrap;
  margin-bottom: 2rem;
`;

const ButtonsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const PcCover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.colors.white['100']};
  opacity: 85%;
  z-index: 5;
`;

const PcGuideSection = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const PcMessage = styled.div`
  font-size: ${({ theme }) => theme.fontSize.largemedium};
  font-weight: 700;
  text-align: center;
  white-space: pre-wrap;
  margin-bottom: 2rem;
`;
const PcNextButton = styled(Button)`
  border-radius: 1rem;
  padding: 1rem 3rem;
`;

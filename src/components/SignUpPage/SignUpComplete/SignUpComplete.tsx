import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeButton } from '~/components/common/ThemeButton';
import { RowProductList } from '~/components/HomePage/RowProductList';
import { paths } from '~/config/paths';
import { bestDummy } from '~/shared/dummy.js';
import { media } from '~/styles/breakpoints';

export default function SignUpComplete() {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>가입 완료</Title>
      <TitleSub>{'회원가입이 완료되었습니다.\n다양한 네일 제품을 구경해보세요!'}</TitleSub>
      <SwiperContainer>
        <RowProductList dummy={bestDummy} />
      </SwiperContainer>
      <ThemeButton onClick={() => navigate(paths.home())}>서비스 시작하기</ThemeButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  font-weight: 700;
`;

const TitleSub = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  white-space: pre-wrap;
  text-align: center;
`;

const SwiperContainer = styled.div`
  width: 100%;
  ${media.sm`
    width: 120%;
  `}
  ${media.md`
    width: 170%;
  `}
`;

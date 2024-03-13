import { styled } from 'styled-components';
import Divider from '~/components/common/Divider';
import ReviewListItem from '~/components/domain/ReviewListItem/ReviewListItem';
import { newDummy } from '~/shared/dummy.js';
import { ReviewStatistics } from '../ReviewStatistics';

const REVIEW_DUMMY = [
  {
    images: newDummy[3].pics.slice(0, 1),
    nickname: '김니니',
    content:
      '인생 네일 발견!! 마치 저를 위해 태어난 듯 퍼스널 컬러에까지 맞아요. 이런 게 바로 커스텀 네일일까요ㅋㅋ 신기하고 딱 맞아요. 신세계!!',
    date: '2023.10.19',
    rate: 2,
  },
  {
    images: newDummy[1].pics.slice(0, 1),
    nickname: '김네일',
    content: '재구매하려구용ㅎㅎ 휴가 간 김에 기분 낸건데 다들 제 발만 봐요 이쁜 건 알아가지궁ㅎ',
    date: '2023.10.13',
    rate: 3,
  },
  {
    images: [],
    nickname: '왕큰손',
    content:
      '오마이갓!! 이걸 왜 이제 샀을까요 삼백개 주문해야겠어요 저희 엄마, 이모, 언니, 여동생, 숙모, 고모, 큰엄마, 작은엄마, 교회 권사님, 뒷산 사찰의 비구니님, 학창시절 은사님(초,중,고), 대학교 선배, 후배, 동기, 옆집 아주머니, 윗집 아주머니, 아랫집 아주머니, 택배기사님, 요구르트 배달 아주머니, 신문배달 아주머니, 아파트 청소부 아주머니 드리려구요.',
    date: '2023.09.13',
    rate: 3,
  },
  {
    images: newDummy[4].pics.slice(0, 1),
    nickname: '이종민',
    content: '대박 이쁜 컬러감입니다. 저의 은밀한 취미생활 >_< ㅎㅎ',
    date: '2023.09.13',
    rate: 4,
  },
];
export default function ReviewsSection() {
  return (
    <Container>
      <ReviewStatistics />
      {REVIEW_DUMMY.map(({ rate, date, content, nickname, images }, index) => (
        <>
          <Divider color="gray.100" />
          <ReviewListItem
            key={index}
            rate={rate}
            nickname={nickname}
            date={date}
            images={images}
            content={content}
          />
        </>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

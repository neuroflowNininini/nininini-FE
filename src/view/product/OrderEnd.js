import styled from 'styled-components';
import theme from '../../shared/theme';
import { useEffect } from 'react';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function OrderEnd() {
  const navigate = useNavigate();
  const handleContinue = () => {
    // 특정 링크로 이동
    navigate('/');
  };
  // Use the useLocation hook to access the state passed during navigation
  const location = useLocation();
  const { state } = location;
  const orderInfo = state.orderInfo;

  if (!state || !state.orderInfo) {
    return <div>No order information available</div>;
  }

  return (
    <>
      <Space />
      <TopWrap id="hometop">
        <Bar />
        <ContWrap>
          <Title>주문이 완료되었습니다.</Title>
          <Cont>주문번호 20231109439</Cont>
        </ContWrap>
        <CardWrap>
          <ImageBox src={orderInfo.product.pics[0]} />
          <ContentWrap>
            <NameQ>
              <Link
                to={`/product/${orderInfo.product.id}`}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <NameWrap>{orderInfo.product.name}</NameWrap>
              </Link>
              <QWrap>({orderInfo.quantity}개)</QWrap>
            </NameQ>
            <CostWrap>{orderInfo.total}원</CostWrap>
            <Extra>[조건] / 기본배송</Extra>
          </ContentWrap>
        </CardWrap>
        <BlockWrap>
          <Hang>
            <Tag>입금계좌</Tag>
            <TagCont>기업은행 / (주)니니니니</TagCont>
            <Tag />
            <TagCont>(123-321231-91-020)</TagCont>
          </Hang>
          <Hang>
            <Tag>입금기한</Tag>
            <TagCont>2023-11-28 까지</TagCont>
          </Hang>
        </BlockWrap>
        <Bar />
        <Title1>배송정보</Title1>
        <Hang>
          <Tag>이름</Tag>
          <TagCont>{orderInfo.name}</TagCont>
        </Hang>
        <Hang>
          <Tag>배송시 연락처</Tag>
          <TagCont>{orderInfo.num}</TagCont>
        </Hang>
        <Hang>
          <Tag>배송지</Tag>
          <TagCont>{orderInfo.address}</TagCont>
          <Tag />
          <TagCont>{orderInfo.detailAddress} </TagCont>
        </Hang>
        <Hang>
          <Tag>배송메시지</Tag>
          <TagCont>{orderInfo.deliveryMessage}</TagCont>
        </Hang>
      </TopWrap>
      <ButtonWrap>
        <Button>주문내역 확인</Button>
        <Button2 onClick={handleContinue}>쇼핑 계속하기</Button2>
      </ButtonWrap>
    </>
  );
}
const BlockWrap = styled.div`
  padding-bottom: 20px;
`;
const Hang = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 5px 20px;
  align-items: center;
`;
const Tag = styled.div`
  text-align: left;
`;
const TagCont = styled.div`
  text-align: right;
`;

const Bar = styled.div`
  display: flex;
  width: 100%;
  height: 10px;
  background-color: rgb(243, 243, 243);
`;
const Cont = styled.div``;

const Space = styled.div`
  height: 58px;
`;
const TopWrap = styled.div`
  position: relative;
  bottom: 49px;
  padding-top: 60px;
  padding-bottom: 80px;
`;
const CardWrap = styled.div`
  display: flex;
  padding: 20px;
  margin-bottom: 10px;
`;
const ContentWrap = styled.div`
  display: block;
  margin-left: 20px;
`;

const ImageBox = styled.img`
  width: 100px;
  height: 80px;
  object-fit: cover;
`;

const Title = styled.div`
  padding: 10px 20px;
  font-weight: 700;
  flex: 1; /* 남은 공간을 차지하도록 설정 */
`;

const Title1 = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 10px 20px;
  font-weight: 700;
  align-items: center;
`;
const ContWrap = styled.div`
  padding: 20px 10px 0px 10px;
  margin-bottom: 10px;
`;

const NameQ = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;
const QWrap = styled.div`
  display: flex;
  margin-left: 5px;
`;

const Extra = styled.div`
  display: flex;
  margin-top: 5px;
`;

const NameWrap = styled.div`
  display: flex;
  font-weight: 500;
`;
const CostWrap = styled.div`
  display: flex;
  color: deeppink;
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  gap: 5px;
`;
const Button = styled.div`
  position: fixed;
  left: 0;
  bottom: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50px;
  border-top: solid 1px black;
  background-color: white;
`;
const Button2 = styled.div`
  position: fixed;
  right: 0;
  bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50px;
  background-color: black;
  color: white;
`;

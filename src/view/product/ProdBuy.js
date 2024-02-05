import styled from 'styled-components';
import { totalDummy } from '../../shared/dummy';
import { useEffect, useState } from 'react';
import OrderSize from '../components/OrderSize';
import BuyType from '../components/element/BuyType';
import CheckoutBox from '../components/element/CheckoutBox';
import theme from '../../shared/theme';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ProdBuyAddress from '../components/ProdBuyAddress';

export default function ProdBuy() {
  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  const [name, setName] = useState('김니니'); // 초기값은 빈 문자열
  const [num, setNum] = useState('010-1234-5678');
  const [address, setAddress] = useState(''); // 초기값은 빈 문자열
  const [detailAddress, setDetailAddress] = useState(''); // 초기값은 빈 문자열
  const [deliveryMessage, setDeliveryMessage] = useState(''); // 초기값은 빈 문자열
  const [code, setCode] = useState(''); // 초기값은 빈 문자열
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [textData, setTextData] = useState('');

  useEffect(() => {
    const fetchTextFile = async () => {
      try {
        const response = await fetch('yakgwan.txt');
        if (!response.ok) {
          throw new Error('textfile response was not ok');
        }
        const text = await response.text('utf-16');
        setTextData(text);
      } catch (error) {
        console.error('Error fetching the text file:', error);
      }
    };
    fetchTextFile();
  }, []);

  // URL search params에서 product id와 quantity 추출
  // const productQuantities = [];
  // for (const [key, value] of searchParams) {
  // if (key.startsWith('id') && searchParams.has(`qty${key.substr(8)}`)) {
  const id = searchParams.get('id');
  const quantity = searchParams.get(`qty`);
  // productQuantities.push({ productId, quantity });
  // }
  // }
  const product = totalDummy.find((item) => item.id === id);
  const total = formatNumberWithCommas(12900 * Number(quantity));
  // const [orderInfo, setOrderInfo] = useState({});
  // const props = {
  //   name, setName,
  //   num, setNum,
  //   address, setAddress,
  //   detailAddress, setDetailAddress,
  //   deliveryMessage, setDeliveryMessage,
  //   code, setCode
  // }
  // useEffect(() => {
  //   if (orderEnd) {
  //     // Navigate to the "/orderdone" route with orderInfo
  //     navigate("/orderdone", { state: { orderInfo } });
  //   }
  // }, [orderEnd, orderInfo, navigate]);
  const handleOrderConfirm = () => {
    const orderInfo = {
      product: product,
      quantity: quantity,
      total: total,
      name: name,
      num: num,
      address: address,
      detailAddress: detailAddress,
      deliveryMessage: deliveryMessage,
      code: code,
    };
    navigate('/orderdone', { state: { orderInfo: orderInfo } });
  };
  // useEffect(() => {
  //   // 페이지가 로드될 때 스크롤을 맨 위로 이동
  //   window.scrollTo(0, 0);
  // }, []); // 빈 배열을 전달하여 컴포넌트가 처음 로드될 때만 실행되도록 함

  return (
    <>
      <Space />
      <TopWrap id="hometop">
        <Title>결제하기</Title>
        <Bar />
        <Title1>상품정보</Title1>
        <CardWrap>
          <ImageBox src={product.pics[0]} />
          <ContentWrap>
            <NameQ>
              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <NameWrap>{product.name}</NameWrap>
              </Link>
              <QWrap>({quantity}개)</QWrap>
            </NameQ>
            <CostWrap>{total}원</CostWrap>
            <Extra>[조건] / 기본배송</Extra>
          </ContentWrap>
        </CardWrap>
        <Bar />
        <Title1>배송지정보</Title1>
        <ProdBuyAddress
          name={name}
          setName={setName}
          num={num}
          setNum={setNum}
          address={address}
          setAddress={setAddress}
          detailAddress={detailAddress}
          setDetailAddress={setDetailAddress}
          deliveryMessage={deliveryMessage}
          setDeliveryMessage={setDeliveryMessage}
          code={code}
          setCode={setCode}
        />
        <Bar />
        <Title1>주문사이즈</Title1>
        <ContWrap>
          <OrderSize />
        </ContWrap>
        <Bar />
        <Title1>결제수단</Title1>
        <ContWrap>
          <BuyType />
        </ContWrap>
        <Bar />
        <Title1>상품결제약관</Title1>
        <ContWrap>
          <Yakgwan>{textData}</Yakgwan>
          <CheckoutBox
            cost={12900 * quantity}
            discount={5000}
          />
        </ContWrap>
        <BuyButton onClick={handleOrderConfirm}>결제하기</BuyButton>
      </TopWrap>
    </>
  );
}
const Yakgwan = styled.div`
  display: flex;
  padding: 5px;
  border: solid 1px #808080;
  height: 100px;
  overflow-y: scroll;
`;
const Bar = styled.div`
  display: flex;
  width: 100%;
  height: 10px;
  background-color: rgb(243, 243, 243);
`;

const BuyButton = styled.div`
  width: 100%;
  font-weight: 500;
  background-color: black;
  color: white;
  position: fixed;
  left: 0;
  bottom: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;
const Space = styled.div`
  height: 58px;
`;
const TopWrap = styled.div`
  position: relative;
  bottom: 49px;
  padding-top: 60px;
`;
const CardWrap = styled.div`
  display: flex;
  padding: 20px;
  margin-bottom: 20px;
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
  display: flex;
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
  padding: 10px 20px;
  margin-bottom: 50px;
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

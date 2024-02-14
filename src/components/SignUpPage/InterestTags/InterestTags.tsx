import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Checkbox from '~/view/components/element/Checkbox.js';

export default function InterestTags() {
  const location = useLocation();
  const { state } = location;
  const signupInfo = state.signupInfo;

  const [fall, setFall] = useState(false);
  const [warm, setWarm] = useState(false);
  const [cute, setCute] = useState(false);
  const [chic, setChic] = useState(false);
  const [simple, setSimple] = useState(false);
  const [unique, setUnique] = useState(false);

  const navigate = useNavigate();
  const handleContinue = () => {
    // 특정 링크로 이동
    const likedesigns = {
      fall: fall,
      warm: warm,
      cute: cute,
      chic: chic,
      simple: simple,
      unique: unique,
    };
    navigate('/nailmeasure', { state: { signupInfo: signupInfo, likedesigns: likedesigns } });
  };

  const handleSkip = () => {
    // 회원 가입 signupInfo 로 user pool 반영하기 추가해야.
    navigate('/nailmeasure', { state: { signupInfo: signupInfo, likedesigns: null } });
  };

  return (
    <Container>
      <TopWrap id="hometop">
        <DescWrap>
          <Desc>관심디자인을 선택해주세요.</Desc>
          <Desc>선택하신 디자인의 제품을 추천해드려요!</Desc>
        </DescWrap>
        <CheckBoxWrap>
          <Checkbox
            checked={fall}
            onChange={setFall}
            disabled={false}
          >
            가을 느낌 낭낭한
          </Checkbox>
          <Checkbox
            checked={warm}
            onChange={setWarm}
            disabled={false}
          >
            따뜻한 색감 위주의
          </Checkbox>
          <Checkbox
            checked={cute}
            onChange={setCute}
            disabled={false}
          >
            귀엽고 알록달록한
          </Checkbox>
          <Checkbox
            checked={chic}
            onChange={setChic}
            disabled={false}
          >
            시크하고 도시적인
          </Checkbox>
          <Checkbox
            checked={simple}
            onChange={setSimple}
            disabled={false}
          >
            심플하고 자연스러운
          </Checkbox>
          <Checkbox
            checked={unique}
            onChange={setUnique}
            disabled={false}
          >
            유니크하고 독창적인
          </Checkbox>
        </CheckBoxWrap>
      </TopWrap>
      <Button2 onClick={handleContinue}>다음</Button2>
      <Skip onClick={handleSkip}>다음에 답변하기</Skip>
    </Container>
  );
}

const Skip = styled.div`
  padding: 10px 0px;
`;

const Container = styled.div`
  padding-bottom: 80px;
`;
const Desc = styled.div`
  text-align: left;
`;
const DescWrap = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: left;
`;
const TopWrap = styled.div`
  position: relative;
  bottom: 49px;
  padding: 60px 20px 0px 20px;
`;
const CheckBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Button2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 40px);
  height: 50px;
  background-color: black;
  color: white;
  font-weight: 700;
  margin: auto;
`;

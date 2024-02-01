import styled from "styled-components"
import theme from "../../shared/theme";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import SwiperAd from "../components/SwiperAd";
import ai from "../../shared/pics/signup_ai.png"
export default function NailMeasure() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const signupInfo = state.signupInfo;
  const likedesigns = state.likedesigns;
  const aiMeasure = {}
  // console.log("^^;", signupInfo)

  const handleContinue = () => {
    //회원 가입 user pool에 반영하기2
    navigate("/signupdone", {
      state:
      {
        signupInfo: signupInfo,
        likedesigns: likedesigns,
        aiMeasure: aiMeasure
      }
    });
  };
  const handleSkip = () => {
    // 회원 가입 signupInfo 로 user pool 반영하기 추가해야.
    navigate("/");
  };
  return (
    <Container>
      <SwiperAd />
      <Space />
      <TopWrap id="hometop" >
        <DescWrap >
          {/* <div style={{ textAlign: "center", fontSize: "30px" }}>
            👀
          </div> */}
          {/* <Image src={ai}></Image> */}
          <Desc>
            지금 AI를 통해 손톱을 측정하세요.
          </Desc>
          <Desc>
            내 손톱 맞춤 상품을 만나볼 수 있어요!
          </Desc>
        </DescWrap>
        <AiBox>
          <div style={{ height: "22vh" }} />
          <Button>AI로 손톱 측정하기</Button>
        </AiBox>
      </TopWrap>
      <Button2 onClick={handleContinue}>회원가입완료</Button2>
      <Skip onClick={handleSkip}>다음에 등록하기</Skip>
    </Container >
  )
}

const Image = styled.img`
object-fit:cover;
`;
const AiBox = styled.div`
border: solid 1px #959595;
border-radius: 20px;
width :calc(100vw - 40px);
height: 30vh;
margin:auto;
`;

const Button = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.smallmedium};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
border: solid 1px;
width : 50vw;
height : 40px;
display:flex;
justify-content:center;
align-items:center;
border-radius: 10px;
margin : auto;
`;

const Space = styled.div`
height:58px;
`;
const TopWrap = styled.div`
position:relative;
bottom:49px;
padding : 60px 20px 0px 20px;
`;
const Skip = styled.div`
padding : 10px 0px;
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
`;

const Container = styled.div`
padding-bottom : 80px;
`;
const Desc = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.medium};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
text-align: left;
`;
const DescWrap = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.medium};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
margin-top : 20px;
margin-bottom : 30px;
text-align: left;
`;
const Button2 = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.smallmedium};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
display:flex;
justify-content : center;
align-items : center;
width :calc(100vw - 40px);
height:50px;
background-color: black;
color : white;
font-weight:700;
margin:auto;
`;

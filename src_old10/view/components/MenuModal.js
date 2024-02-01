import styled from 'styled-components';
import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { CheckLogin, GoLogIn, GoLogOut } from './State';
import theme from '../../shared/theme';
import LoginBox from './LoginBox';

export default function MenuModal({ username, closeModal }) {
  const [isLoggedIn, setIsLoggedIn] = useState(CheckLogin())
  useEffect(() => {
    setIsLoggedIn(CheckLogin())
  }, [])
  const navigate = useNavigate()
  function handleLogout() {
    GoLogOut()
    setIsLoggedIn(CheckLogin())
  }


  return (
    <Background>
      <InnerMenu>
        <MyPageWrap>
          <BiArrowBack onClick={closeModal} size="28" color="black" />
        </MyPageWrap>
        <MyPageWrap>
          {isLoggedIn === "true" ? (
            <>
              <Nickname>{username}</Nickname>
              <button onClick={() => { handleLogout("logout") }}>로그아웃</button>
            </>
          ) : (
            <>
              <LoginBox closeModal={closeModal} />
            </>
          )}
        </MyPageWrap>
        <div>
          <Link to="/category/new" onClick={closeModal} style={{ textDecoration: "none", color: "black" }} >
            <Title>NEW</Title>
          </Link>
          <Bar />
          <Link to="/category/best" onClick={closeModal} style={{ textDecoration: "none", color: "black" }}>
            <Title>BEST</Title>
          </Link>
          <Bar />
          <Link to="/category/sale" onClick={closeModal} style={{ textDecoration: "none", color: "black" }}>
            <Title>SALE</Title>
          </Link>
          <Bar />
          <Link to="/category/nail" onClick={closeModal} style={{ textDecoration: "none", color: "black" }}>
            <Title >NAIL</Title>
            <Item>- PULL COLOR</Item>
            <Item>- SEASON</Item>
          </Link>
          <Bar />
          <Link to="/category/pedi" onClick={closeModal} style={{ textDecoration: "none", color: "black" }}>
            <Title>PEDI</Title>
          </Link>
          <Item>- PULL COLOR</Item>
          <Item>- SEASON</Item>
          <Bar />
          <Link to="/category/etc" onClick={closeModal} style={{ textDecoration: "none", color: "black" }}>
            <Title>ETC</Title>
          </Link>
          <Bar />
          <BottomBox>
            <GridItem>EVENT</GridItem>
            <GridItem>리뷰</GridItem>
            <GridItem>공지사항</GridItem>
            <GridItem>FAQ</GridItem>
          </BottomBox>
        </div>
      </InnerMenu>
    </Background>
  )
}

const Background = styled.div`
position: fixed; /* 화면 상에 고정 위치 */
top: 0;
left: 0;
width: 100%;
background-color: rgba(0,0,0,0.8);
display: flex;
height: 100%;
z-index: 1000; /* 다른 컴포넌트 위로 표시하기 위한 z-index */
  padding-top: 60px; /* 상단 여백 추가 */
`;

const InnerMenu = styled.div`
position:fixed;
top: 0;
overflow : hidden;
  overflow: auto;
height:100%;
width : 80%;
padding : 10px 10px 10px 0px;
background:white;
`;

const Bar = styled.div`
  border-bottom: 1px solid #e2e2e2; /* 가로 직선의 두께와 색상을 설정할 수 있습니다. */
`;

const MyPageWrap = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
display : flex;
align-items : center;
padding-left : 15px;
`;

const Nickname = styled.p`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.medium};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
margin-left : 30px;
`;
const Title = styled.p`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.medium};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
padding-left : 20px;
text-decoration: none;
`;
const Item = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
padding-left : 20px;
margin : 15px;
`;
const BottomBox = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
gap: 10px; /* 아이템 간의 간격 설정 */
padding : 20px;
`;

const GridItem = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
margin : 20px;
display: flex;
justify-content:center;
`;

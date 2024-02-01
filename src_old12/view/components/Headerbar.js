import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { PiMagnifyingGlass } from 'react-icons/pi';
import { GoBell } from 'react-icons/go';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { ReactComponent as Svg } from "../../logo.svg"
// import { throttle } from 'lodash';

export default function Headerbar({ onTop, setOnTop, trans, setTrans, openModal, openSearch }) {

  const handleScroll = (e) => {
    // 특정 div 요소 가져오기e.changedTouches[0].screenY;
    window.requestAnimationFrame(() => {
      const divElement = document.getElementById('hometop');
      // div 요소의 위치 정보 가져오기
      const rect = divElement.getBoundingClientRect();
      // 위치 정보 출력
      // console.log('상단(Top): ' + rect.y);
      if (rect.y <= 10) {
        setOnTop("0"); // 스크롤이 아래로 내려갈 때 광고 숨기기
        setTrans(1)
      } else if
        (rect.y < 40) {
        setOnTop(rect.y); // 스크롤이 아래로 내려갈 때 광고 숨기기
        setTrans(0.8)
      }
      else {
        setOnTop("40"); // 스크롤이 위로 올라갈 때 광고 보이기
        setTrans(0.8)
      }
    })
  };

  useEffect(() => {
    window.addEventListener('scroll', (e) => { handleScroll(e) })
    window.addEventListener('touchstart', (e) => { handleScroll(e) })
    window.addEventListener('touchmove', (e) => { handleScroll(e) })
    // window.addEventListener('touchend', (e) => { handleScroll(e) })
    return () => {
      window.removeEventListener('scroll', (e) => { handleScroll(e) });
      window.removeEventListener('touchstart', (e) => { handleScroll(e) });
      window.removeEventListener('touchmove', (e) => { handleScroll(e) });
      // window.removeEventListener('touchend', (e) => { handleScroll(e) });
    };
  }, [])

  return (
    <HeaderWrap onTop={onTop}>
      <Header trans={trans}>
        <Element onClick={openModal}>
          <RxHamburgerMenu size="24" color="black" />
        </Element>
        <Logo>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Svg width="25vw" />
          </Link>
        </Logo>
        <Element2>
          <PiMagnifyingGlass size="26" color="black" onClick={openSearch} />
          <Link to="/notice">
            <GoBell size="26" color="black" />
          </Link>
        </Element2>
      </Header>
    </HeaderWrap>
  );
}
const HeaderWrap = styled.div`
position: fixed;
top :${(props) => props.onTop}px;
width : 100%;
`;
const Logo = styled.div`
position: fixed;
display: flex;
left : 36vw;
font-size: 24px;
font-weight: 600;
font-family : "Noto Sans KR";
`;

const Header = styled.header`
position: sticky;
text-align: center;
  top: 0;
  height: 42px;
  background-color: rgba(255,255, 255,${(props) => props.trans});
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Element = styled.div`
`;

const Element2 = styled.div`
  display: flex;
  gap : 5px;
  justify-content: flex-end;
  align-items: center;
`;
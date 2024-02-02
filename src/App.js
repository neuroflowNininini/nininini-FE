import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';
import Home from './view/pages/Home';
import Mypage from './view/pages/Mypage';
import NewPage from './view/pages/category/NewPage';
import BestPage from './view/pages/category/BestPage';
import SalePage from './view/pages/category/SalePage';
import NailPage from './view/pages/category/NailPage';
import PediPage from './view/pages/category/PediPage';
import EtcPage from './view/pages/category/EtcPage';
import ProdDetail from './view/product/ProdDetail';
import ProdBuy from './view/product/ProdBuy';
import OrderEnd from './view/product/OrderEnd';
import Login from './view/pages/Login';
import SignUp from './view/signup/SignUp';
import LikeDesign from './view/signup/LikeDesign';
import NailMeasure from './view/signup/NailMeasure';
import SignUpDone from './view/signup/SignUpDone';
import Notice from './view/pages/Notice';
import SearchResult from './view/pages/SearchResult';
import CartPage from './view/pages/CartPage';
import ADPage from './view/components/ADPage';
import HeaderNavMenu from './view/HeaderNavMenu';
import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';

function App() {
  const [onTop, setOnTop] = useState('40');
  const [trans, setTrans] = useState(1);

  const { pathname } = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  const scrollRef = useRef(null);

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      setOnTop('40');
      setTrans(0);
    }
  };

  return (
    <div
      className="App"
      ref={scrollRef}
      style={{ overFlowY: 'scroll', height: 'calc(100vh - 50px)' }}
    >
      <BrowserView>데스크톱 브라우저</BrowserView>
      <MobileView>
        <HeaderNavMenu
          onTop={onTop}
          setOnTop={setOnTop}
          trans={trans}
          setTrans={setTrans}
        />
        {/* <Overflow id="scrollbar"> */}
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/mypage"
            element={<Mypage />}
          />
          <Route
            path="/cart"
            element={<CartPage />}
          />
          <Route
            path="/category/new"
            element={<NewPage />}
          />
          <Route
            path="/category/best"
            element={<BestPage />}
          />
          <Route
            path="/category/sale"
            element={<SalePage />}
          />
          <Route
            path="/category/nail"
            element={<NailPage />}
          />
          <Route
            path="/category/pedi"
            element={<PediPage />}
          />
          <Route
            path="/category/etc"
            element={<EtcPage />}
          />
          <Route
            path="/product/:id"
            element={<ProdDetail />}
          />
          <Route
            path="/checkout"
            element={<ProdBuy />}
          />
          <Route
            path="/orderdone"
            element={<OrderEnd />}
          />
          <Route
            path="/likedesign"
            element={<LikeDesign />}
          />
          <Route
            path="/nailmeasure"
            element={<NailMeasure />}
          />
          <Route
            path="/signupdone"
            element={<SignUpDone />}
          />
          <Route
            path="/notice"
            element={<Notice />}
          />
          <Route
            path="/search"
            element={<SearchResult />}
          />
          <Route
            path="/adpage"
            element={<ADPage />}
          />
          {
            <Route
              path="*"
              element={<div>Not Found</div>}
            />
          }
        </Routes>
        <GoTop onClick={scrollToTop}>
          <div>
            <IoIosArrowUp size={22} />
            {/* <div style={{ fontSize: "13px" }}>top</div> */}
          </div>
        </GoTop>
        {/* </Overflow> */}
      </MobileView>
    </div>
  );
}

export default App;

const Overflow = styled.div`
  overflow-y: auto;
`;
const GoTop = styled.div`
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 36px;
  right: 20px;
  bottom: 120px;
  border-radius: 5px;
  border: solid 1px #909090;
  background-color: white;
  opacity: 0.8;
`;

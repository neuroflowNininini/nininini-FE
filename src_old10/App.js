import './App.css';
import React, { createContext, useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect'
import Home from './view/pages/Home';
import Mypage from './view/pages/Mypage';
import NewPage from "./view/pages/category/NewPage";
import BestPage from "./view/pages/category/BestPage";
import SalePage from "./view/pages/category/SalePage";
import NailPage from './view/pages/category/NailPage';
import PediPage from "./view/pages/category/PediPage";
import EtcPage from "./view/pages/category/EtcPage";
import ProdDetail from './view/product/ProdDetail';
import ProdBuy from './view/product/ProdBuy';
import OrderEnd from './view/pages/OrderEnd';
import Login from './view/pages/Login';
import SignUp from './view/pages/SignUp';
import LikeDesign from './view/pages/LikeDesign';
import NailMeasure from './view/pages/NailMeasure';
import SignUpDone from './view/pages/SignUpDone';
import Notice from './view/pages/Notice';
import SearchResult from './view/pages/SearchResult';
import CartPage from './view/pages/CartPage';

function App() {

  return (
    <div className="App">
      <BrowserView>
        데스크톱 브라우저
      </BrowserView>
      <MobileView>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/category/new" element={<NewPage />} />
          <Route path="/category/best" element={<BestPage />} />
          <Route path="/category/sale" element={<SalePage />} />
          <Route path="/category/nail" element={<NailPage />} />
          <Route path="/category/pedi" element={<PediPage />} />
          <Route path="/category/etc" element={<EtcPage />} />
          <Route path="/product/:id" element={<ProdDetail />} />
          <Route path="/checkout" element={<ProdBuy />} />
          <Route path="/orderdone" element={<OrderEnd />} />
          <Route path="/likedesign" element={<LikeDesign />} />
          <Route path="/nailmeasure" element={<NailMeasure />} />
          <Route path="/signupdone" element={<SignUpDone />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/search" element={<SearchResult />} />
          {<Route path="*" element={<div>Not Found</div>} />}
        </Routes>
      </MobileView>
    </div>
  );
}

export default App;

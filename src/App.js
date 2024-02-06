import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import styled, { ThemeProvider } from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';
import SwiperAd from './view/components/SwiperAd';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import Header from './components/common/Header';
import { paths } from './config/paths';

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SwiperAd />
        <div id="App">
          <Header />
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
              path={paths.category('new')}
              element={<NewPage />}
            />
            <Route
              path={paths.category('best')}
              element={<BestPage />}
            />
            <Route
              path={paths.category('sale')}
              element={<SalePage />}
            />
            <Route
              path={paths.category('nail')}
              element={<NailPage />}
            />
            <Route
              path={paths.category('pedi')}
              element={<PediPage />}
            />
            <Route
              path={paths.category('etc')}
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
              path={paths.notice()}
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
            <Route
              path="*"
              element={<div>Not Found</div>}
            />
          </Routes>
          <GoTop onClick={scrollToTop}>
            <div>
              <IoIosArrowUp size={22} />
            </div>
          </GoTop>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

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

import './App.css';
import '~/styles/swiper.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
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
import { SignUpPage } from './pages/SignUpPage';
import Notice from './view/pages/Notice';
import SearchResult from './view/pages/SearchResult';
import CartPage from './view/pages/CartPage';
import ADPage from './view/components/ADPage';
import { ThemeProvider } from 'styled-components';
import SwiperAd from './view/components/SwiperAd';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import { paths } from './config/paths';
import { DefaultLayout, FocusLayout, HomeLayout } from './components/layouts';
import { FixedButtonsGroup } from './components/common/FixedButtonsGroup';
import { LoginPage } from './pages/LoginPage';
import { AuthProvider } from './lib/contexts/AuthProvider';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SwiperAd />
        <div id="App">
          <AuthProvider>
            <Routes>
              <Route element={<HomeLayout />}>
                <Route
                  path="/"
                  element={<HomePage />}
                />
              </Route>
              <Route element={<FocusLayout />}>
                <Route
                  path={paths.signUp()}
                  element={<SignUpPage />}
                />
                <Route
                  path={paths.logIn()}
                  element={<LoginPage />}
                />
              </Route>
              <Route element={<DefaultLayout />}>
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
              </Route>
            </Routes>
            <FixedButtonsGroup />
          </AuthProvider>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

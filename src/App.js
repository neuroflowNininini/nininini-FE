import './App.css';
import '~/styles/swiper.css';
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import Mypage from './view/pages/Mypage';
import ProdBuy from './view/product/ProdBuy';
import OrderEnd from './view/product/OrderEnd';
import { SignUpPage } from './pages/SignUpPage';
import { CategoryPage } from './pages/CategoryPage';
import Notice from './view/pages/Notice';
import SearchResult from './view/pages/SearchResult';
import CartPage from './view/pages/CartPage';
import ADPage from './view/components/ADPage';
import { ThemeProvider } from 'styled-components';
import SwiperAd from './view/components/SwiperAd';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import { paths } from './config/paths';
import { DefaultLayout, FocusLayout } from './components/layouts';
import { FixedButtonsGroup } from './components/common/FixedButtonsGroup';
import { LoginPage } from './pages/LoginPage';
import { OAuthRedirectPage } from './pages/OAuthRedirectPage';
import { AuthProvider } from './lib/contexts/AuthProvider';
import GuestRoute from './routes/GuestRoute';
import { TermsDetailPage } from './pages/TermsDetailPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: paths.home(),
    element: <HomePage />,
  },
  {
    element: <FocusLayout />,
    children: [
      {
        element: <GuestRoute />,
        children: [
          { path: paths.logIn(), element: <LoginPage /> },
          { path: paths.signUp(), element: <SignUpPage /> },
        ],
      },
    ],
  },
  {
    element: <DefaultLayout />,
    children: [
      { path: '/terms/privacy', element: <TermsDetailPage termsType={'privacy'} /> },
      { path: '/terms/usage', element: <TermsDetailPage termsType={'usage'} /> },
      {
        path: '/category/:id',
        element: <CategoryPage />,
      },
      { path: paths.oAuthRedirect(), element: <OAuthRedirectPage /> },
      {
        path: '/product/:id',
        element: <ProductDetailPage />,
      },
    ],
  },
  { path: '*', element: <Root /> },
]);

function App() {
  return (
    <Suspense fallback={'로딩 중입니다.'}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <SwiperAd />
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </Suspense>
  );
}

function Root() {
  return (
    <div id="App">
      <Routes>
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
    </div>
  );
}

export default App;

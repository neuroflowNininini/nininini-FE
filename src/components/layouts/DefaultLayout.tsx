import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '~/lib/contexts/AuthProvider';
import { deviceSizes, media } from '~/styles/breakpoints';
import Header from '../common/Header';

export default function DefaultLayout() {
  const { isLoggedIn } = useAuth();
  return (
    <Layout>
      <Header isLoggedIn={isLoggedIn} />
      <Container>
        <Outlet />
      </Container>
    </Layout>
  );
}

const Layout = styled.div``;
const Container = styled.div`
  max-width: none;
  ${media.md`
    max-width: ${deviceSizes.lg}px;
    margin: 0 auto;
    position: relative;
  `}
`;

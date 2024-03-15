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
  padding: 0 1.5rem;
  margin-top: 5rem;
  ${media.md`
    max-width: ${deviceSizes.xl}px;
    margin: 0 auto;
    margin-top: 5rem;
    position: relative;
  `}
`;

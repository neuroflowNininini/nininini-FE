import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '~/components/common/Header';
import { useAuth } from '~/lib/contexts/AuthProvider';
import { media } from '~/styles/breakpoints';

export default function FocusLayout() {
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
  max-width: 90%;
  margin: 0 auto;
  padding-top: 10vh;
  ${media.sm`
    width: 45rem;
  `}
`;

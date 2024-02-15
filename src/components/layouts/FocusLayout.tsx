import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '~/components/common/Header';
import { media } from '~/styles/breakpoints';

export default function FocusLayout() {
  return (
    <Layout>
      <Header />
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

import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { deviceSizes, media } from '~/styles/breakpoints';
import Header from '../common/Header';

export default function DefaultLayout() {
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
  max-width: none;
  ${media.md`
    max-width: ${deviceSizes.lg}px;
    margin: 0 auto;
    position: relative;
  `}
`;

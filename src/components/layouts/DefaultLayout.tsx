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
  ${media.md`
  max-width: none;
  `}
  max-width: ${deviceSizes.md}px;
  margin: 0 auto;
  position: relative;
`;

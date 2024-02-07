import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { deviceSizes, media } from '~/styles/breakpoints';

export default function DefaultLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

const Layout = styled.div`
  ${media.md`
  max-width: none;
  `}
  max-width: ${deviceSizes.md};
  margin: 0 auto;
  position: relative;
`;

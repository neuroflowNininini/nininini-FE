import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { deviceSizes, media } from '~/styles/breakpoints';
import Header from '../common/Header';

export default function HomeLayout() {
  return (
    <>
      <Header isFloat={true} />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}

const Layout = styled.div``;

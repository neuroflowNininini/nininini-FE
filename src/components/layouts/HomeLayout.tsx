import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '~/components/common/Header';

export default function HomeLayout() {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
}

const Layout = styled.div``;

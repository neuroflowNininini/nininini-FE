import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '~/components/common/Header';
import { useAuth } from '~/lib/contexts/AuthProvider';

export default function FullLayout() {
  const { isLoggedIn } = useAuth();
  return (
    <Layout>
      <Header isLoggedIn={isLoggedIn} />
      <Outlet />
    </Layout>
  );
}

const Layout = styled.div``;

import { Navigate, Outlet } from 'react-router-dom';
import { paths } from '~/config/paths';
import { useAuth } from '~/lib/contexts/AuthProvider';

export default function GuestRoute() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={paths.home()} /> : <Outlet />;
}

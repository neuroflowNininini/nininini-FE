import { createContext, useContext, useEffect, useState } from 'react';
import { NinininiAxios } from '~/config/axios';
import { CONSTANTS } from '~/constants';
import { getCookie } from '~/utils/cookie';

/*FIXME - user 타입 지정 */
/* eslint-disable @typescript-eslint/no-explicit-any */

type AuthState = {
  userInfo: any;
  isLoggedIn: boolean;
  getUserInfo: () => void;
};

const AuthContext = createContext<AuthState>({
  userInfo: null,
  isLoggedIn: false,
  getUserInfo: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  /*TODO - user 정보 스키마 정해지면 타입 지정 */
  const [userInfo, setUserInfo] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const getUserInfo = async () => {
    try {
      const { data } = await NinininiAxios.get(`/api/members/user`);
      if (data) {
        setUserInfo(data);
        setLoggedIn(true);
      }
      return;
    } catch (e) {
      // throw new Error(e);
    }
  };

  return (
    <AuthContext.Provider value={{ userInfo, isLoggedIn, getUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { getUserInfo, userInfo, isLoggedIn } = useContext(AuthContext);
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_KEY);
  useEffect(() => {
    if (accessToken) {
      getUserInfo();
    }
  }, [accessToken]);
  return { userInfo, isLoggedIn };
};

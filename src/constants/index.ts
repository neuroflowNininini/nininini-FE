import { ENVIRONMENTS } from '~/config/environments';

export const CONSTANTS = {
  ACCESS_TOKEN_KEY: 'nininini_access_token',
  REFRESH_TOKEN_KEY: 'nininini_refresh_token',
  KAKAO_SIGNIN_URL: `https://kauth.kakao.com/oauth/authorize?client_id=${ENVIRONMENTS.kakaoRestApiKey()}&redirect_uri=${ENVIRONMENTS.kakaoRedirectUri()}&response_type=code`,
};

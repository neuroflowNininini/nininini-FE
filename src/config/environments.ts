export const ENVIRONMENTS = {
  baseUrl: () => getEnv('REACT_APP_API_BASE_URL'),
  kakaoRestApiKey: () => getEnv('REACT_APP_OAUTH_KAKAO_REST_API_KEY'),
  kakaoRedirectUri: () => getEnv('REACT_APP_OAUTH_KAKAO_REDIRECT_URI'),
  naverClientId: () => getEnv('REACT_APP_OAUTH_NAVER_CLIENT_ID'),
  naverRedirectUri: () => getEnv('REACT_APP_OAUTH_NAVER_REDIRECT_URI'),
};

const getEnv = (key: string) => {
  if (!process.env[key]) {
    throw Error(`'${key}'에 해당하는 환경변수가 없습니다.`);
  }
  return process.env[key];
};

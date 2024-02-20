export const ENVIRONMENTS = {
  baseUrl: () => getEnv('REACT_APP_API_BASE_URL'),
};

const getEnv = (key: string) => {
  if (!process.env[key]) {
    throw Error(`'${key}'에 해당하는 환경변수가 없습니다.`);
  }
  return process.env[key];
};

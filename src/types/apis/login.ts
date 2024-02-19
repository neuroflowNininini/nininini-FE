export type Login = { userId: string; userPw: string };

export type ReIssueAccessToken = { userId: string; refresh: string };

export type LoginRes = {
  message: string;
  accessToken: string;
  refreshToken: string;
};

export type ErrorCode =
  | 'INVALID_ACCESS_TOKEN'
  | 'INVALID_AUTHENTICATION'
  | 'WRONG_ID'
  | 'WRONG_PW'
  | 'DUP_SIGNUP'
  | 'ID_ALREADY_EXIST'
  | 'NOT_FOUND';

export interface NinininiResponse<T> extends Response {
  parsedBody: T | NinininiErrorResponse;
}

export type NinininiErrorResponse = {
  status: 'error';
  exception: {
    errorCode: ErrorCode;
    errorMessage: string;
  };
};

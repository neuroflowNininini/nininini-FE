export type ErrorCode = 'INVALID_ACCESS_TOKEN';

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

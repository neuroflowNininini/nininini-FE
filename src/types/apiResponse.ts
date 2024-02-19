type Code = 'INVALID_ACCESS_TOKEN';

export interface NinininiResponse<T> extends Response {
  parsedBody: T | NinininiErrorResponse;
}

export type NinininiErrorResponse = {
  status: 'error';
  exception: {
    errorCode: Code;
    errorMessage: string;
  };
};

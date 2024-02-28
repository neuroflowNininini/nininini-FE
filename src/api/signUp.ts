import { isAxiosError } from 'axios';
import { NinininiAxios } from '~/config/axios';
import { NinininiErrorResponse } from '~/types/apiResponse';
import { LoginRes } from '~/types/apis/login';
import { SignUp } from '~/types/apis/signUp';

export const postSignUp = async ({
  body,
  onSuccess,
}: {
  body: SignUp;
  onSuccess: (data: LoginRes) => void;
}) => {
  const { data } = await NinininiAxios.post(`/api/members/signup`, body);
  onSuccess(data);
  return;
};

export const postCheckDuplicateId = async ({
  userId,
  onDuplicate,
  onSuccess,
}: {
  userId: string;
  onDuplicate: () => void;
  onSuccess: () => void;
}) => {
  try {
    const { data } = await NinininiAxios.post(`/api/members/idcheck`, { userId });
    onSuccess();
    return data;
  } catch (e) {
    if (isAxiosError<NinininiErrorResponse>(e) && e.response) {
      switch (e.response.status) {
        case 409:
          if (e.response.data.exception.errorCode === 'ID_ALREADY_EXIST') {
            onDuplicate();
          }
      }
    }
  }
};

export const postOAuthSignUp = async ({
  body,
  onSuccess,
}: {
  body: SignUp;
  onSuccess: (data: LoginRes) => void;
}) => {
  const { data } = await NinininiAxios.post(`/api/members/sns`, body);
  onSuccess(data);
  return;
};

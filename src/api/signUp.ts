import { isAxiosError } from 'axios';
import { NinininiAxios } from '~/config/axios';
import { NinininiErrorResponse } from '~/types/apiResponse';
import { LoginRes } from '~/types/apis/login';
import { SignUp } from '~/types/apis/signUp';

export const postSignUp = async ({
  body,
  onDuplicate,
  onSuccess,
}: {
  body: SignUp;
  onDuplicate: () => void;
  onSuccess: (data: LoginRes) => void;
}) => {
  try {
    const { data } = await NinininiAxios.post(`/api/members/signup`, body);
    onSuccess(data);
    return;
  } catch (e) {
    if (isAxiosError<NinininiErrorResponse>(e) && e.response) {
      const status = e.response.status;
      switch (status) {
        case 409:
          if (e.response.data.exception.errorCode === 'DUP_SIGNUP') {
            onDuplicate();
          }
          break;
      }
    }
  }
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

export const postCheckDuplicateId = async (userId: string) => {
  const res = await fetch(process.env.REACT_APP_API_BASE_URL + `/api/members/idcheck`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId }),
  });

  return res.json();
};

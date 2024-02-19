import { Login } from '~/types/apis/login';

export const postLogin = async (body: Login) => {
  try {
    const res = await fetch(process.env.REACT_APP_API_BASE_URL + `/api/members/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return res;
  } catch (e) {
    throw Error(e);
  }
};

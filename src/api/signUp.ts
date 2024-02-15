import { SignUp } from '~/types/apis/signUp';

export const postSignUp = async (body: SignUp) => {
  const res = await fetch(process.env.REACT_APP_API_BASE_URL + `/api/members/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  return res.json();
};

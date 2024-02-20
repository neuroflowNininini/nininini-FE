import { NinininiAxios } from '~/config/axios';

/*TODO - Return type 지정해주기*/
export const getMyInfo = async () => {
  try {
    const data = await NinininiAxios.get(`/api/members/user`);

    return data;
  } catch (e) {
    throw new Error(e);
  }
};

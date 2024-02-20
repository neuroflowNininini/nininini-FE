import { isAxiosError } from 'axios';
import { NinininiAxios } from '~/config/axios';
import { CONSTANTS } from '~/constants';
import { NinininiErrorResponse } from '~/types/apiResponse';
import { deleteCookie } from '~/utils/cookie';

/*TODO - Return type 지정해주기*/
export const getMyInfo = async () => {
  try {
    const data = await NinininiAxios.get(`/api/members/user`);
    return data;
  } catch (e) {
    if (isAxiosError<NinininiErrorResponse>(e) && e.response) {
      const status = e.response.status;
      switch (status) {
        case 401:
          deleteCookie(CONSTANTS.ACCESS_TOKEN_KEY);
          deleteCookie(CONSTANTS.REFRESH_TOKEN_KEY);
      }
    }
  }
};

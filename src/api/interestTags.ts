import { NinininiAxios } from '~/config/axios';

export const getInterestTags = async () => {
  const data = await NinininiAxios.get(`/api/tags`);
  return data;
};

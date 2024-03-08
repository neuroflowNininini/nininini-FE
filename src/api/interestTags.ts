import { NinininiAxios } from '~/config/axios';
import { Tag } from '~/types/tag';

export const getInterestTags = async (): Promise<Tag[]> => {
  const {
    data: { tags },
  } = await NinininiAxios.get(`/api/tags`);
  return tags;
};

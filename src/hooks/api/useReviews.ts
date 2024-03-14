import { useSuspenseQuery } from '@tanstack/react-query';
import { NinininiAxios } from '~/config/axios';
import { ReadReview } from '~/types/apis/review';

type GetReviews = {
  productId: string;
  size: number;
  pageNumber: number;
};

const getReviews = async ({ productId, size, pageNumber }: GetReviews): Promise<ReadReview> => {
  const { data } = await NinininiAxios.get(
    `/api/products/review?prodId=${productId}&size=${size}&pageNum=${pageNumber}`,
  );
  return data;
};

export const useReviews = ({ productId, size, pageNumber }: GetReviews) => {
  return useSuspenseQuery({
    queryKey: [`${productId}_${pageNumber}_reviews`],
    queryFn: () => getReviews({ productId, size, pageNumber }),
  });
};

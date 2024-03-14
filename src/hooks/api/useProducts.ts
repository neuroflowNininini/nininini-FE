import { useSuspenseQuery } from '@tanstack/react-query';
import { NinininiAxios } from '~/config/axios';
import { ReadProductList } from '~/types/apis/product';

const getProducts = async (
  size: number,
  pageNum: number,
  categoryId?: string,
): Promise<ReadProductList> => {
  const { data } = await NinininiAxios.get(
    `/api/products?size=${size}&pageNum=${pageNum}&categoryId=${categoryId ?? ''}`,
  );
  return data;
};

export const useProducts = ({
  size,
  pageNum,
  categoryId,
}: {
  size: number;
  pageNum: number;
  categoryId?: string;
}) => {
  return useSuspenseQuery({
    queryKey: [`products`, `${pageNum}_${categoryId}_products`],
    queryFn: () => getProducts(size, pageNum, categoryId),
  });
};

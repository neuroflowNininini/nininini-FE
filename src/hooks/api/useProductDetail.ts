import { useSuspenseQuery } from '@tanstack/react-query';
import { NinininiAxios } from '~/config/axios';
import { Product } from '~/types/apis/product';

type GetProductDetail = {
  productId: string;
};

const getProductDetail = async ({ productId }: GetProductDetail): Promise<Product> => {
  const {
    data: { prodInfo },
  } = await NinininiAxios.get(`/api/products/detail?prodId=${productId}`);
  return prodInfo;
};

const useProductDetail = ({ productId }: GetProductDetail) => {
  return useSuspenseQuery({
    queryKey: [`${productId}_product`],
    queryFn: () => getProductDetail({ productId }),
  });
};

export default useProductDetail;

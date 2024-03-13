import { useEffect, useState } from 'react';
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
  const [data, setData] = useState<ReadProductList>();

  useEffect(() => {
    const updateData = async () => {
      const data = await getProducts(size, pageNum, categoryId);
      setData(data);
    };
    updateData();
  }, []);

  return [data];
};

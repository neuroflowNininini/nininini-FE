import { useEffect, useState } from 'react';
import { NinininiAxios } from '~/config/axios';

const getCategories = async (): Promise<{ categoryId: number; category: string }[]> => {
  const {
    data: { categories },
  } = await NinininiAxios.get(`/api/sub-category`);
  return categories;
};

export const useMenuCategories = () => {
  const [menuCategories, setMenuCategories] = useState<{ categoryId: number; category: string }[]>(
    [],
  );

  useEffect(() => {
    const updateData = async () => {
      const data = await getCategories();
      setMenuCategories(data);
    };
    updateData();
  }, []);

  return { menuCategories };
};

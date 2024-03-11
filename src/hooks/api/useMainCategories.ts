import { useEffect, useState } from 'react';
import { NinininiAxios } from '~/config/axios';

type Category = { category_id: number; category: string };

const getCategories = async (): Promise<Category[]> => {
  const { data: categories } = await NinininiAxios.get(`/api/main-category`);
  return categories;
};

export const useMainCategories = () => {
  const [mainCategories, setMainCategories] = useState<Category[]>([]);

  useEffect(() => {
    const updateData = async () => {
      const data = await getCategories();
      setMainCategories(data);
    };
    updateData();
  }, []);

  return { mainCategories };
};

import { useState } from 'react';

export const useCheckBox = (defaultIds?: number[]) => {
  const [checkedIds, setCheckedIds] = useState<number[]>(defaultIds ?? []);

  const onChangeTag = (id: number) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((prevId) => prevId !== id) : prev.concat(id),
    );
  };

  return { checkedIds, onChangeTag };
};

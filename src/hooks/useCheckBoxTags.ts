import { useState } from 'react';
import { Tag } from '~/types/tag';

export const useCheckBoxTags = (tagsData: Tag[]) => {
  const [checkedStatus, setCheckedStatus] = useState<{ [tag_id: number]: boolean }>(
    tagsData?.reduce((acc, cur) => {
      acc[cur['tag_id']] = false;
      return acc;
    }, {}),
  );

  const onChangeTag = (tag_id: number) => {
    setCheckedStatus((prev) => ({ ...prev, [tag_id]: !prev[tag_id] }));
  };

  return { checkedStatus, onChangeTag };
};

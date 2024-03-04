import { useState } from 'react';

export const useRadioButton = (defaultId: number) => {
  const [selectedId, setSelectedId] = useState<number>(defaultId);

  const onChangeRadioButton = (id: number) => {
    setSelectedId(id);
  };

  return { selectedId, onChangeRadioButton };
};

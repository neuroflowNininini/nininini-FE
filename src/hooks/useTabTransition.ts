import { useState, useTransition } from 'react';

export type Tabs<T> = readonly { tab: T; label: string }[];

export const useTabTransition = <T>(tabs: Tabs<T>) => {
  const [isTransitionPending, startTransition] = useTransition();
  const [tab, setTab] = useState<T>(tabs[0]['tab']);
  const selectTab = (newTab: T) => {
    startTransition(() => {
      setTab(newTab);
    });
  };

  return { tab, selectTab, isTransitionPending };
};

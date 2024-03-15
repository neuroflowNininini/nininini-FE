import { styled } from 'styled-components';
import { Text } from '~/components/common/Text';
import { Tabs } from '~/hooks/useTabTransition';

interface TabProps<T> {
  tabs: Tabs<T>;
  selectTab: (tab: T) => void;
  currentTab: T;
  isPending?: boolean;
}

export default function Tab<T>({ tabs, currentTab, selectTab, isPending }: TabProps<T>) {
  return (
    <Container>
      {tabs.map(({ tab, label }, index) => {
        return (
          <Button
            key={tab + index.toString()}
            onClick={() => selectTab(tab)}
            disabled={isPending && tab === currentTab}
            isActive={tab === currentTab}
          >
            <Text
              isBold={isPending || tab === currentTab}
              color={isPending ? 'gray.300' : 'gray.900'}
            >
              {label}
            </Text>
          </Button>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 5rem;
`;
const Button = styled.button<{ isActive?: boolean }>`
  width: 100%;
  border-bottom: 1px solid ${({ isActive, theme }) => theme.colors.gray[isActive ? '900' : '100']};
`;

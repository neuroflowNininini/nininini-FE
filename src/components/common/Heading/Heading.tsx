import styled from 'styled-components';

export default function Heading({ children }: { children: React.ReactNode }) {
  return <Title>{children}</Title>;
}

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  font-weight: 900;
`;

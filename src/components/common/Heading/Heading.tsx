import styled from 'styled-components';

export default function Heading({
  children,
  marginBottom = '2rem',
}: {
  children: React.ReactNode;
  marginBottom?: string;
}) {
  return <Title marginBottom={marginBottom}>{children}</Title>;
}

const Title = styled.div<{ marginBottom: string }>`
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  font-weight: 900;
  margin-bottom: ${({ marginBottom }) => marginBottom};
`;

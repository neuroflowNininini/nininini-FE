import styled, { css } from 'styled-components';

interface HeadingProps {
  children: React.ReactNode;
  position?: 'default' | 'center';
  marginBottom?: string;
}

export default function Heading({
  children,
  position = 'default',
  marginBottom = '2rem',
}: HeadingProps) {
  return (
    <Title
      marginBottom={marginBottom}
      position={position}
    >
      {children}
    </Title>
  );
}

const Title = styled.div<Omit<HeadingProps, 'children'>>`
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  font-weight: 900;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  ${({ position }) => {
    if (position === 'center')
      return css`
        text-align: center;
      `;
  }}
`;

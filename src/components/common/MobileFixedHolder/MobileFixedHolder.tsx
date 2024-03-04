import styled from 'styled-components';
import { media } from '~/styles/breakpoints';

export default function MobileFixedHolder({ children }: { children: React.ReactNode }) {
  return <Holder>{children}</Holder>;
}

const Holder = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  ${media.sm`
    position: static;
  `}
`;

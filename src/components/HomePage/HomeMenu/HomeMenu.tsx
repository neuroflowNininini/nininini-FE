import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { paths } from '~/config/paths';
import { media } from '~/styles/breakpoints';

export default function HomeMenu() {
  return (
    <Menu>
      <Link to={paths.category('new')}>
        <Item>NEW</Item>
      </Link>
      <Link to={paths.category('best')}>
        <Item>BEST</Item>
      </Link>
      <Link to={paths.category('sale')}>
        <Item>SALE</Item>
      </Link>
      <Link to={paths.category('nail')}>
        <Item>nail</Item>
      </Link>
      <Link to={paths.category('pedi')}>
        <Item>pedi</Item>
      </Link>
      <Link to={paths.category('etc')}>
        <Item>etc.</Item>
      </Link>
    </Menu>
  );
}

const Menu = styled.div`
  display: none;
  ${media.md`
    display: grid;
    grid-template-rows: repeat(2);
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: 3rem 0;
  `}
`;
const Item = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 600;
  text-align: center;
`;

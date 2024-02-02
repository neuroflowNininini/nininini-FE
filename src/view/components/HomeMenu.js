import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../shared/theme';

export default function HomeMenu() {
  return (
    <>
      <Menu>
        <Link
          to="/category/new"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <Item>NEW</Item>
        </Link>
        <Link
          to="/category/best"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <Item>BEST</Item>
        </Link>
        <Link
          to="/category/sale"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <Item>SALE</Item>
        </Link>
      </Menu>
      <Menu>
        <Link
          to="/category/nail"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <Item>네일</Item>
        </Link>
        <Link
          to="/category/pedi"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <Item>페디</Item>
        </Link>
        <Link
          to="/category/etc"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <Item>ETC</Item>
        </Link>
      </Menu>
    </>
  );
}

const Menu = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(3, 1fr); /* Three columns with equal width */
  gap: 10px; /* Gap between grid items */
  margin: 30px 10px 30px 10px;
`;
const Item = styled.div`
  font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
  font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
  margin: auto;
  font-weight: 600;
`;

import { RxHamburgerMenu } from 'react-icons/rx';
import { PiMagnifyingGlass } from 'react-icons/pi';
import { GoBell } from 'react-icons/go';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Svg } from '../../logo.svg';

export default function Headerbar({ openModal, openSearch }) {
  return (
    <Header>
      <Element onClick={openModal}>
        <RxHamburgerMenu
          size="24"
          color="black"
        />
      </Element>
      <Logo>
        <Link
          to="/"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <Svg width="25vw" />
        </Link>
      </Logo>
      <Element2>
        <PiMagnifyingGlass
          size="26"
          color="black"
          onClick={openSearch}
        />
        <Link to="/notice">
          <GoBell
            size="26"
            color="black"
          />
        </Link>
      </Element2>
    </Header>
  );
}

const Logo = styled.div`
  /* display: flex; */
  font-size: 24px;
  font-weight: 600;
  font-family: 'Noto Sans KR';
`;

const Header = styled.header`
  text-align: center;
  z-index: 100;
  height: 42px;
  background-color: rgba(255, 255, 255, ${(props) => props.trans});
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Element = styled.div`
  width: 20%;
  display: flex;
`;

const Element2 = styled.div`
  width: 20%;
  display: flex;
  gap: 5px;
  justify-content: flex-end;
  align-items: center;
`;

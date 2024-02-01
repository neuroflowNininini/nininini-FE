import React, { useState } from 'react';
import { BiHomeAlt2, BiMenu } from 'react-icons/bi';
import { BsPersonCircle, BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Navbar({ openModal }) {
  const [activeNav, setActiveNav] = useState(1);

  return (
    <Nav>
      <Link to="/" className="nav-link" onClick={() => setActiveNav(1)}>
        <Element>
          <BiHomeAlt2 className={activeNav === 1 ? "nav-item active" : "nav-item"} size="26" color="black" />
        </Element>
      </Link>
      {/* <Link to="/menu" className={activeTab === 'menu' ? 'active' : ''}> */}
      <Element onClick={openModal}>
        <BiMenu className={activeNav === 2 ? "nav-item active" : "nav-item"} size="26" color="black" />
      </Element>
      {/* </Link> */}
      <Link to="/mypage" className="nav-link" onClick={() => setActiveNav(3)}>
        <Element>
          <BsPersonCircle size="26" color="black" className={activeNav === 3 ? "nav-item active" : "nav-item"} />
        </Element>
      </Link>
      <Link to="/cart" className="nav-link" onClick={() => setActiveNav(4)}>
        <Element>
          <BsBag className={activeNav === 4 ? "nav-item active" : "nav-item"} size="26" color="black" />
        </Element>
      </Link>
    </Nav >
  );
}
const Element = styled.div`
margin:5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Nav = styled.nav`
position: fixed;
bottom: 0;
width: 100%;
background-color: #eee;
display: flex;
justify-content: space-around;
align-items: center;
height: 50px;
`;
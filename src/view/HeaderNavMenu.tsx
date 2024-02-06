import { useState } from 'react';
import styled from 'styled-components';
import Header from '~/components/common/Header';
import Search from '~/components/common/Search';
import MenuModal from './components/MenuModal';

export default function HeaderNavMenu() {
  const [showModal, setShowModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const openSearch = () => {
    setShowSearch(true);
  };
  const closeSearch = () => {
    setShowSearch(false);
  };

  return (
    <MenuWrap>
      <SideBarWrap>
        {showModal && (
          <MenuModal
            username={'김니니 님'}
            // showModal={showModal}
            closeModal={closeModal}
          />
        )}
      </SideBarWrap>
      {showSearch && <Search closeModal={closeSearch} />}
      <HeaderWrap>
        <Header
          openModal={openModal}
          openSearch={openSearch}
        />
      </HeaderWrap>
    </MenuWrap>
  );
}

const MenuWrap = styled.div`
  position: sticky;
  display: flex;
  justify-content: space-between;
  top: 0;
  width: 100%;
  z-index: 9999;
  background-color: #fff;
`;

const SideBarWrap = styled.div``;
const HeaderWrap = styled.div`
  width: 100%;
`;

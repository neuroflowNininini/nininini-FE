import Headerbar from "./components/Headerbar";
import Navbar from "./components/Navbar";
import MenuModal from "./components/MenuModal";
import { useState } from "react";
import styled from "styled-components";
import Search from "./pages/Search";

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
      {
        showModal && (<MenuModal username={"김니니 님"} closeModal={closeModal} />)}
      {
        showSearch && (<Search closeModal={closeSearch} />)}
      <Headerbar openModal={openModal} openSearch={openSearch} />
      <Navbar openModal={openModal} />
    </MenuWrap>
  )
}

const MenuWrap = styled.div`
position : fixed;
z-index : 999;
`
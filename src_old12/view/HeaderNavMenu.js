import Headerbar from "./components/Headerbar";
import Navbar from "./components/Navbar";
import MenuModal from "./components/MenuModal";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Search from "./pages/Search";

export default function HeaderNavMenu({ onTop, setOnTop, trans, setTrans }) {
  const [showModal, setShowModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    console.log("OnTop:", onTop); // setOnTop 확인
    console.log("Trans:", trans); // setTrans 확인

  }, [onTop, trans])
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
        showModal && (<MenuModal username={"김니니 님"} showModal={showModal} closeModal={closeModal} />)}
      {
        showSearch && (<Search closeModal={closeSearch} />)}
      <Headerbar onTop={onTop} setOnTop={(value) => {
        // 여기서 setOnTop을 직접 호출하고 값을 전달합니다.
        setOnTop(value);
      }} trans={trans}
        setTrans={(value) => { setTrans(value) }} openModal={openModal} openSearch={openSearch} />
      <Navbar openModal={openModal} />
    </MenuWrap>
  )
}

const MenuWrap = styled.div`
position : fixed;
z-index : 999;
`
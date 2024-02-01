import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';

export default function CartSelectDeleteModal({
  modalTitle,
  buttonText,
  setOpenModal,
  clickButton,
}) {
  return (
    <Modal _width="200px" _height="150px" setCheckOpenModal={setOpenModal}>
      <ModalTitle>{modalTitle}</ModalTitle>
      <ButtonWrap>
        <Button
          onClick={() => {
            setOpenModal(false)
          }
          }
        >
          취소하기
        </Button>
        <Button
          onClick={() => {
            setOpenModal(false)
            clickButton()
          }}
        >
          {buttonText}
        </Button>
      </ButtonWrap>
    </Modal>
  );
};

const ModalTitle = styled.h3`
    color : #666;
    font-size: var(--font-lg-small);
    font-weight: 500;
    margin : 30px 0px 20px 0px;
    padding : 5px;
    text-align : center;
`;
const Button = styled.div`
`;

const ButtonWrap = styled.div`
  display: flex;
  padding : 15px;
  justify-content: space-between;
`;

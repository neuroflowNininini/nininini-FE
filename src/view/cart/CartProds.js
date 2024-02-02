import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import CartSelectDeleteModal from './CartSelectDeleteModal';
import CartProdCard from './CartProdCard';
import { totalDummy } from '../../shared/dummy';

export default function CartProds({ cartProdsId, setCartProdsId, setTotalCartProds }) {
  const [checkedInputs, setCheckedInputs] = useState([...cartProdsId]);
  const [openDelete, setOpenDelete] = useState(false);
  const [cartList, setCartList] = useState([]);

  const changeHandler = (checked) => {
    if (checked) {
      let _storage = JSON.parse(localStorage.getItem('cartProds'));
      let updatedCheckedInputs = cartProdsId.slice(); // 기존 cartProdsId 값으로 시작

      for (let i = 0; i < _storage?.length; i++) {
        if (!updatedCheckedInputs.includes(_storage[i].id)) {
          updatedCheckedInputs.push(_storage[i].id); // 중복 아이템은 추가하지 않음
        }
      }
      setCheckedInputs(updatedCheckedInputs);
    } else {
      setCheckedInputs([]);
    }
  };

  const clickDeleteCart = () => {
    let _storage = JSON.parse(localStorage.getItem('cartProds'));

    if (_storage !== null) {
      _storage = _storage.filter((data) => {
        return !checkedInputs.includes(data.id);
      });
    }

    let _cartPordsId = cartProdsId.filter((data) => {
      return !checkedInputs.includes(data);
    });
    setCartProdsId(_cartPordsId);

    localStorage.setItem('cartProds', JSON.stringify(_storage));
    const newCartList = totalDummy.filter((item) => _cartPordsId.includes(item.id));
    setCartList([...newCartList]);
  };
  useEffect(() => {
    if (checkedInputs.length === 0) {
      return;
    }
  }, [checkedInputs]);

  useEffect(() => {
    if (cartProdsId.length === 0) {
      return;
    }
    setCheckedInputs([...cartProdsId]);
    const newCartList = totalDummy.filter((item) => cartProdsId.includes(item.id));
    setCartList([...newCartList]);
  }, [cartProdsId]);

  return (
    <CartProdsWrap data-testid="cartProds">
      <CartAllSelectWrap>
        <CartAllSelectCheckBox
          type="checkbox"
          onChange={(e) => {
            changeHandler(e.currentTarget.checked);
          }}
          checked={checkedInputs.length === cartProdsId.length}
        />
        <CartAllSelectText>
          전체선택 ({checkedInputs.length}/{cartProdsId.length})
        </CartAllSelectText>
        <DeleteSelectedWrap>
          {openDelete && (
            <CartSelectDeleteModal
              testId="deleteModal"
              modalTitle="선택한 상품을 삭제하시겠습니까?"
              buttonText="확인"
              setOpenModal={setOpenDelete}
              clickButton={clickDeleteCart}
            />
          )}
          <DeleteSelected
            onClick={() => {
              if (checkedInputs.length !== 0) {
                setOpenDelete(true);
              }
            }}
          >
            선택삭제
          </DeleteSelected>
        </DeleteSelectedWrap>
      </CartAllSelectWrap>
      {cartList &&
        cartList.map((prod, i) => {
          return (
            <CartProdCard
              key={i}
              cardData={prod}
              cartProdsId={cartProdsId}
              setCheckedInputs={setCheckedInputs}
              checkedInputs={checkedInputs}
              setCartProdsId={setCartProdsId}
              setTotalCartProds={setTotalCartProds}
            />
          );
        })}
    </CartProdsWrap>
  );
}
const CartProdsWrap = styled.div``;

const DeleteSelectedWrap = styled.div``;
const DeleteSelected = styled.p`
  margin-left: 30px;
  display: flex;
  align-items: center;
  font-weight: 500;
`;
const CartAllSelectWrap = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
`;

const CartAllSelectCheckBox = styled.input`
  appearance: none;
  margin-right: 10px;
  border: 1.5px solid gainsboro;
  border-radius: 0.25rem;
  width: 18px;
  height: 18px;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: black;
  }
`;

const CartAllSelectText = styled.p`
  font-weight: 500;
`;

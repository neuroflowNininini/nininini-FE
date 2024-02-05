import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import QuantityCounter from '../components/element/QuantityCounter';
import theme from '../../shared/theme';

export default function CartProdCard({
  cardData,
  cartProdsId,
  setCheckedInputs,
  checkedInputs,
  setCartProdsId,
  setTotalCartProds,
}) {
  const navigate = useNavigate();
  const [quantity, setquantity] = useState(1);

  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  const total = formatNumberWithCommas(12900 * Number(quantity));

  const changeHandler = (checked, id) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
      // setCartProdsId([...cartProdsId, id])
    } else {
      setCheckedInputs(checkedInputs.filter((el) => el !== id));
      // setCartProdsId(cartProdsId.filter((el) => el !== id));
    }
  };

  const clickDeleteCart = () => {
    let _storage = JSON.parse(localStorage.getItem('cartProds'));

    if (_storage !== null) {
      _storage = _storage.filter((data) => {
        return data.id !== cardData.id;
      });
    }

    let _cartPordsId = cartProdsId.filter((data) => {
      return data !== cardData.id;
    });
    setCartProdsId(_cartPordsId);
    localStorage.setItem('cartProds', JSON.stringify(_storage));
  };
  useEffect(() => {
    let _storage = JSON.parse(localStorage.getItem('cartProds'));

    for (let i = 0; i < _storage?.length; i++) {
      if (cardData.id === _storage[i].id) {
        setquantity(_storage[i].quantity);
      }
    }
  }, []);
  useEffect(() => {
    let _storage = JSON.parse(localStorage.getItem('cartProds'));

    if (!_storage === undefined) {
      return;
    }

    for (let i = 0; i < _storage?.length; i++) {
      if (_storage[i].id === cardData.id) {
        _storage[i].quantity = quantity;
      }
    }

    localStorage.setItem('cartProds', JSON.stringify(_storage));
    setTotalCartProds(_storage);
  }, [quantity]);

  return (
    <CartProdCardWrap>
      <CardWrap>
        <CardCheckBox
          id={cardData.id}
          type="checkbox"
          onChange={(e) => {
            changeHandler(e.currentTarget.checked, cardData.id);
          }}
          checked={checkedInputs.includes(cardData.id) ? true : false}
        />
        <CardContWrap>
          <ProdTitle
            onClick={() => {
              navigate(`/product/${cardData.id}`);
            }}
          ></ProdTitle>
          <ImageBox src={cardData.pics[0]} />
          <ProdCardInfoWrap>
            <ContentWrap>
              <NameQ>
                <Link
                  to={`/product/${cardData.id}`}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <NameWrap>{cardData.name}</NameWrap>
                </Link>
                <QWrap>({quantity}개)</QWrap>
              </NameQ>
              <CostWrap>{total}원</CostWrap>
              <QuantityCounter
                initialQuantity={quantity}
                onQuantityChange={setquantity}
              />
            </ContentWrap>
          </ProdCardInfoWrap>
        </CardContWrap>
        <DeleteWrap
          className="delete"
          onClick={clickDeleteCart}
        >
          X
        </DeleteWrap>
      </CardWrap>
    </CartProdCardWrap>
  );
}
const NameWrap = styled.div`
  display: flex;
  font-weight: 500;
`;
const ImageBox = styled.img`
  position: absolute;
  top: 20px;
  left: 35px;
  width: 32vw;
  height: 16vh;
  object-fit: cover;
`;
const ContentWrap = styled.div`
  display: block;
  position: absolute;
  top: 20px;
  left: 40vw;
  margin: 10px 20px;
`;
const NameQ = styled.div`
  display: block;
  align-items: center;
  text-align: left;
  margin-bottom: 5px;
`;
const QWrap = styled.div`
  font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.xsmall};
  display: flex;
  margin-left: 5px;
`;
const CartProdCardWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 0px 10px;
`;

const CardWrap = styled.div`
  position: relative;
  margin: auto;
  padding: 10px;
  width: calc(100vw - 30px);
  height: 18vh;
  display: flex;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #ddd;
`;

const CardCheckBox = styled.input`
  position: absolute;
  top: 5px;
  left: 5px;
  appearance: none;
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

const CardContWrap = styled.div`
  margin: auto;
  display: flex;
`;

const ProdTitle = styled.h2`
  margin-bottom: 4px;
  font-weight: 600;
  cursor: pointer;
`;

const ProdCardInfoWrap = styled.div`
  display: block;
  justify-content: flex-end;
  align-items: flex-end;
`;

const DeleteWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const CostWrap = styled.div`
  display: flex;
  color: red;
  margin-bottom: 10px;
`;

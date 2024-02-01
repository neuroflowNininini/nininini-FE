export const clickAddCart = (id, quantity) => {
  console.log("장바구니 추가", id, quantity)
  if (!localStorage.getItem("cartProds")) {
    localStorage.setItem("cartProds", JSON.stringify([{
      id: id,
      quantity: quantity
    }]));
  }
  else {
    let _storage = JSON.parse(localStorage.getItem("cartProds"));
    let _data = []

    if (_storage === null) {
      localStorage.setItem("cartProds", JSON.stringify([{
        id: id,
        quantity: quantity
      }]));
      return;
    }

    let cartProd = {
      id: id,
      quantity: quantity
    }

    for (let i = 0; i < _storage.length; i++) {
      if (_storage[i].id === id) {
        _storage[i].quantity += quantity

        _data = [..._data, ..._storage]

        localStorage.setItem("cartProds", JSON.stringify(_data));
        return;
      }
    }

    _data = [..._storage, cartProd];
    localStorage.setItem("cartProds", JSON.stringify(_data));
  }
}
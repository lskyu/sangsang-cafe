import React from "react";
import { useCart } from "react-use-cart";

function Cart(props) {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) {
    return <h1 className="text-center">상품을 선택하십시오.</h1>;
  }
  return (
    <section className="py-3 container">
      <div className="row justify-content-left">
        <div className="col-12">
          <h5>
            종류 : {totalUniqueItems} 총 주문 양 : {totalItems}
          </h5>
          <table className="table table-light table-hover m-0">
            <thead>
                <td></td>
                <td>상품</td>
                <td>가격</td>
                <td></td>
                <td></td>
            </thead>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.img} style={{ height: "5.5rem" }} />
                    </td>
                    <td>{item.title}</td>
                    <td>x {item.quantity}</td>
                    <td>{item.price*item.quantity}₩</td>
                    <td>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                      >
                        제거
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h2>Total Price: {cartTotal} ₩</h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
            장바구니 비우기
          </button>
          <button className="btn btn-primary m-2">결제 하기</button>
        </div>
      </div>
    </section>
  );
}

export default Cart;

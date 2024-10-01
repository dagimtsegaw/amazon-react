import React, { useContext } from "react";
import classes from "./Cart.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import LayOut from "../../Components/LayOut/LayOut";

function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  // console.log(basket);

  const increment = (item) =>
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  const decrement = (id) =>
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h3>Hello</h3>
          <h4>Your shopping basket</h4>
          <hr />
          {basket?.length === 0 ? (
            <p>Oops! No item in your cart</p>
          ) : (
            basket?.map((item, id) => (
              <section className={classes.cart_product}>
                <ProductCard
                  product={item}
                  renderDesc={true}
                  flex={true}
                  key={id}
                  renderAdd={false}
                />
                <div className={classes.btn_container}>
                  <button
                    onClick={() => increment(item)}
                    className={classes.btn}
                  >
                    <FaPlus size={15} />
                  </button>
                  <span>{item.amount}</span>
                  <button
                    onClick={() => decrement(item.id)}
                    className={classes.btn}
                  >
                    <FaMinus size={15} />
                  </button>
                </div>
                <div className={classes.subtotal}>
                  <div>
                    <p>subtotal ({basket?.length} items)</p>
                    <CurrencyFormat amount={total} />
                  </div>
                  <span>
                    <input type="checkbox" />
                    <small>This order contains a gift</small>
                  </span>
                  <Link to="/payments">Continue to check out</Link>
                </div>
              </section>
            ))
          )}
        </div>
      </section>
    </LayOut>
  );
}

export default Cart;

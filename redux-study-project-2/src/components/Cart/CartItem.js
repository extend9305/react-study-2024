import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { CartActions } from "../../store/mycart-slice";
const CartItem = (props) => {
  const { id, title, price, quantity, total } = props.item;
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(
      CartActions.addItemToCart({
        id: id,
        name: title,
        quantity : quantity,
        totalPrice : total,
        price: price,
      })
    );
  };

  const decrementHandler = () => {
    dispatch(CartActions.removeItemToCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
           <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementHandler}>-</button>
          <button onClick={incrementHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { CartActions } from "../../store/mycart-slice.js";
const ProductItem = (props) => {
  const { id, title, price, description } = props;

  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      CartActions.addItemToCart({
        id,
        title,
        price,
        description,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

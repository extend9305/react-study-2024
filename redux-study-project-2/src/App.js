import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/Notification/Notification";
import { sendCartData,fetchCartData  } from "./store/cart-action.js";

let initial = true;
function App() {
  const cart = useSelector((state) => state.cart);
  const cartVisible = useSelector((state) => state.ui.cartIsVisible);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(()=>{
    dispatch(fetchCartData());
  },[dispatch])

  useEffect(() => {
    if(initial){
      initial = false;
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart))
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message }
        />
      )}
      <Layout>
        {cartVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;

import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart);
  const cartVisible = useSelector((state) => state.ui.cartIsVisible);

  useEffect(() => {
     const sendCartData = async () =>{
      const response = await fetch(
        "https://react-backend-91eb5-default-rtdb.firebaseio.com/cart.json ",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if(!response.ok){
        new Error('Sending cart data failed.')
      }
        const responseDate = await response.json();

    }
    
  }, [cart]);

  return (
    <Layout>
      {cartVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

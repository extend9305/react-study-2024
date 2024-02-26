import { uiActions } from "./ui-slice.js";
import { CartActions } from "./mycart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-backend-91eb5-default-rtdb.firebaseio.com/cart.json ",
        { method: "GET" }
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Could not fetch cart data.");
      }
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        CartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sent cart data failed.",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "peding",
        title: "Sending...",
        message: "Sending cart data.",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-backend-91eb5-default-rtdb.firebaseio.com/cart.json ",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully.",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sent cart data failed.",
        })
      );
    }
  };
};

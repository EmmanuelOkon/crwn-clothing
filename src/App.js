import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";

import Home from "./routes/home/homeComponent";
import Navigation from "./routes/navigation/navigationComponent";
import Auth from "./routes/auth/authComponent";
import Shop from "./routes/shop/shopComponents";
import Checkout from "./routes/checkout/checkoutComponent";
import { checkUserSession } from "./store/user/userAction";
import SignUp from "./routes/auth/signUpComponent";
import Toast from "./routes/toast/toast";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="toast" element={<Toast />} />
      </Route>
    </Routes>
  );
};

export default App;

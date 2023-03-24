import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";


import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebaseUtils";
import Home from "./routes/home/homeComponent";
import Navigation from "./routes/navigation/navigationComponent";
import Auth from "./routes/auth/authComponent";
import Shop from "./routes/shop/shopComponents";
import Checkout from "./routes/checkout/checkoutComponent";


import { setCurrentUser } from "./store/user/userAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;

  }, []);


  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />

      </Route>
    </Routes>
  );
};

export default App;

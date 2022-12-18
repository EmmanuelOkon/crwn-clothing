import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/homeComponent';
import Navigation from './routes/navigation/navigationComponent';
import Auth from './routes/auth/authComponent';
import Shop from './routes/shop/shopComponents';
import Checkout from './routes/checkout/checkoutComponent';
import Example from "./pages/react/react.jsx"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Auth />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='eg' element={<Example />} />
      </Route>
    </Routes>
  );
};

export default App;

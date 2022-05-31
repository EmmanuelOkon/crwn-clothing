import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/homeComponent';
import Navigation from './routes/navigation/navigationComponent';
import Auth from './routes/auth/authComponent';

const Shop = () => {
  return <h1>Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default App;

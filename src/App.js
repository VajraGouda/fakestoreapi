import './App.css';
import ProductElectronics from './components/productElectronics';
import ProductJewelery from './components/productJewelery';
import ProductMen from './components/productMen';
import ProductWomen from './components/productWomen';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetailPage from './pages/ProductDetailPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import WishList from './pages/WishList';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/women' element={<ProductWomen/>} />
      <Route path='/men' element={<ProductMen/>} />
      <Route path='/jewelery' element={<ProductJewelery/>} />
      <Route path='/electronics' element={<ProductElectronics/>} />
      <Route path='/products/detail/:id' element={<ProductDetailPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/cart' element={<CartPage/>} />
      <Route path='/wishlist' element={<WishList/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;

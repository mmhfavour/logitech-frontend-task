import Header from './components/header';
import Wishlist from './components/wishlist';
import Footer from './components/footer';
import { useEffect, useState } from 'react';
import { getProducts } from './services/products';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => initProductsData, []);

  async function initProductsData() {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  function removeProduct(productId) {
    setProducts(products.filter(product => product.id !== productId));
  }

  function resetProducts() {
    initProductsData();
  }

  
  return (
    <div className='container p-2'>
      <Header />
      <Wishlist products={products} removeProduct={ removeProduct } />
      <Footer resetProducts={ resetProducts } />
    </div>
  );
}

export default App;

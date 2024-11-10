import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import { CartProvider } from './context/CartProvider';

function App() {
  return (
    <CartProvider>
      <Router>
        {/* Navbar */}
        <Navbar />
        
        <main className="bg-gray-50 min-h-screen py-6 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;

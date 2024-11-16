import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Home } from '@/pages/Home';
import { Product } from '@/pages/Product';
import { Cart } from '@/pages/Cart';
import { Checkout } from '@/pages/Checkout';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-green-50 flex flex-col">
        <Navbar />
        <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
        </main>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
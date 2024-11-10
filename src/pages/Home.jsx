import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Récupérer les produits depuis l'API Fake Store
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Erreur de récupération des produits:', error));
  }, []);

  return (
    <div className="bg-[#f8fafb] min-h-screen py-16 px-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#2a9d8f] mb-6">Bienvenue chez EcoShop</h1>
        <p className="text-lg text-[#264653] max-w-2xl mx-auto">
          Découvrez notre collection de produits écoresponsables qui allient durabilité et élégance.
        </p>
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;

import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BsCartPlus } from 'react-icons/bs';
import { CartContext } from '../context/CartContext';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addItem } = useContext(CartContext); // Utiliser le contexte du panier

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error('Erreur de récupération du produit:', error));
  }, [id]);

  if (!product) return <p className="text-center text-gray-500">Chargement...</p>;

  return (
    <div className="container mx-auto py-16 px-6">
      <div className="flex flex-col md:flex-row items-start bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105">
        
        {/* Product Image */}
        <div className="w-full md:w-1/2 h-96 bg-gray-100 p-6 flex items-center justify-center">
          <img src={product.image} alt={product.title} className="max-h-full object-contain" />
        </div>
        
        {/* Product Details */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
          
          <div className="flex items-center mb-6">
            <p className="text-2xl font-semibold text-green-600">${product.price}</p>
            <span className="text-gray-500 ml-4 line-through">${(product.price * 1.2).toFixed(2)}</span>
            <span className="ml-2 text-sm font-medium text-red-600">-20% OFF</span>
          </div>
          
          <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
          
          {/* Add to Cart Button */}
          <button
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white text-lg rounded-full shadow-lg hover:bg-green-700 transition duration-300"
            onClick={() => addItem(product)} // Ajouter au panier
          >
            <BsCartPlus className="mr-2 text-xl" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CartContext } from '../context/CartContext';
import { BsCartPlus } from 'react-icons/bs';
import { useContext } from 'react';

function ProductCard({ product }) {
  const { addItem } = useContext(CartContext);

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out p-6 flex flex-col h-full">
      {/* Image du produit */}
      <div className="relative w-full h-60 mb-6 overflow-hidden rounded-lg">
        <img
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
          src={product.image}
          alt={product.title}
        />
      </div>

      {/* Informations sur le produit */}
      <div className="flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-[#264653] mb-2 truncate">{product.title}</h2>
        <p className="text-md text-[#6c757d] mb-4 flex-grow">
          {product.description.length > 100
            ? product.description.substring(0, 100) + "..."
            : product.description}
        </p>

        {/* Prix */}
        <p className="text-lg font-bold text-[#2a9d8f] mb-6">
          ${product.price.toFixed(2)}
        </p>

        {/* Actions : Voir produit et Ajouter au panier */}
        <div className="flex justify-between items-center mt-auto">
          {/* Lien vers la page produit */}
          <Link
            to={`/product/${product.id}`}
            className="text-[#2a9d8f] text-sm font-medium hover:text-[#264653] transition duration-300"
          >
            Voir le produit
          </Link>

          {/* Bouton Ajouter au panier */}
          <button
            onClick={() => addItem(product)} // Ajouter au panier
            className="flex items-center px-6 py-3 bg-[#2a9d8f] text-white text-lg font-semibold rounded-full shadow-md hover:bg-[#21867a] transition duration-300"
          >
            <BsCartPlus className="mr-2 text-xl" />
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;

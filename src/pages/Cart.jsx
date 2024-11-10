import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { BsTrash } from 'react-icons/bs';
//import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, removeItem, addItem, removeAllOfItem,removeAllItems } = useContext(CartContext);
  const [isCheckingOut, setIsCheckingOut] = useState(false); // État pour la simulation du passage à la caisse
  //const navigate = useNavigate(); // Pour la navigation vers une page de paiement (si nécessaire)

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    setIsCheckingOut(true); // Simuler l'action de passer à la caisse

    // Simulation d'un délai de paiement
    setTimeout(() => {
      setIsCheckingOut(false);
      // Si vous avez une page de paiement, vous pouvez rediriger ici
      // navigate('/checkout'); // Redirige vers la page de paiement réell
      removeAllItems()
      alert("Votre commande a été passée avec succès !"); // Message de simulation
    }, 2000); // Délai de simulation (2 secondes)
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Votre Panier</h1>

      {/* Message si panier vide */}
      {cartItems.length === 0 ? (
        <p className="text-center text-xl text-gray-500">Votre panier est vide.</p>
      ) : (
        <div className="space-y-8">
          {/* Liste des articles */}
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out border border-gray-200">
              {/* Image et détails */}
              <div className="flex items-center">
                <img src={item.image} alt={item.title} className="w-28 h-28 object-cover rounded-lg mr-6 shadow-sm transition-transform duration-300 transform hover:scale-105" />
                <div className="flex flex-col">
                  <h2 className="text-xl font-semibold text-gray-700">{item.title}</h2>
                  <p className="text-lg text-gray-500">${item.price}</p>
                  <div className="flex items-center mt-2 space-x-3">
                    {/* Contrôles de quantité */}
                    <button
                      onClick={() => addItem(item)}
                      className="bg-green-500 text-white px-3 py-1 rounded-full shadow-md hover:bg-green-600 transition duration-200">
                      +
                    </button>
                    <span className="text-lg font-medium">{item.quantity}</span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-full shadow-md hover:bg-red-600 transition duration-200">
                      -
                    </button>
                  </div>
                </div>
              </div>

              {/* Bouton supprimer */}
              <button
                onClick={() => removeAllOfItem(item.id)}
                className="text-red-600 text-2xl hover:text-red-800 transition duration-200">
                <BsTrash />
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="flex justify-between items-center bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-700">Total</h2>
            <p className="text-3xl font-extrabold text-green-600">${getTotal()}</p>
          </div>

          {/* CTA Final */}
          <div className="flex justify-end mt-8">
            <button
              onClick={handleCheckout} 
              className={`px-8 py-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 ${isCheckingOut ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={isCheckingOut} // Désactiver le bouton lors de la simulation
            >
              {isCheckingOut ? 'Traitement...' : 'Passer à la caisse'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

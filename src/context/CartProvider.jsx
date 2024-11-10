import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from './CartContext';

export function CartProvider({ children }) {
  // Utiliser le localStorage pour récupérer les articles au chargement
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  // Sauvegarder les articles dans le localStorage chaque fois que le panier change
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } else {
      localStorage.removeItem('cartItems'); // Supprimer le panier s'il est vide
    }
  }, [cartItems]);

  // Ajouter un article au panier
  const addItem = (newItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id);

      if (existingItem) {
        // Augmenter la quantité de l'article existant
        return prevItems.map((item) =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Ajouter un nouvel article avec une quantité de 1
        return [...prevItems, { ...newItem, quantity: 1 }];
      }
    });
  };

  // Supprimer un article du panier
  const removeItem = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // Filtrer pour retirer les articles dont la quantité est 0
    );
  };

  // Vider complètement un article du panier
  const removeAllOfItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Vider complètement le panier
  const removeAllItems = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, removeAllOfItem, removeAllItems }}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

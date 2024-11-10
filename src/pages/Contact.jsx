import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [statusMessage, setStatusMessage] = useState('');

  // Fonction pour gérer le changement des champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Fonction pour simuler l'envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulation de l'envoi
    setStatusMessage('Envoi en cours...');

    // Simuler un délai d'envoi
    setTimeout(() => {
      setStatusMessage('Votre message a été envoyé avec succès !');
      setFormData({ name: '', email: '', message: '' }); // Réinitialiser le formulaire après l'envoi
    }, 2000); // Simule un délai de 2 secondes pour l'envoi
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-extrabold text-green-700 mb-8 text-center">Contactez-Nous</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nom"
            className="w-full px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            rows="6"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-green-600 text-white text-lg rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300"
        >
          Envoyer
        </button>
      </form>
      
      {statusMessage && (
        <div className="mt-6 text-center text-xl">
          <p className={statusMessage.includes('succès') ? 'text-green-600' : 'text-red-600'}>
            {statusMessage}
          </p>
        </div>
      )}
    </div>
  );
}

export default Contact;

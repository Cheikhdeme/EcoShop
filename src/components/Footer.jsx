const Footer = () => {
    return (
      <footer className="bg-[#264653] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Logo and Description */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-green-400">EcoShop</h2>
              <p className="mt-2 text-gray-300">Votre boutique éco-responsable pour des produits de qualité.</p>
            </div>
  
            {/* Navigation Links */}
            <div className="flex space-x-6 text-center md:text-left">
              <a href="/" className="hover:text-green-300 transition duration-300">
                Accueil
              </a>
              <a href="/contact" className="hover:text-green-300 transition duration-300">
                Contact
              </a>
              <a href="/about" className="hover:text-green-300 transition duration-300">
                À propos
              </a>
              <a href="/terms" className="hover:text-green-300 transition duration-300">
                Conditions
              </a>
            </div>
  
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a href="https://facebook.com" className="hover:text-green-300 transition duration-300" aria-label="Facebook">
                <span>🌐</span>
              </a>
              <a href="https://twitter.com" className="hover:text-green-300 transition duration-300" aria-label="Twitter">
                <span>🐦</span>
              </a>
              <a href="https://instagram.com" className="hover:text-green-300 transition duration-300" aria-label="Instagram">
                <span>📷</span>
              </a>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="mt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} EcoShop. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
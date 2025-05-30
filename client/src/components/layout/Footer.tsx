import { Link } from 'wouter';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-8 pb-4 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-2xl font-display font-bold mb-6">Harmony Balance</h3>
            <p className="opacity-80 mb-6">
              Natural wellness products designed to bring harmony to your body and mind.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors duration-300">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><Link href="/shop" className="opacity-80 hover:opacity-100 transition-opacity duration-300">All Products</Link></li>
              <li><Link href="/shop" className="opacity-80 hover:opacity-100 transition-opacity duration-300">Facial Care</Link></li>
              <li><Link href="/shop" className="opacity-80 hover:opacity-100 transition-opacity duration-300">Body Rituals</Link></li>
              <li><Link href="/shop" className="opacity-80 hover:opacity-100 transition-opacity duration-300">Aromatherapy</Link></li>
              <li><Link href="/shop" className="opacity-80 hover:opacity-100 transition-opacity duration-300">Gift Sets</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="opacity-80 hover:opacity-100 transition-opacity duration-300">About Us</Link></li>
              <li><Link href="/sustainability" className="opacity-80 hover:opacity-100 transition-opacity duration-300">Sustainability</Link></li>
              <li><Link href="/ingredients" className="opacity-80 hover:opacity-100 transition-opacity duration-300">Ingredients</Link></li>
              <li><Link href="/blog" className="opacity-80 hover:opacity-100 transition-opacity duration-300">Blog</Link></li>
              <li><Link href="/contact" className="opacity-80 hover:opacity-100 transition-opacity duration-300">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Help</h4>
            <ul className="space-y-3">
              <li><Link href="/shipping-returns" className="opacity-80 hover:opacity-100 transition-opacity duration-300">Shipping & Returns</Link></li>
              <li><Link href="/faq" className="opacity-80 hover:opacity-100 transition-opacity duration-300">FAQ</Link></li>
              <li><Link href="/privacy-policy" className="opacity-80 hover:opacity-100 transition-opacity duration-300">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="opacity-80 hover:opacity-100 transition-opacity duration-300">Terms of Service</Link></li>
              <li><Link href="/track-order" className="opacity-80 hover:opacity-100 transition-opacity duration-300">Track Order</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-12 pt-8 text-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Harmony Balance. All rights reserved. Designed with love for natural wellness.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

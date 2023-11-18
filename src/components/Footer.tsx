// Footer.tsx

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import useCart from "../hooks/useCart";

type PropsType = {
  viewCart: boolean;
};

const Footer = ({ viewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();
  const year: number = new Date().getFullYear();

  const commonContent = (
    <div className="common-content">
      <div className="social-links">
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://twitter.com"><FaTwitter /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://instagram.com"><FaLinkedin /></a>
      </div>
      <h3>BenRaw.co SA &copy; {year}</h3>
      <p>Moreno 180, Rosario</p>
      <p>Envíos por OCA GRATIS, a coordinar con el proveedor a la hora de finalizar la compra!</p>
    </div>
  );

  const cartContent = <p>Shopping Cart &copy; {year}</p>;

  return (
    <footer className={`footer ${viewCart ? 'cart-footer' : ''}`}>
      <div className="footer-content">
        {/* ... el resto del contenido sigue igual */}
      </div>

      <div className="common-content">
        {viewCart ? cartContent : commonContent}
      </div>
    </footer>
  );
};

export default Footer;

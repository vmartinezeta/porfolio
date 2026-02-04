import './Footer.css';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="creditos">
        <p >© {new Date().getFullYear()} Everest Portfolio. Todos los derechos reservados.</p>
        <p >Inspirado en la grandeza del Monte Everest</p>
      </div>
    </footer>
  );
};

export default Footer;
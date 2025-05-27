import { RiArrowUpLine } from "react-icons/ri";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="copyright">
          <p>©Copyright 2025. Todos los derechos reservados</p>
        </div>
        <div className="copyright">
          <p>Desarrolado por Paul</p>
        </div>
        <Link to="inicio" smooth={true} duration={500} className="scroll-top">
          <RiArrowUpLine />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

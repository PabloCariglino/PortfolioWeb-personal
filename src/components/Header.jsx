import { useEffect, useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { Link } from "react-scroll";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 70);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={isSticky ? "sticky" : ""}>
      <a href="#" className="logo">
        Paul
      </a>
      <ul className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="inicio" smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="sobremi" smooth={true} duration={500}>
            Sobre mí
          </Link>
        </li>
        <li>
          <Link to="proyectos" smooth={true} duration={500}>
            Proyectos
          </Link>
        </li>
        <li>
          <Link to="contacto" smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>
      <div
        className="bx bx-menu"
        id="menu-icon"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isMenuOpen ? <RiCloseLine size={34} /> : <RiMenu3Line size={34} />}
      </div>
    </header>
  );
};

export default Header;

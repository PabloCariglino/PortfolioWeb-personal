import {
  RiArrowDownLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailLine,
} from "react-icons/ri";
import cvpablo from "../assets/cv-pablo.pdf";
import perfilImg from "../assets/img-perfil-pablo.jpg";

const Inicio = () => {
  const handleCopyEmail = () => {
    const email = "pablo.cariglino.developer@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      alert("Correo copiado: " + email);
    });
  };

  return (
    <section className="inicio" id="inicio">
      <div className="inicio-text">
        <h5>Hola, soy Pablo,</h5>
        <h1>
          Full Stack <br /> Developer
        </h1>
        <div className="social">
          <a href="#">Seguime en:</a>
          <a
            href="https://github.com/PabloCariglino"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiGithubFill size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/pablo-cariglino-8032b4274/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiLinkedinBoxFill size={40} />
          </a>
        </div>
        <div className="button">
          <a href="#" onClick={handleCopyEmail} className="btn">
            <RiMailLine /> E-Mail
          </a>
          <a href={cvpablo} download className="btn btn-secondary">
            <RiArrowDownLine /> Descargar CV
          </a>
        </div>
      </div>
      <div className="inicio-img">
        <img src={perfilImg} alt="Perfil Pablo" />
        {/* <img src="/assets/img-perfil-pablo.jpg" alt="Perfil Pablo" /> */}
      </div>
    </section>
  );
};

export default Inicio;

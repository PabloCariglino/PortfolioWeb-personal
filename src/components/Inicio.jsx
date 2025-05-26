import {
  RiArrowDownLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailLine,
} from "react-icons/ri";

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
          <a href="#" onClick={handleCopyEmail}>
            <RiMailLine /> E-Mail
          </a>
          <a href="/assets/cv-pablo.pdf" download className="btn2">
            <RiArrowDownLine /> Descargar CV
          </a>
        </div>
      </div>
      <div className="inicio-img">
        <img src="/assets/img-perfil-pablo.jpg" alt="Perfil" />
      </div>
    </section>
  );
};

export default Inicio;

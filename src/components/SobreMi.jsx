import {
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { RiGithubFill } from "react-icons/ri";
import { SiJavascript, SiSpring } from "react-icons/si";

const SobreMi = () => {
  // Lista de skills con sus íconos y colores nativos
  const skills = [
    { name: "Java", icon: <FaJava size={40} color="#5382A1" /> },
    { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" /> },
    { name: "React", icon: <FaReact size={40} color="#61DAFB" /> },
    { name: "HTML", icon: <FaHtml5 size={40} color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt size={40} color="#1572B6" /> },
    { name: "MySQL", icon: <FaDatabase size={40} color="#00758F" /> },
    { name: "Spring Boot", icon: <SiSpring size={40} color="#6DB33F" /> },
    { name: "Spring Security", icon: <SiSpring size={40} color="#6DB33F" /> },
    { name: "Bootstrap", icon: <FaBootstrap size={40} color="#7952B3" /> },
    { name: "Node.js", icon: <FaNodeJs size={40} color="#68A063" /> },
    { name: "GitHub", icon: <RiGithubFill size={40} color="#FFFFFF" /> },
  ];

  return (
    <section className="sobremi" id="sobremi">
      <div className="center-sobremi">
        <div className="h-main">
          <div className="h-text">
            <h2>Sobre mí</h2>
            <div className="h-btn">
              {/* <a href="#" className="hh-btn">
                Ver más <RiArrowRightLine />
              </a> */}
            </div>
          </div>
          <p>
            Soy un desarrollador web full-stack con experiencia en todo el
            proceso de desarrollo, desde el inicio de un proyecto, su
            desarrollo, su finalización y su mantenimiento a lo largo del
            tiempo. Disfruto involucrarme en cada etapa, escribiendo código
            limpio y eficiente, y adaptándome a las tecnologías que el proyecto
            requiera.
          </p>
          <p>
            He trabajado en proyectos que implementaban dinámicas Scrum y Agile,
            participando activamente en sprints, reuniones periódicas y todo lo
            que implica colaborar en equipo para entregar resultados rápidos y
            de calidad. Además, me encargo de todo lo necesario para construir
            aplicaciones web y APIs REST, desde el diseño hasta la
            implementación y las pruebas.
          </p>
          <p>
            Gracias a mi experiencia en roles administrativos y equipos
            variados, he desarrollado habilidades blandas que fortalecen mi
            comunicación, mi capacidad para trabajar en equipo y mi
            adaptabilidad a los procesos.
          </p>
        </div>
        <div className="h-text">
          <h2>Skills</h2>
          <div className="h-btn">
            {/* <a href="#" className="hh-btn">
              Ver más <RiArrowRightLine />
            </a> */}
          </div>
        </div>

        <div className="sobremi-contenido">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-icon">
              {skill.icon}
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SobreMi;

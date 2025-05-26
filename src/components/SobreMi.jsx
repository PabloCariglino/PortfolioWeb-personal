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
            proceso de desarrollo web, desde el inicio de un proyecto,
            desarrollo, su finalizacion y mantenimiento en el tiempo. Me gusta
            involucrarme en cada etapa, escribiendo código limpio y eficiente, y
            adaptándome a las tecnologías que el proyecto necesite. He trabajado
            en proyectos donde aplicamos dinámicas Scrum y Agile, participando
            activamente en sprints, reuniones peridodicas y todo lo que implica
            colaborar en equipo para entregar resultados rápidos y de calidad.
            Además, me encargo de todo lo necesario para construir aplicaciones
            web y APIs REST, desde el diseño hasta la implementación y las
            pruebas. Gracias a mi paso por roles administrativos y equipos
            variados, he desarrollado habilidades blandas que ayudan a mi
            comunicacion, trabajar en equipo y adaptarme al proceso.
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

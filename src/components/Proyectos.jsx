import { useState } from "react";
import { RiGithubFill, RiGlobalLine } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Proyectos = () => {
  // Estado para manejar la visualización en pantalla completa
  const [fullscreenMedia, setFullscreenMedia] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // Configuración del carrusel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  // Lista de proyectos con imágenes, video, repositorio y enlace web
  const projects = [
    {
      media: [
        {
          type: "image",
          src: "/assets/proyecto1.jpg",
          alt: "Proyecto 1 - Imagen 1",
        },
        {
          type: "image",
          src: "/assets/proyecto1-2.jpg",
          alt: "Proyecto 1 - Imagen 2",
        },
        {
          type: "video",
          src: "/assets/proyecto1-video.mp4",
          alt: "Proyecto 1 - Video",
        },
      ],
      tech: "HTML - CSS - JS",
      title: "NOMBRE DEL PROYECTO 1",
      repo: "https://github.com/tu-usuario/proyecto1",
      website: "https://proyecto1.com",
    },
    {
      media: [
        {
          type: "image",
          src: "/assets/proyecto2.jpg",
          alt: "Proyecto 2 - Imagen 1",
        },
        {
          type: "image",
          src: "/assets/proyecto2-2.jpg",
          alt: "Proyecto 2 - Imagen 2",
        },
        {
          type: "video",
          src: "/assets/proyecto2-video.mp4",
          alt: "Proyecto 2 - Video",
        },
      ],
      tech: "React - Node.js",
      title: "NOMBRE DEL PROYECTO 2",
      repo: "https://github.com/tu-usuario/proyecto2",
      website: "https://proyecto1.com",
    },
    {
      media: [
        {
          type: "image",
          src: "/assets/proyecto3.jpg",
          alt: "Proyecto 3 - Imagen 1",
        },
        {
          type: "image",
          src: "/assets/proyecto3-2.jpg",
          alt: "Proyecto 3 - Imagen 2",
        },
        {
          type: "video",
          src: "/assets/proyecto3-video.mp4",
          alt: "Proyecto 3 - Video",
        },
      ],
      tech: "Spring Boot - MySQL",
      title: "NOMBRE DEL PROYECTO 3",
      repo: "https://github.com/tu-usuario/proyecto3",
      website: "https://proyecto3.com",
    },
  ];

  // Manejar clic en imagen o video para mostrar en pantalla completa
  const handleMediaClick = (media, projectMedia, index) => {
    setFullscreenMedia({ projectMedia, currentIndex: index });
    setCurrentMediaIndex(index);
  };

  // Cerrar pantalla completa al hacer clic fuera
  const handleCloseFullscreen = () => {
    setFullscreenMedia(null);
    setCurrentMediaIndex(0);
  };

  // Navegar al siguiente o anterior en pantalla completa
  const handleNextMedia = () => {
    const projectMedia = fullscreenMedia.projectMedia;
    const nextIndex = (currentMediaIndex + 1) % projectMedia.length;
    setCurrentMediaIndex(nextIndex);
  };

  const handlePrevMedia = () => {
    const projectMedia = fullscreenMedia.projectMedia;
    const prevIndex =
      (currentMediaIndex - 1 + projectMedia.length) % projectMedia.length;
    setCurrentMediaIndex(prevIndex);
  };

  return (
    <>
      <section className="proyectos" id="proyectos">
        <div className="center-proyectos">
          <div className="h-main">
            <div className="h-text">
              <h2>Proyectos</h2>
              <div className="h-btn">
                {/* <a href="#" className="hh-btn">
                  Ver todos <RiArrowRightLine />
                </a> */}
              </div>
            </div>
          </div>
          <div className="proyectos-contenido">
            {projects.map((project, index) => (
              <div key={index} className="row">
                <Slider {...sliderSettings}>
                  {project.media.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleMediaClick(item, project.media, idx)}
                    >
                      {item.type === "image" ? (
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="carousel-media"
                        />
                      ) : (
                        <video
                          src={item.src}
                          alt={item.alt}
                          controls
                          className="carousel-media"
                        />
                      )}
                    </div>
                  ))}
                </Slider>
                <div className="main-row">
                  <div className="row-text">
                    <h5>{project.tech}</h5>
                    <h4>{project.title}</h4>
                  </div>
                </div>
                <div className="project-buttons">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiGithubFill size={20} /> Repositorio
                  </a>
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiGlobalLine size={20} /> Sitio Web
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pantalla completa para imágenes y videos con navegación */}
      {fullscreenMedia && (
        <div className="fullscreen-overlay" onClick={handleCloseFullscreen}>
          <div
            className="fullscreen-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="fullscreen-prev" onClick={handlePrevMedia}>
              &lt;
            </button>
            {fullscreenMedia.projectMedia[currentMediaIndex].type ===
            "image" ? (
              <img
                src={fullscreenMedia.projectMedia[currentMediaIndex].src}
                alt={fullscreenMedia.projectMedia[currentMediaIndex].alt}
              />
            ) : (
              <video
                src={fullscreenMedia.projectMedia[currentMediaIndex].src}
                alt={fullscreenMedia.projectMedia[currentMediaIndex].alt}
                controls
                autoPlay
              />
            )}
            <button className="fullscreen-next" onClick={handleNextMedia}>
              &gt;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Proyectos;

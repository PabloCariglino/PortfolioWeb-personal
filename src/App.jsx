import "./App.css";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Proyectos from "./components/Proyectos";
import SobreMi from "./components/SobreMi";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Inicio />
      <SobreMi />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;

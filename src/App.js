import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import './App.css';

// components/Projects/Projects.jsx (versión con API real)


function App() {
  return (
    <div className="everest-theme">
      {/* Navbar sticky por defecto */}
      <Navbar />

      {/* Añadir padding-top para que el banner no quede detrás del navbar */}
      <div className="content-wrapper">
        <header className="mountain-header">
          <div className="peak-decoration"></div>
          <h1 className="title">Portfolio Everest</h1>
          <p className="subtitle">Escalando nuevas alturas en desarrollo web</p>
        </header>
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
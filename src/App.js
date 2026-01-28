import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

import './App.css';

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

        <main className='main'>
          <Banner />
          <About />
          <Skills />
          <Projects />
        </main>

        <footer className="mountain-footer">
          <p>Inspirado en la grandeza del Monte Everest • Altura: 8,848m</p>
          <div className="base-camp">© Base Camp Dev {new Date().getFullYear()}</div>
        </footer>
      </div>
    </div>
  );
}

export default App;
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <main className="font-sans overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}

export default App;

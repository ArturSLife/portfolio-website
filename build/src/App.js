import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.jsx';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
        <Header />
        <Nav />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
        <Footer />

    </div>
  );
}

export default App;

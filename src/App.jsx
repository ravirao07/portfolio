
import { useEffect, useState } from 'react';
import './App.css';
import Contact from './Components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Experience from './Components/Exprience';
import Home from './Components/Home';
import About from './Components/Aboute';
import Navigation from './Components/Navigation';
import Project from './Components/Project';
import Skills from './Components/Skill';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Loading from './Components/Loading';
;


function App() {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Aos.init();

    const timer = setTimeout(() => setIsLoading(false), 4000); 
    return () => clearTimeout(timer)
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading /> 
      ) : (
        <div>
          <Navigation />
          <Home />
          <About />
          <Skills />
          <Project />
          <Experience />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;


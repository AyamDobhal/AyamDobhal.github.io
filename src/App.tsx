import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Navbar,
  TechStack,
  Projects,
  StarsCanvas,
  Front,
  Trailer,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Trailer />
          <Navbar />
          <Front />

        </div>

        <div className="relative z-0">
          <About />
          <Experience />
          <TechStack />
          <Projects />
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  First,
  Trailer,
  Header,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Trailer />
          <Navbar />
          <First />

          <Hero />
        </div>

        <div className="relative z-0">
          <About />
          <Experience />
          <Tech />
          <Works />
          <Contact />
          <StarsCanvas />
          <Header />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

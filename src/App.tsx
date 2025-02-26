// import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Mockup from "./components/sections/Mockup";
import Navbar from './components/Navbar';
import Feature from "./components/sections/Features";
import Footer from "./components/Footer";
import PricePlan from "./components/sections/PricePlan";
import WhyUs from "./components/sections/Why";
import Video from "./components/sections/Video";
import Intro from "./components/sections/IntroNew";
function App() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Navbar />
      <Intro />
      <Mockup />
      <Video />
      <WhyUs />
      <Feature />
      <PricePlan />
      {/* <About /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

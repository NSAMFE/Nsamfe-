import { useState } from "react";

import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Theme from "./components/Theme";
import Gallery from "./components/Gallery";
import Videos from "./components/Videos";
import Program from "./components/Program";
import Guest from "./components/Guests";
import Sponsors from "./components/Sponsors";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NsamfeAI from "./components/NsamfeAI";

function App() {
  const [aiOpen, setAiOpen] = useState(false);

  return (
    <>
      <Navbar onOpenAI={() => setAiOpen(true)} />

      <main>
        <HeroSlider />
        <Theme />
        <Gallery />
        <Videos />
        <Program />
        <Guest />
        <Sponsors />
        <Location />
        <Contact />
      </main>

      <Footer />

      <NsamfeAI
        isOpen={aiOpen}
        onClose={() => setAiOpen(false)}
      />
    </>
  );
}

export default App;

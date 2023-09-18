import { Header } from "./components/header-footer/Header";
import { Footer } from "./components/header-footer/Footer";
import { Featured } from "./components/features/Featured";
import { VenueNFO } from "./components/venueNFO/VenueNFO";
import { Highlights } from "./components/highlights/Highlights";
import { Pricing } from "./components/pricing/Pricing";
import { Location } from "./components/location/Location";
import { Element } from "react-scroll";

import "./styles.css";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Element name="featured">
          <Featured />
        </Element>
        <Element name="venuenfo">
          <VenueNFO />
        </Element>
        <Element name="highlight">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./Components/0-header/header";
import Footer from "./Components/2-footer/footer";
import HomeSect from "./Components/1-section/0-home_section/homeSect";
import AboutSect from "./Components/1-section/1-about_section/aboutSect";
import ServicesSect from "./Components/1-section/2-services_section/servicesSect";
import ContactSect from "./Components/1-section/3-contact_section/contactSect";

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* {appSections.map((appSect) => (
        <Section sections={appSect}></Section>
      ))} */}
      <HomeSect></HomeSect>
      <AboutSect></AboutSect>
      <ServicesSect></ServicesSect>
      <ContactSect></ContactSect>
      <Footer></Footer>
    </div>
  );
}

export default App;

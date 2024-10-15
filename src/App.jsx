import React from "react";
import NavBar from "./components/NavBar";
import Chikidis from './components/Chikidis';
import Carrosel from "./components/Carrosel";
import ModeAction from "./ModeForms/ModeAction";
import Footer from "./Footer/Footer";


function App() {
  return (
  <div>
  <NavBar />
  <Chikidis />
  <Carrosel />
  <ModeAction />
  <Footer />
  </div>
  );
}

export default App;

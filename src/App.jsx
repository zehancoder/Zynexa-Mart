import { useState } from "react";
import "./App.css";
import Navber from "./app/navberFooter/Navber";
import HomePage from "./app/landing/HomePage";
import Footer from "./app/navberFooter/Footer";
import Routing from "./app/routes/Routing";

function App() {
  return (
    <>
      <Navber />
      <Routing/>
      <Footer />

    </>
  );
}

export default App;

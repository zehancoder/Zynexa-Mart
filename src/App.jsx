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
      <div className="h-[200px]">

      </div>
      <Routing/>
      <Footer />

    </>
  );
}

export default App;

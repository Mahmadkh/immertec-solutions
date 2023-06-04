import React from "react";
import Cards from "./components/cards/Cards";
import Blue from "./components/blue/Blue";
import Immersive from "./Immersive";
import Instructors from "./components/instructors/Instructors";
import Footer from "./components/Footer";
import Foot from "./components/foot/Foot";
import Header from "./components/header/Header";

function Home() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <Blue />
      <Immersive />
      <Instructors />
      <Footer />
      <Foot />
    </div>
  );
}

export default Home;

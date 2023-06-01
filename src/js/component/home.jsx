import React from "react";
import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";
//include images into your bundle
//create your first component
const Home = () => {
  return (
    <>
        <Navbar />
      <div className="container">
          <Jumbotron />
        <div className="cards d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
        <Footer />
    </>
  );
};
export default Home;

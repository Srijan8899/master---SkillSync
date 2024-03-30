import React from "react";
import Feature from "./Feature";
import Explore from "./Explore";
import Hero from "./Hero";
import Testimonial from "./Testimonial";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Explore />
      <Feature />
      <Testimonial />
    </div>
  );
};

export default HomePage;

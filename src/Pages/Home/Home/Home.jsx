import React from "react";
import Advertise from "../Advertise/Advertise";
import Bannar from "../Bannar/Bannar";
import Catagory from "../Catagory/Catagory";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Bannar />
      <Catagory />
      {/* <Advertise /> */}
      <Contact />
    </div>
  );
};

export default Home;

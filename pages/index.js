import React from "react";
import { client } from "../sanity/lib/client";
import { Hero } from "../components";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
       <Hero /> 
       <Banner />
    </div>
  );
};

export default Home;

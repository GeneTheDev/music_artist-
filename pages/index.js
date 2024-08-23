import React from "react";
import { Hero } from "../components";
import Banner from "../components/Banner";
import RecentTrack from "../components/RecentTrack";
import Videos from "../components/Videos";
import About from "../components/comm/About";

const Home = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <section id="banner">
        <Banner />
      </section>
      <section id="recent-track">
        <RecentTrack />
      </section>
      <section id="videos">
        <Videos />
      </section>
      <section id="about">
        <About />
      </section>
    </div>
  );
};

export default Home;

import React from "react";
import { client } from "../sanity/lib/client";
import { Hero } from "../components";
import Banner from "../components/Banner";
import RecentTrack from "../components/RecentTrack";
import Videos from "../components/Videos";

const Home = () => {
  return (
    <div>
      <Hero />
      <Banner />
      <RecentTrack />
      <Videos />
    </div>
  );
};

export default Home;

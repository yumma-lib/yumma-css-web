"use client";

import Navbar from "./components/nav";
import Playground from "./components/play";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="px-2">
        <Playground />
      </div>
    </>
  );
};

export default Home;

"use client";

import Navbar from "./components/Navbar";
import Playground from "./components/Playground";

const Home = () => {
  return (
    <main>
      <Navbar />
      <div>
        <Playground />
      </div>
    </main>
  );
};

export default Home;

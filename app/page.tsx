"use client";
import { useEffect } from "react";
import Navbar from "./components/nav";
import Playground from "./components/play";

const Home = () => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-2">
        <Playground />
      </div>
    </>
  );
};

export default Home;

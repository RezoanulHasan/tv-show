import useTitle from "../../../Hooks/useTitle";
import React, { useEffect } from "react";
import ShowList from "../Tvshow/ShowList";
import Slider from "../Tvshow/Slider";
const Home = () => {
  useTitle("Home"),
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div>
      <Slider></Slider>
      <h1 className="text-4xl">home</h1>

      <ShowList></ShowList>
    </div>
  );
};

export default Home;

import useTitle from "../../../Hooks/useTitle";
import React, { useEffect } from "react";
import ShowList from "../Tvshow/ShowList";
import Container from "../../Shared/Container";

const Home = () => {
  useTitle("Home"),
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div>
      <ShowList></ShowList>
    </div>
  );
};

export default Home;

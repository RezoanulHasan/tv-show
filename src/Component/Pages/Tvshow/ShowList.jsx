// ShowList.jsx
import React, { useState, useEffect } from "react";
import ShowCard from "./ShowCard";
import Spinner from "./../../Shared/Spinner/Spinner";
import Slider from "./Slider";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const ShowList = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const data = await response.json();
        setShows(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDetailsClick = (show) => {
    setSelectedShow(show);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">TV Shows</h1>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <SectionTitle subHeading="TV show" heading={<>Show view</>} />
          <Slider shows={shows} /> {/* Pass the correct prop name: shows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {shows.map((show) => (
              <ShowCard
                key={show.show.id}
                show={show.show}
                handleDetailsClick={handleDetailsClick}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ShowList;

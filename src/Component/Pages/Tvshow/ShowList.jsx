// ShowList.jsx
import React, { useState, useEffect } from "react";
import ShowCard from "./ShowCard";
import Spinner from "./../../Shared/Spinner/Spinner";
import Slider from "./Slider";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Heading from "../../Shared/Heading/Heading";
import EmptyState from "./../../Shared/EmptyState";
import "./ShowList.css";
const ShowList = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedShow, setSelectedShow] = useState(null);
  const [statusFilter, setStatusFilter] = useState(null);
  const [typeFilter, setTypeFilter] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleStatusFilterChange = (selectedStatus) => {
    setStatusFilter(selectedStatus);
  };

  const handleTypeFilterChange = (selectedType) => {
    setTypeFilter(selectedType);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setShows(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDetailsClick = (show) => {
    setSelectedShow(show);
  };

  const filteredShows = shows.filter(
    (show) =>
      (!statusFilter || show.show.status === statusFilter) &&
      (!typeFilter || show.show.type === typeFilter) &&
      (!searchTerm ||
        show.show.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <SectionTitle
            subHeading="TV SHOW"
            heading={<>Top Demandant Show </>}
          />
          <Slider shows={shows} />
          <div className="mt-20">
            <Heading
              title="Show List"
              subtitle="All show info with booking process"
              center={true}
            />
          </div>

          <div className="my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="select-container">
              <label className="text-gray-700 mr-2">Status Filter:</label>
              <select
                onChange={(e) => handleStatusFilterChange(e.target.value)}
              >
                <option value="">All</option>
                <option value="Running">Running</option>
                <option value="Ended">Ended</option>
                <option value="In Development">In Development</option>
              </select>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                ></svg>
              </div>
            </div>

            <div className="select-container">
              <label className="text-gray-700 mr-2">Type Filter:</label>
              <select onChange={(e) => handleTypeFilterChange(e.target.value)}>
                <option value="">All</option>
                <option value="Scripted">Scripted</option>
                <option value="Variety">Variety</option>
                <option value="Documentary">Documentary</option>
              </select>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                ></svg>
              </div>
            </div>

            <div className="input-container">
              <label className="text-gray-700 mr-2">Search by Name:</label>
              <input
                type="text"
                placeholder="Enter show name"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                ></svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredShows.length > 0 ? (
              filteredShows.map((show) => (
                <ShowCard
                  key={show.show.id}
                  show={show.show}
                  handleDetailsClick={handleDetailsClick}
                />
              ))
            ) : (
              <EmptyState message="No shows found. Try adjusting your filters or search criteria." />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ShowList;

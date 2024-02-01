// ShowList.jsx
import React, { useState, useEffect } from "react";
import ShowCard from "./ShowCard";
import Spinner from "./../../Shared/Spinner/Spinner";
import Slider from "./Slider";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import EmptyState from "./../../Shared/EmptyState"; // Import EmptyState component

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

  // Filter shows based on status, type, and search term
  const filteredShows = shows.filter(
    (show) =>
      (!statusFilter || show.show.status === statusFilter) &&
      (!typeFilter || show.show.type === typeFilter) &&
      (!searchTerm ||
        show.show.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">TV Shows</h1>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <SectionTitle subHeading="TV show" heading={<>Show view</>} />
          <Slider shows={shows} />
          <div className="my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative inline-flex items-center">
              <label className="text-gray-700 mr-2">Status Filter:</label>
              <select
                className="rounded-full border-2 border-gray-300 p-2 appearance-none focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
                onChange={(e) => handleStatusFilterChange(e.target.value)}
              >
                <option value="">All</option>
                <option value="Running">Running</option>
                <option value="Ended">Ended</option>
                <option value="In Development">In Development</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  {/* SVG path for dropdown icon */}
                </svg>
              </div>
            </div>

            <div className="relative inline-flex items-center">
              <label className="text-gray-700 mr-2">Type Filter:</label>
              <select
                className="rounded-full border-2 border-gray-300 p-2 appearance-none focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
                onChange={(e) => handleTypeFilterChange(e.target.value)}
              >
                <option value="">All</option>
                <option value="Scripted">Scripted</option>
                <option value="Variety">Variety</option>
                <option value="Documentary">Documentary</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  {/* SVG path for dropdown icon */}
                </svg>
              </div>
            </div>

            <div className="relative">
              <label className="text-gray-700 mr-2">Search by Name:</label>
              <input
                type="text"
                className="rounded-full border-2 border-gray-300 p-2 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
                placeholder="Enter show name"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  {/* SVG path for search icon */}
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredShows.length > 0 ? (
              // If there are filtered shows, display them
              filteredShows.map((show) => (
                <ShowCard
                  key={show.show.id}
                  show={show.show}
                  handleDetailsClick={handleDetailsClick}
                />
              ))
            ) : (
              // If no filtered shows, display the EmptyState component
              <EmptyState message="No shows found. Try adjusting your filters or search criteria." />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ShowList;

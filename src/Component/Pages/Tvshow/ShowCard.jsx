import React, { useState } from "react";
import HeartButton from "./HeartButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShowCard = ({ show, handleDetailsClick }) => {
  const openModal = () => {
    document.getElementById("my_modal_5").showModal();
    handleDetailsClick(show);
  };

  const closeModal = () => {
    document.getElementById("my_modal_5").close();
  };

  return (
    <div className="card card-compact w-full md:w-full bg-base-100 shadow-xl mx-auto my-4">
      <figure>
        <img
          src={show.image && show.image.medium}
          alt={show.name}
          className="object-cover h-full w-full group-hover:scale-110 transition"
        />
      </figure>

      <div className="card-body p-5">
        <div className=" flex justify-between text-black bg-red-300 font-bold mb-2">
          <h2 className="card-title text-xl">{show.name}</h2>
          <h2 className="card-title text-xl">{show.language}</h2>
        </div>

        <div className="absolute top-3 right-3">
          <HeartButton />
          <ToastContainer />
        </div>
        <div className="card-actions justify-end mt-4">
          <button
            className="btn btn-outline hover:bg-black bg-red-600 text-white"
            onClick={openModal}
          >
            Details
          </button>
        </div>
      </div>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box  bg-black text-yellow-100">
          <div className="card-actions justify-end">
            <button
              className="close-btn btn btn-outline hover:bg-black bg-red-600 text-white"
              onClick={closeModal}
            >
              Close
            </button>{" "}
          </div>
          <h2 className="text-2xl font-bold mb-4"> Name:{show.name}</h2>

          <div className="flex justify-between">
            <div className="w-2/3 pr-4">
              <p className="text-white">{show.summary}</p>
            </div>
            <div className="w-1/3 t">
              <h3 className="text-xl font-bold mb-2">Details</h3>
              <ul className="text-white">
                <li>
                  <strong>Type:</strong> {show.type}
                </li>
                <li>
                  <strong>Language:</strong> {show.language}
                </li>
                <li>
                  <strong>Genres:</strong> {show.genres.join(", ")}
                </li>
                <li>
                  <strong>Status:</strong> {show.status}
                </li>
                {show.premiered && (
                  <li>
                    <strong>Premiered:</strong> {show.premiered}
                  </li>
                )}
                {show.averageRuntime && (
                  <li>
                    <strong>Average Runtime:</strong> {show.averageRuntime}{" "}
                    minutes
                  </li>
                )}
                {show.schedule && (
                  <li>
                    <strong>Schedule:</strong> {show.schedule.time} on{" "}
                    {show.schedule.days.join(", ")}
                  </li>
                )}
                {show.rating && (
                  <li>
                    <strong>Average Rating:</strong> {show.rating.average}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ShowCard;

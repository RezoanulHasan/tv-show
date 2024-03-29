import React from "react";
import useTitle from "../../../Hooks/useTitle";
import { useNavigate } from "react-router-dom";
const BookingHistory = () => {
  useTitle("Booking History ");
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  // Retrieve bookings from localStorage
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  return (
    <>
      <div className="bg-gray-100 p-8">
        <h2 className="text-2xl font-bold mb-4">Booking History</h2>
        <ul className="space-y-4">
          {bookings.map((booking, index) => (
            <li key={index} className="bg-white p-4 rounded shadow-md mb-4">
              <p className="text-lg">
                <strong>Movie Name:</strong> {booking.movieName},{" "}
                <strong>User:</strong> {booking.name}, <strong>Email:</strong>{" "}
                {booking.email}
              </p>
              <p className="text-md">Booking time: {booking.movieSchedul}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center mt-10">
        <button
          onClick={back}
          className="btn bg-blue-400 text-white mb-10 mt-4  center btn-lg  hover:bg-primary-700"
        >
          Back
        </button>{" "}
      </div>
    </>
  );
};

export default BookingHistory;

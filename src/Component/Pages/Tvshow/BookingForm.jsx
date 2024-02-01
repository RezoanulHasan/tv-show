// BookingForm.js
import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Booking.css";

const BookingForm = ({ show, onClose, onSubmit }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    // Add more user details as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can perform additional booking-related actions here
    // ...

    // Save booking in localStorage
    const bookingData = {
      movieName: show.name,
      name: userData.name,
      email: userData.email,
      // Add more data as needed
    };
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(bookingData);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // Close the booking form
    onClose();

    // Show success message using SweetAlert2
    Swal.fire({
      title: "Booking Successful!",
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Go to Booking History",
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirect to the booking history page (replace with your actual route)
        window.location.href = "/booking-history";
      }
    });

    // Submit the form data
    onSubmit(userData);
  };

  return (
    <div className="booking-form-popup">
      <div className="booking-form-content">
        <span className="close-btn" onClick={onClose} title="Close Modal">
          &times;
        </span>
        <form onSubmit={handleFormSubmit}>
          <h2>Booking Form</h2>
          <label>
            Movie Name:
            <input type="text" name="movieName" value={show.name} readOnly />
          </label>
          <label>
            Your Name:
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Your Email:
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          {/* Add more form fields as needed */}
          <button
            className="btn   bg-red-500 text-white  hover:bg-black"
            type="submit"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;

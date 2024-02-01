import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="mt-6">
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <h6 className="footer-title">Shows</h6>
          <a className="link link-hover">Now Playing</a>
          <a className="link link-hover">Upcoming Shows</a>
          <a className="link link-hover">Special Events</a>
        </nav>
        <nav>
          <h6 className="footer-title">Bookings</h6>
          <a src className="link link-hover">
            Book Tickets
          </a>
          <Link to="/" className="link link-hover">
            Book Tickets
          </Link>
          <Link to="/booking-history" className="link link-hover">
            Booking History
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">FAQs</a>
          <a className="link link-hover">Venue Details</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;

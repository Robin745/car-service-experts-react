import React from "react";
import { useNavigate } from "react-router-dom";

const BookingFrom = () => {
  const navigate = useNavigate();

  const formOnSubmit = () => {
    navigate("/bookingsuccess");
  };
  return (
    <div className="flex justify-center items-center">
      <div>
        <form onSubmit={formOnSubmit} className="w-10/12 mx-auto">
          <h2 className="text-3xl font-bold my-8 text-blue-500 w-[400px]">
            Fill up the form to Book
          </h2>
          <div className="text-left">
            <label className="block ml-1 text-gray-500 text-lg" htmlFor="Email">
              Your Name
            </label>
            <input
              className="w-80 h-12 rounded-md"
              type="text"
              name="Name"
              id="6564564f564dfd65"
              required
            />
          </div>
          <div className="text-left">
            <label className="block ml-1 text-gray-500 text-lg" htmlFor="Email">
              Your Email
            </label>
            <input
              className="w-80 h-12 rounded-md"
              //   onBlur={emailOnBlur}
              type="email"
              name="Email"
              id="656456f5445dfsdf465"
              required
            />
          </div>
          <div className="text-left">
            <label
              className="block ml-1  text-gray-500 text-lg"
              htmlFor="number"
            >
              Mobile Number
            </label>
            <input
              className="w-80 h-12 rounded-md"
              //   onBlur={passwordOnBlur}
              type="number"
              name="Number"
              autoComplete="on"
              id="5346544dfg6246548"
              required
            />
          </div>
          <div className="text-left">
            <label
              className="block ml-1  text-gray-500 text-lg"
              htmlFor="address"
            >
              Your Address
            </label>
            <input
              className="w-80 h-12 rounded-md"
              //   onBlur={confirmPasswordOnBlur}
              type="text"
              name="Address"
              autoComplete="on"
              id="5346546246554545848"
              required
            />
          </div>
          <div className="text-left">
            <input
              className="bg-blue-700 text-white my-2 w-11/12 h-12 rounded-lg hover:bg-blue-500 hover:text-gray-700"
              type="submit"
              value="Book Your appointment"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingFrom;

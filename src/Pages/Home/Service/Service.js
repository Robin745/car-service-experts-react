import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, desc, price } = service;
  const navigate = useNavigate();
  const handleBookNow = () =>{
    navigate("/bookingform")
  }

  return (
    <div className="service-container">
      <img src={img} alt="" />
      <div className="text-container">
        <h2 className="text-2xl my-2">{name}</h2>
        <p className="font-bold text-lg">Price: {price}$</p>
        <p>{desc}</p>
        <button onClick={handleBookNow} className="bg-blue-600 rounded text-lg text-white py-1 px-2 my-2 hover:bg-blue-500 hover:text-gray-800">Book: {name}</button>
      </div>
    </div>
  );
};

export default Service;

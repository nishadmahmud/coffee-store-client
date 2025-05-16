import React from "react";
import { FaCoffee } from "react-icons/fa";
import { Link } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Products = ({ coffees }) => {
  return (
    <div className="bg-[#FFFFFF] bg-[url(src/assets/images/more/1.png)] bg-cover bg-center py-20">
      <div className="text-center mx-auto mb-8">
        <p className="raleway mb-1.5">--- Sip & Savor ---</p>
        <h5 className="text-3xl mb-3 text-[#331A15] [filter:drop-shadow(2px_2px_4px_rgba(0,0,0,0.5))]">
          Our Popular Products
        </h5>
        <Link
          to="/addCoffee"
          className="py-1.5 hover:text-[#331A15] px-3.5 border-2 border-[#331A15] rounded-sm justify-center items-center gap-1.5 bg-[#E3B577] inline-flex hover:bg-transparent group"
        >
          <span className="text-white group-hover:text-[#331A15] [filter:drop-shadow(2px_2px_4px_rgba(0,0,0,0.5))]">
            Add Coffee
          </span>{" "}
          <FaCoffee className="group-hover:text-[#331A15]"></FaCoffee>
        </Link>
      </div>
      <div className="w-[80%] mx-auto gap-4 grid grid-cols-2">
        {coffees.map((coffee) => (
          <CoffeeCard coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Products;

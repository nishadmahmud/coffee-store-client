import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  return (
    <div className="bg-[url(src/assets/images/more/11.png)] pb-20">
      <div className="w-[80%] mx-auto py-8 ">
        <Link
          to="/"
          className="flex w-fit gap-2.5 items-center text-3xl text-[#331A15] [filter:drop-shadow(2px_2px_4px_rgba(0,0,0,0.5))] hover:bg-[#D2B48C] rounded-lg p-2"
        >
          <FaArrowLeft size={25}></FaArrowLeft> Back to home
        </Link>
      </div>

      <div className="w-[80%] flex gap-20 justify-start items-center  mx-auto bg-[#F4F3F0] px-32 py-12">
        <img src={coffee.photo} alt="" />
        <div>
          <h5 className="text-3xl mb-5 text-[#331A15] [filter:drop-shadow(2px_2px_4px_rgba(0,0,0,0.5))]">
            Niceties
          </h5>
          <div className="raleway text-[#5C5B5B] space-y-1 text-sm">
            <p>
              <span className="text-black font-semibold">Name:</span>{" "}
              {coffee.name}
            </p>
            <p>
              <span className="text-black font-semibold">Chef:</span>{" "}
              {coffee.chef}
            </p>
            <p>
              <span className="text-black font-semibold">Supplier:</span>{" "}
              {coffee.supplier}
            </p>
            <p>
              <span className="text-black font-semibold">Taste:</span>{" "}
              {coffee.taste}
            </p>
            <p>
              <span className="text-black font-semibold">Category:</span>{" "}
              {coffee.category}
            </p>
            <p>
              <span className="text-black font-semibold">Price:</span>{" "}
              {coffee.price} Taka
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;

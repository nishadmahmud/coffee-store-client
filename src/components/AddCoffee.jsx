import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());

    // send coffee data to the db
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Coffee Added Successfully!");
          // form.reset();
        }
      });
  };

  return (
    <div className="bg-[url(src/assets/images/more/11.png)] pb-20">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="w-[80%] mx-auto py-8 ">
        <Link
          to="/"
          className="flex w-fit gap-2.5 items-center text-3xl text-[#331A15] [filter:drop-shadow(2px_2px_4px_rgba(0,0,0,0.5))] hover:bg-[#D2B48C] rounded-lg p-2"
        >
          <FaArrowLeft size={25}></FaArrowLeft> Back to home
        </Link>
      </div>

      <div className="w-[80%] mx-auto bg-[#F4F3F0] px-16 py-12">
        <div className="mx-auto text-center space-y-5 pb-5">
          <h3 className="text-3xl text-[#331A15] [filter:drop-shadow(2px_2px_4px_rgba(0,0,0,0.5))]">
            Add New Coffee
          </h3>
          <p className="raleway mx-auto  text-xs text-[#1B1A1AB2]  w-[70%]">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div className="raleway">
          <form onSubmit={handleAddCoffee}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <fieldset className="flex flex-col gap-2.5">
                <label className="text-sm text-[#1B1A1ACC] font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="py-2 pl-2 rounded-md text-[#1B1A1A99] text-xs bg-white"
                  placeholder="Enter coffee name"
                />
              </fieldset>
              <fieldset className="flex flex-col gap-2.5">
                <label className="text-sm text-[#1B1A1ACC] font-semibold">
                  Chef
                </label>
                <input
                  type="text"
                  name="chef"
                  className="py-2 pl-2 rounded-md text-[#1B1A1A99] text-xs bg-white"
                  placeholder="Enter coffee chef"
                />
              </fieldset>
              <fieldset className="flex flex-col gap-2.5">
                <label className="text-sm text-[#1B1A1ACC] font-semibold">
                  Supplier
                </label>
                <input
                  type="text"
                  name="supplier"
                  className="py-2 pl-2 rounded-md text-[#1B1A1A99] text-xs bg-white"
                  placeholder="Enter coffee supplier"
                />
              </fieldset>
              <fieldset className="flex flex-col gap-2.5">
                <label className="text-sm text-[#1B1A1ACC] font-semibold">
                  Taste
                </label>
                <input
                  type="text"
                  name="taste"
                  className="py-2 pl-2 rounded-md text-[#1B1A1A99] text-xs bg-white"
                  placeholder="Enter coffee taste"
                />
              </fieldset>
              <fieldset className="flex flex-col gap-2.5">
                <label className="text-sm text-[#1B1A1ACC] font-semibold">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  className="py-2 pl-2 rounded-md text-[#1B1A1A99] text-xs bg-white"
                  placeholder="Enter coffee category"
                />
              </fieldset>
              <fieldset className="flex flex-col gap-2.5">
                <label className="text-sm text-[#1B1A1ACC] font-semibold">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  className="py-2 pl-2 rounded-md text-[#1B1A1A99] text-xs bg-white"
                  placeholder="Enter coffee price"
                />
              </fieldset>
            </div>
            <fieldset className="flex flex-col gap-2.5 my-5">
              <label className="text-sm text-[#1B1A1ACC] font-semibold">
                Photo
              </label>
              <input
                type="text"
                name="photo"
                className="py-2 pl-2 rounded-md text-[#1B1A1A99] text-xs bg-white"
                placeholder="Enter photo URL"
              />
            </fieldset>
            <button
              type="submit"
              className="w-full rancho text-center border-2 border-[#331A15] bg-[#D2B48C] py-2.5 rounded-sm hover:bg-[#331A15] hover:text-[#D2B48C] cursor-pointer"
            >
              Add Coffee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;

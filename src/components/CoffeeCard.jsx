import React from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffees, setCoffees, coffee }) => {
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Coffee has been deleted.",
                icon: "success",
              });
              const remainingCoffee = coffees.filter((cof) => cof._id != _id);
              setCoffees(remainingCoffee);
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#F5F4F1] p-5 pr-10 rounded-lg flex items-center justify-between">
      <div className="flex items-center gap-6">
        <img src={coffee.photo} className="w-auto h-40" />
        <div className="raleway space-y-1">
          <p className="text-[#5C5B5B]">
            <span className="text-black font-semibold">Name: </span>
            {coffee.name}
          </p>
          <p className="text-[#5C5B5B]">
            <span className="text-black font-semibold">Chef: </span>
            {coffee.chef}
          </p>
          <p className="text-[#5C5B5B]">
            <span className="text-black font-semibold">Price: </span>
            {coffee.price} Taka
          </p>
        </div>
      </div>
      <div className="text-white flex flex-col gap-1">
        <Link
          to={`/coffeeDetails/${coffee._id}`}
          className="bg-[#D2B48C] p-1.5 rounded-sm"
        >
          <FaEye size={15}></FaEye>
        </Link>
        <Link
          to={`/updateCoffee/${coffee._id}`}
          className="bg-[#3C393B] p-1.5 rounded-sm"
        >
          <FaPen size={15}></FaPen>
        </Link>
        <button
          onClick={() => handleDelete(coffee._id)}
          className="bg-[#EA4744] p-1.5 rounded-sm cursor-pointer"
        >
          <FaTrash size={15}></FaTrash>
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;

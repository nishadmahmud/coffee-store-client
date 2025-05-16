import React from "react";
import Hero from "./Hero";
import { useLoaderData } from "react-router";
import Products from "./Products";

const Home = () => {
  const coffees = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <Products coffees={coffees}></Products>
    </div>
  );
};

export default Home;

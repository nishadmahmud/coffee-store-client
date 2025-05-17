import Hero from "./Hero";
import { useLoaderData } from "react-router";
import Products from "./Products";

const Home = () => {
  const initialCoffees = useLoaderData();

  return (
    <div>
      <Hero></Hero>
      <Products initialCoffees={initialCoffees}></Products>
    </div>
  );
};

export default Home;

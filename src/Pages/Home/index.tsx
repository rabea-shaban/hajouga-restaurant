import CategoriesWithProducts from "../../components/CategoriesWithProducts";
import Banner from "./Banner";
import BestServices from "./BestServices";
import { HagogahNew } from "./HagogahNew";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <Banner />
      <HagogahNew />
      <CategoriesWithProducts />
      <BestServices />
    </>
  );
};

import { Helmet } from "react-helmet-async";
import GurProductsBanner from "../GurProductsBanner/GurProductsBanner";

const GurProducts = () => {
  return (
    <div>
      <Helmet>
        <title>Fatema Agro | খেজুরের গুড়</title>
      </Helmet>
      <GurProductsBanner />
    </div>
  );
};

export default GurProducts;

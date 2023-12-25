import { useEffect, useState } from "react";
import banner from "../../../assets/Banner/gurBanner.jpg";
import GurProduct from "./GurProduct";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const GurProductsBanner = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.products);
        setProducts(data.products);
      });
  }, []);

  //Filter products based on category
  const filteredProducts = products.filter(
    (product) => product.category === "খেজুর গুড়"
  );

  return (
    <div>
      <div className="my-5">
        <img src={banner} alt="gur banner" className="h-[400px] w-full rounded-lg" />
      </div>

      <SectionTitle title='খেজুরের গুড়' subTitle='প্রাকৃতিক উপায়ে তৈরী খেজুর গুড়'></SectionTitle>

 {/* Render products from the filtered list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((item) => (
          <GurProduct key={item._id} item={item}></GurProduct>
        ))}
      </div>
    </div>
  );
};

export default GurProductsBanner;

import banner from "../../../assets/Banner/gurBanner.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useProducts from "../../../hooks/useProducts";
import FoodCard from "../../../components/FoodCard/FoodCard";

const GurProductsBanner = () => {
  const [products] = useProducts();
  // console.log(products);

  //Filter products based on category
  const filteredProducts = products.filter(
    (product) => product.category === "খেজুর গুড়"
  );

  return (
    <div>
      <div className="my-5">
        <img
          src={banner}
          alt="gur banner"
          className="md:h-[400px] w-full rounded-lg"
        />
      </div>

      <SectionTitle
        title="খেজুরের গুড়"
        subTitle="প্রাকৃতিক উপায়ে তৈরী খেজুর গুড়"
      ></SectionTitle>

      {/* Render products from the filtered list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default GurProductsBanner;

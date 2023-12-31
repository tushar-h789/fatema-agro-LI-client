import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FoodCard from "../../../components/FoodCard/FoodCard";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // console.log(data);
      });
  }, []);

  // axiosPublic.get('/products')
  // .then(res =>{
  //   const products = res.data
  //   console.log(products);
  // })

  return (
    <div className="my-10">
      <SectionTitle
        title="সকল পণ্য"
        subTitle="এখানে সকল ধরনের অর্গানিক পূর্ণ পাওয়া যায়"
      ></SectionTitle>
      <div className="divider"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default Products;

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
const ProductDetails = () => {
  const [count, setCount] = useState(1);
  const products = useLoaderData();
  console.log(products);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const updatePrice = products.price * count;
  const updateQuantity = products.quantity * count


  return (
    <div className="p-8">
      <div className="flex items-center gap-20">
        <img
          src={products.image}
          alt="product"
          className="border border-orange-600 rounded-xl"
        />
        <div>
          <h3 className="text-2xl font-bold mb-2">{products.title}</h3>
          <p className="text-lg">
            দামঃ <strong className="">{updatePrice}</strong> টাকা
          </p>
          <p>
            পরিমানঃ <strong>{updateQuantity} কেজি</strong>
          </p>

          <div className=" mt-10">
            <button
              onClick={handleDecrement}
              className="btn btn-sm btn-outline"
            >
              <FaMinus />{" "}
            </button>
            <button className="btn btn-sm btn-outline px-10 mx-2 text-lg">
              {count}
            </button>

            <button
              onClick={handleIncrement}
              className="btn btn-sm btn-outline"
            >
              <FaPlus />{" "}
            </button>
          </div>
          <div className="flex items-center gap-2">
           <Link to='/productBuyContact'>
           <button className="btn btn-warning btn-outline mt-2 px-14">
              এখান থেকেই কিনুন
            </button>
           </Link>
          </div>
        </div>
      </div>
      <div className="my-4">
        <h2 className="text-4xl">{products.title}</h2>
        <p className="mr-20 my-2">{products.details}</p>
      </div>
    </div>
  );
};

export default ProductDetails;

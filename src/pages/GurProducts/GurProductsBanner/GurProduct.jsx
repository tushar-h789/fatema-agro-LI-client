import { Link } from "react-router-dom";

const GurProduct = (params) => {
  const { title, image, price, quantity } = params.item;
  console.log(params.item);

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl p-2 md:p-0 my-10">
        <Link to="/">
          <figure>
            <img src={image} alt="products" className="zoom" />
          </figure>
          <div className="card-body font-roboto">
            <h2 className="card-title">{title}</h2>
            <p className="font-bold text-orange-500">পরিমানঃ {quantity} কেজি</p>
            <p className="font-bold text-orange-500">
              দামঃ <strong>৳</strong> {price}
            </p>
          </div>
        </Link>
        <div className="my-2">
          <button className="bg-orange-500 py-1 w-full rounded text-white text-lg font-semibold hover:bg-orange-800 hover:transition hover:duration-150 hover:ease-in-out">
            Add To Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default GurProduct;
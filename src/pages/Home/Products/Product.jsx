const Product = (params) => {
  console.log(params.product);
  const {title, image, details, price, quantity, rating, category} = params.product
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="products"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="font-bold text-orange-500">পরিমানঃ {quantity} কেজি</p>
          <p className="font-bold text-orange-500">দামঃ <strong>৳</strong> {price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

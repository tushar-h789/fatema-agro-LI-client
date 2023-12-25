import { useEffect, useState } from "react"
import Product from "./Product"

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data =>{
      setProducts(data.products)
      // console.log(data.products);
    })
  }, [])


  return (
    <div className="my-10">
        <h2 className="text-xl font-bold px-2 md:px-0">সব পণ্য</h2>
        <div className="divider"></div> 

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            products.map(product => <Product
              key={product.id}
              product = {product}
            ></Product>)
          }
        </div>
        

    </div>
  )
}

export default Products
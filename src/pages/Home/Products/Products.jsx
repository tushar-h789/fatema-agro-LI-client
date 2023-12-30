import { useEffect, useState } from "react"
import Product from "./Product"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data =>{
      setProducts(data)
      console.log(data);
    })
  }, [])


  return (
    <div className="my-10">
        <SectionTitle title="সকল পণ্য" subTitle='এখানে সকল ধরনের পূর্ণ পাওয়া যায়'></SectionTitle>
        <div className="divider"></div> 

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            products.map(product => <Product
              key={product._id}
              product = {product}
            ></Product>)
          }
        </div>
        

    </div>
  )
}

export default Products
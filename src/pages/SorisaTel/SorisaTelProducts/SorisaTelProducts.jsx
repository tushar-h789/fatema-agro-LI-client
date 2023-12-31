import { useEffect, useState } from "react"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import SorisaTelProduct from "./SorisaTelProduct"
import useProducts from "../../../hooks/useProducts"

const SorisaTelProducts = () => {
    const [products] = useProducts()

    const filteredSorisaTel = products.filter(product => product.category === 'সরিষার তেল')
    // console.log(filteredSorisaTel);

  return (
    <div className="my-8">
        <SectionTitle title='সরিষার তেল' subTitle='কাঠের ঘানিতে ভাঙা সরিষার তেল'></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                filteredSorisaTel.map(item => <SorisaTelProduct key={item._id} item={item}></SorisaTelProduct>)
            }
        </div>
    </div>
  )
}

export default SorisaTelProducts
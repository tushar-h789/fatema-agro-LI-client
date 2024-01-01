
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import useProducts from "../../../hooks/useProducts"
import FoodCard from "../../../components/FoodCard/FoodCard"

const SorisaTelProducts = () => {
    const [products] = useProducts()

    const filteredSorisaTel = products.filter(product => product.category === 'সরিষার তেল')
    // console.log(filteredSorisaTel);

  return (
    <div className="my-8">
        <SectionTitle title='সরিষার তেল' subTitle='কাঠের ঘানিতে ভাঙা সরিষার তেল'></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                filteredSorisaTel.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    </div>
  )
}

export default SorisaTelProducts
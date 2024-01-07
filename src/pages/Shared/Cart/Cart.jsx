import { Helmet } from "react-helmet-async"
import DashboardCart from "../../Dashboard/DashboardCart/DashboardCart"

const Cart = () => {
  return (
    <div className="my-10">
      <Helmet>
        <title>Fatema Agro | কার্ড</title>
      </Helmet>
      <DashboardCart/>
    </div>
  )
}

export default Cart
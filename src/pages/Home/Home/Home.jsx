import Banner from "../Banner/Banner"
import Products from "../Products/Products"
import Review from "../Review/Review"
import Video from "../Video/Video"
import { Helmet } from 'react-helmet-async';


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Fatema Agro | হোম</title>
      </Helmet>
        <Banner/>
        <Products/>
        <Review/>
        <Video/>
    </div>
  )
}

export default Home
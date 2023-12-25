import { Helmet } from "react-helmet-async";
import SorisaTelProducts from "../SorisaTelProducts/SorisaTelProducts";
import SorisaTelProductsBanner from "../SorisaTelProductsBanner/SorisaTelProductsBanner";

const SorisaTel = () => {
  return (
    <div>
      <Helmet>
        <title>Fatema Agro | সরিষার তেল</title>
      </Helmet>
      <SorisaTelProductsBanner />
      <SorisaTelProducts />
    </div>
  );
};

export default SorisaTel;

import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer p-10 md:py-40 bg-slate-950 text-white">
        <aside>
          <div>
            <img src={logo} height={200} width={200} alt="" />
          </div>
          <p className="text-md">
            <span className="font-bold text-lg">ফাতেমা এগ্রো</span> নিশ্চিত করছে
            সম্পূর্ণ প্রাকৃতিক ও অর্গানিক পণ্য <br /> কোন ঝামেলা ছাড়াই আপনার
            ঘরের দরজায় পৌছে দিতে!
          </p>
        </aside>
        <nav>
          <header className="footer-title font-bold text-lg">কোম্পানী</header>
          
          <Link to="/aboutUs" className="link link-hover">
            আমাদের সম্পর্কে
          </Link>
          <Link to="/about" className="link link-hover">
            ব্লগ
          </Link>
          <Link to="/about" className="link link-hover">
            প্রাইভেসি পলিসি
          </Link>
          <Link to="/about" className="link link-hover">
            পণ্য ফেরত ও রিফান্ড পলিসি
          </Link>
        </nav>
        <nav>
          <header className="footer-title font-bold text-lg">
            সাধারন হেল্প
          </header>
          <Link to="/contact" className="link link-hover">
            কাস্টমার কেয়ার
          </Link>
          <Link to="/contact" className="link link-hover">
            F.A.Qs
          </Link>
          <Link to="/contact" className="link link-hover">
            যোগাযোগ করুন
          </Link>
        </nav>
        <nav>
          <header className="footer-title font-bold text-lg">Social</header>
          <div className="grid grid-flow-col gap-4">
            <a target="_blank" href="https://www.facebook.com/fatemaagroo"><FaFacebook className="text-3xl" /></a>
            <a target="_blank" href='https://www.youtube.com/channel/UCTpYUbjBmx5Z4691_mane6w'>
              <FaYoutube className="text-3xl" />
            </a>
            <a target="_blank" href="https://wa.me/01719355375">
              <FaWhatsapp className="text-3xl" />
            </a>
          </div>
        </nav>
      </footer>

      <div className="footer footer-center p-4 bg-slate-950 text-white font-roboto">
        <aside>
          <p>
            Copyright © {currentYear} - All right reserved by Fatema Agro Ltd
          </p>
        </aside>
      </div>
    </>
  );
};

export default Footer;

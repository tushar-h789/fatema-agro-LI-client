import "./Review.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const Review = () => {

  return (
    <div className="my-10">
      <div>
        <h2 className="font-bold text-2xl px-2 md:px-0">কাস্টমার রিভিউ</h2>
        <div className="divider"></div>
      </div>

      <div className="ml-2 md:ml-0">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <div className="my-4">
                <h3 className="text-2xl font-bold">Tushar Imran</h3>
                <p className="font-bold mb-2">@tushar7478</p>
                <p>খুব ভালো চাল, আমি অনেক খুষি!</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="my-4">
                <h3 className="text-2xl font-bold">Rana Khan</h3>
                <p className="font-bold mb-2">@rana564</p>
                <p>প্রথম দিন থেকেই অদ্ভুত স্বাদ</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="my-4">
                <h3 className="text-2xl font-bold">সাবিনা</h3>
                <p className="font-bold mb-2">@sabina635</p>
                <p>সত্যিই মজাদার, স্বাদে অসাধারণ!</p>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>

    </div>
  );
};

export default Review;

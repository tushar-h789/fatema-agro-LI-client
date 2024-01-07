import { Helmet } from "react-helmet-async";
import aboutImg from "../../assets/Banner/banner.jpg";
import aboutImg2 from "../../assets/Banner/banner1.jpg";
import aboutImg3 from "../../assets/Banner/banner2.jpg";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>Fatema Agro | About</title>
      </Helmet>
      <div className="mt-8 px-20 mx-auto">
        <img src={aboutImg3} alt="" className="rounded-lg md:h-[500px] md:w-[850px] mx-auto" />
      </div>
      <div className=" md:flex gap-10 md:my-8">
        <div className="md:h-80 md:w-1/2 w-80 mx-auto md:mx-0 my-4 md:my-0">
          <img src={aboutImg} alt="img" className="rounded-2xl" />
        </div>
        <div className="md:w-1/2 w-80 mx-auto md:mx-0">
          <img src={aboutImg2} alt="" className="rounded-2xl" />
        </div>
      </div>

      <div className="mb-8 mt-4 p-2">
        <h2 className="text-3xl font-bold">আমাদের সমর্কে</h2>
        <p className="md:mr-20 mr-2 mt-4">
          আমরা গ্রাহগদে অন্যতম খোলা হৃদয়ে আমাদের প্রিয় লক্ষ্য, মানুষের সুস্থতা
          এবং সুখবোধ বৃদ্ধির দিকে এগিয়ে যাচ্ছি। আমাদের খাটি খাবারে মূল্যবান
          অর্গানিক উপাদানগুলির ব্যবহার নিয়ে আমরা সত্যিই গর্বিত এবং সম্মানিত
          অনুষ্ঠান করছি। <br /> <br />
          আমাদের লক্ষ্য হলো সকল ধরনের মানুষের জন্য একটি সুস্থ ও রমণীয় খাদ্যের
          অভিজ্ঞান তৈরি করা, যা তাদের শারীরিক এবং মানসিক স্বাস্থ্যকে সহায়ক হতে
          সহায়ক হবে। আমরা একমাত্র উচ্চ মানের খাবার উপহার করি এবং তার সাথে যোগ
          করি একজনের জীবনে আনন্দ এবং সুখের অভাবন। <br /> <br />
          আমাদের খাটি সকল পণ্যেই অর্গানিক এবং প্রাকৃতিক উপাদানগুলির সমৃদ্ধি
          নিশ্চিত করে, তাদের প্রকৃতির সাথে মেলানোর মাধ্যমে। আমরা খুশি করে যাচ্ছি
          যে, আমাদের কাস্টমাররা আমাদের সাথে তাদের স্বাস্থ্যের জন্য সঠিক পথে চলতে
          পাচ্ছে।
          <br /> <br />
          সম্পূর্ণ খাটি, অসল ওরজিনাল স্বাদের সাথে তৈরি, তাদের মধ্যে কোনও
          অযৌক্তিক উপাদান বা অবাঞ্ছিত কিমিক্যাল নেই। এই ভোজনে আমরা বিলুপ্ত হয়ে
          যাচ্ছি খাটি ওরজিনাল স্বাদের আনন্দ নিতে, যা সুস্থ জীবনের সূচনা করে।
          <br /> <br />
          আমরা প্রতিটি কাস্টমারকে একজন অভ্র দেওয়া সাহায্য করতে গর্বিত, এবং তাদের
          সুস্থ ও আনন্দময় জীবনের পথে একত্র হতে সাহায্য করতে উৎসাহী। খাটি খাবারে
          আমরা নিজেদের সব ক্ষমতা এবং ভাবনাগুলি একত্র করে একটি নতুন, সুস্থ সমাজ
          তৈরি করতে উদ্বুদ্ধ আছি।
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

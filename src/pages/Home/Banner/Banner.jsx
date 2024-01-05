import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./banner.css";
import banner from "../../../assets/Banner/banner.jpg";
import banner1 from "../../../assets/Banner/banner1.jpg";
import banner2 from "../../../assets/Banner/banner2.jpg";
import banner3 from "../../../assets/Banner/banner3.jpg";

const Banner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="flex  md:h-[400px] h-80 my-4">
      <div ref={sliderRef} className="keen-slider">

        
        <div className="keen-slider__slide number-slide1 ">
          {/* <img src={banner} alt="banner"  width={1000}/> */}
          <div
            className="hero bg-cover rounded-xl"
            style={{
              backgroundImage:
                `url("${banner}")`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">খেজুরের গুড়</h1>
                <p className="mb-5">
                প্রাকৃতিক উপায়ে তৈরী খেজুর গুড়। খেজুর গুড় তৈরী করা হলে প্রাকৃতিক উপায় অনেকটাই ব্যবহারযোগ্য হতে পারে। এটি একটি স্বাস্থ্যকর এবং স্বাস্থ্যকর স্নাক্স হিসেবে প্রচুর উপকারিতা রয়েছে। 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide1 ">
          {/* <img src={banner} alt="banner"  width={1000}/> */}
          <div
            className="hero bg-cover"
            style={{
              backgroundImage:
                `url("${banner2}")`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">খেজুরের গুড়</h1>
                <p className="mb-5">
                প্রাকৃতিক উপায়ে তৈরী খেজুর গুড়। খেজুর গুড় তৈরী করা হলে প্রাকৃতিক উপায় অনেকটাই ব্যবহারযোগ্য হতে পারে। এটি একটি স্বাস্থ্যকর এবং স্বাস্থ্যকর স্নাক্স হিসেবে প্রচুর উপকারিতা রয়েছে। 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide1 ">
          {/* <img src={banner} alt="banner"  width={1000}/> */}
          <div
            className="hero bg-cover"
            style={{
              backgroundImage:
                `url("${banner1}")`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">খেজুরের গুড়</h1>
                <p className="mb-5">
                প্রাকৃতিক উপায়ে তৈরী খেজুর গুড়। খেজুর গুড় তৈরী করা হলে প্রাকৃতিক উপায় অনেকটাই ব্যবহারযোগ্য হতে পারে। এটি একটি স্বাস্থ্যকর এবং স্বাস্থ্যকর স্নাক্স হিসেবে প্রচুর উপকারিতা রয়েছে। 
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="keen-slider__slide number-slide1 ">
          <img src={banner3} alt="banner3" width={1000} />
        </div>
      </div>

      <div className="side-img hidden lg:block">
        <img src={banner3} alt="" className="rounded-lg" />
      </div>
    </div>
  );
};

export default Banner;

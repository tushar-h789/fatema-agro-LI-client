import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './banner.css'
import banner from '../../../assets/Banner/banner.jpg'
import banner1 from '../../../assets/Banner/banner1.jpg'
import banner2 from '../../../assets/Banner/banner2.jpg'
import banner3 from '../../../assets/Banner/banner3.jpg'


const Banner = () => {
    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 2000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )

  return (
    <div className="flex  md:h-[400px] h-80 my-4">
        <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1 ">
            <img src={banner} alt="banner"  width={1000}/>
        </div>
        <div className="keen-slider__slide number-slide1 ">
            <img src={banner1} alt="banner1" width={1000}/>
        </div>
        <div className="keen-slider__slide number-slide1 ">
            <img src={banner2} alt="banner2" width={1000}/>
        </div>
        <div className="keen-slider__slide number-slide1 ">
            <img src={banner3} alt="banner3" width={1000}/>
        </div>
      </div>

      <div className="side-img hidden lg:block">
        <img src={banner3} alt="" className="rounded-lg"/>
      </div>
    </div>
  )
}

export default Banner
import { useState, useEffect } from "react";
import Banners from "api/banners.json";
import Title from "components/ui/Title";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useWindowWidth } from '@react-hook/window-size'


function NextButton ({ onClick, className }) {
  return (
      <button className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`} onClick={onClick}>
        <IoIosArrowForward size={22} />
      </button>
  )
}
function PrevButton ({ onClick, className }) {
  return (
      <button className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`} onClick={onClick}>
        <IoIosArrowBack size={22} />
      </button>
  )
}

function Campaigns() {

  const [banners, setBanners] = useState([])
  const width = useWindowWidth()

  useEffect(() => {
    setBanners(Banners)
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: true,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
      <>
        <div className="container mx-auto md:pt-8" style={{width: width < 640 ? width : ''}}>
          <div className="hidden md:block">
            <Title>Kampanyalar</Title>
          </div>
          <Slider className="-mx-2 relative" {...settings}>
            {banners && banners.map(banner => (
              <div key={banner.id} className="px-2">
                <img src={banner.image} className="w-full sm:rounded-lg" alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </>
  )
}

export default Campaigns
import "./CarrouselStyle.scss";
import CarrouselSlide from "./CarrouselSlide/CarrouselSlide.tsx";

// Icons
import {  HiFire  } from "react-icons/hi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


// Carrousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Carrousel = ({  infos  }: {infos: Object}) => {
  
  const CarrouselItems = Object.values(infos); 


  return (
    <section className="Carrousel">
      <section className="Carrousel_Section">

        <section className="Carrousel_Section__Container">
          <section className="Carrousel_Section__Container-Box">
            <HiFire className="Carrousel_Section__Container-Box--Icon"/>  
            <h2 className="Carrousel_Section__Container-Box--Tittle">Las Melhores</h2>
          </section>
        </section>

        <Slider
          className="Carrousel_Section__Slick"      
          slidesToShow={3}
          speed={400}
          dots={true}
          infinite={true}
          slidesToScroll={1}
          nextArrow={  <FiChevronRight/>  }
          prevArrow={  <FiChevronLeft />  }
          responsive={[
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                speed: 800,
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                speed: 600
              }
            },
          ]}
        >
        {CarrouselItems.map(  (item: {url: string, date: string}, key: number) => {
          return (
            <CarrouselSlide key={  key  } item={  item  } />
          )
        })}        
        </Slider>
      </section>
    </section>
  )
}

export default Carrousel;

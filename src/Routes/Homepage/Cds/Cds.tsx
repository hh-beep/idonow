import "./CdsStyle.scss";
import CdsItem from "./CdsItem/CdsItem.tsx";

// Icons
import { PiDiscBold } from "react-icons/pi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Slick Carrousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";





const Cds = ({  infos  }: {infos: Object}) => {

  const listCds = Object.values(infos)



  return (
    <section className="Cds">
      <section className="Cds_Section">
        <section className="Cds_Section__Box">
          <section className="Cds_Section__Box-Container">
            <PiDiscBold className="Cds_Section__Box-Container--Icon"/>
            <h1 className="Cds_Section__Box-Container--Tittle">Cds Coleccion</h1>
          </section>
        </section>

        <Slider
          className="Cds_Section__Carrousel" 
          slidesToShow={1}
          speed={400}
          dots={true}
          infinite={true}
          slidesToScroll={1}
          nextArrow={  <FiChevronRight/>  }
          prevArrow={  <FiChevronLeft />  }
        >
          {listCds.map((  item: {key: string, name: string, madeBy: string, url: string, musics: Object}  ) => {
            return (
              <CdsItem cdsInfos={  item  } key={  item.key  }/>
            )
          })}
      </Slider>

    </section>
  </section>
  )
};

export default Cds;

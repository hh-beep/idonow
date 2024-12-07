import {  Link  } from "react-router-dom";
import "./CarrouselSlideStyle.scss";
import Logo from "../../../../assets/Logo-Black.svg";



const CarrouselSlide = ({  item  }: {  item: {url: string, date: string, key: string}}) => {
  
  const {url, date, key} = item;


  return (
    <Link to={"/Photo/" + key} state={  item  } className="Slide">
      <section className="Slide_Container">
        <img className="Slide_Container__Image" src={  url  }/> 
      
        <section className="Slide_Container__Box">
          <img className="Slide_Container__Box-Icon" src={  Logo  }/>
          <p className="Slide_Container__Box-Date">{date}</p>
        </section>
      </section>
    </Link>
  )
}

export default CarrouselSlide;

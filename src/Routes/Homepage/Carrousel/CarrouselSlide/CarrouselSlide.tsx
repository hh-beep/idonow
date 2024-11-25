import "./CarrouselSlideStyle.scss";
import Logo from "../../../../assets/Logo-Black.svg";



const CarrouselSlide = ({  url, date  }: {url: string, date: string}) => {
  
  console.log(url)


  return (
    <section className="Slide">
      <section className="Slide_Container">
        <img className="Slide_Container__Image" src={  url  }/> 
      
        <section className="Slide_Container__Box">
          <img className="Slide_Container__Box-Icon" src={  Logo  }/>
          <p className="Slide_Container__Box-Date">{date}</p>
        </section>
      </section>
    </section>
  )
}

export default CarrouselSlide;

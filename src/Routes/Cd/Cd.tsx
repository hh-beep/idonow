import {  useLocation  } from "react-router-dom";
import "./CdStyle.scss";



const Cd = () => {
  
  const {  name, madeBy, url, images  } = useLocation().state;


  return (
    <section className="Cd">
      <h1>{  name  }</h1>
      <p>{  madeBy  }</p>
      {images.map((  image: string  ) => {
        return (
        <img src={image}/>
        )
      })}
    </section>
  )
}

export default Cd;

import { useLocation  } from "react-router-dom";
import "./PhotoStyle.scss";



const Photos = () => {

  const {  url, date, key  } = useLocation().state;


  return (
    <section key={  key  } className="Photo">
      <h1>{  date}</h1>
      <img src={  url  }/>
    </section>
  )
};

export default Photos;

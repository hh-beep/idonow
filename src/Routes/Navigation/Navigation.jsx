import {  useState, useEffect  } from "react";
import "./NavigationStyle.scss";
import Logo from "../../assets/Logo.svg"
import NavigationPath from "./NavigationPath/NavigationPath";
import NavigationPathHamb from "./NavigationPathHamb/NavigationPathHamb";



const Navigation = ({  thisPath  }) => {

  const [isOpen, setIsOpen] = useState(false);

  const listPaths = [
    {  name: "Home", path: "/"  },
    {  name: "Fotos", path: "/Photos/"  },
    {  name: "Cds", path: "/Cds/"  }
  ]



  const navigationBar = (e) => {
    e.preventDefault();
   
    if (window.innerWidth <= 480) {
     isOpen ? setIsOpen(false) : setIsOpen(true) 
     console.log(isOpen)
    }
    return;
  }




  return (
    <section className={"Navigation " + (isOpen ? "isOpen" : "")}>
      <section className="Navigation_Section">

      
        <button onClick={  navigationBar  } className="Navigation_Section__Box ">
          <img src={  Logo  } className="Navigation_Section__Box-Image"/>
          Idonow
        </button>

        <NavigationPath listPaths={  listPaths  }/>
     
        <NavigationPathHamb isOpen={isOpen} listPaths={  listPaths  }/>
      </section>
    </section>
  )
}

export default Navigation;

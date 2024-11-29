import {  useState, useEffect  } from "react";
import "./AboutStyle.scss";
import { GiCrownedSkull } from "react-icons/gi";

// Images Imports
import My from "../../../assets/my.png";
import Bruh0 from "../../../assets/bruh_0.png";
import Bruh1 from "../../../assets/bruh_1.png";
import Bruh2 from "../../../assets/bruh_2.png";
import Bruh3 from "../../../assets/bruh_3.png";
import Bruh4 from "../../../assets/bruh_4.png";


const About = () => {

  const [image, setImage] = useState(My)
  const [pressed, isPressed] = useState(false)
    

  const buttonPress = (e: React.MouseEvent<HTMLElement>) => {  
    e.preventDefault()
    if (pressed) {  isPressed(false)  } 
    else {  isPressed(true)  }  
  }


  useEffect( () => {
    const imgsArray = [  Bruh0, Bruh1, Bruh2, Bruh3, Bruh4  ]

    if (pressed) {
      setTimeout(() => {
        const lastImage = image;
        const rand = Math.floor(Math.random() * imgsArray.length)
        const randImage = imgsArray[rand]

        if (randImage !== lastImage) {  setImage(randImage)  }
        else {  
          if (imgsArray[rand-1] !== undefined) {  setImage(imgsArray[rand - 1])}
          else {  setImage(imgsArray[rand+1])  }
        }
      }, 3000)
    }
    else {  setImage(My)  }
  })


  return (
    <section className="About">
      <section className="About_Container">
        <section className="About_Container__Box">
          <GiCrownedSkull className="About_Container__Box-Icon"/>
          <h1 className="About_Container__Box-Tittle">Abuout</h1>
        </section>
      </section>


      <figure className="About_Figure">
        <button onClick={  buttonPress  } className="About_Figure__Box">
          <img src={  image  } className="About_Figure__Box-Image"/>
        </button>

        <section className="About_Figure__Section">
          <p className="About_Figure__Section-Text">No sei o que escrever &#128557; Faço fotos, comidas, codigos e toco musica, além de ter uns cd veio de coleção (Black Sabbath, Raimundos, Mamonas, Ozzy e Ratos &#128526;). Já fiz uns outros projetos de programação como sites e apps de celular, alem de saber sobre react, javascript, vite e um pouco sobre javascript, python e essas paradas.</p>
        </section>
      </figure>
    </section>
  )
}

export default About;

import "./BannerStyle.scss"

// Images
import Logo from "../../../assets/logo-black.svg"
import Background from "../../../assets/background.jpg"



const Banner = () => {
  return (
    <section className="banner">
      {/* THis section is a block one for the image not occupie the 100% view height :D */}
      <section className="banner_Block"></section>



      <section className="banner_Image">
        <img 
          src={  Background  }
          className="banner_Image-Photo"
        />  
        <section className="banner_Image__Box">
          

          <h1 className="banner_Image__Box-Tittle">
            <img className="banner_Image__Box-Tittle--Image" src={  Logo  }/>
            Idonow
          </h1>


          <p className="banner_Image__Box-Text">algumas fotos de recordacion :D</p>
        </section>
      </section>
    </section>
  )
}

export default Banner;

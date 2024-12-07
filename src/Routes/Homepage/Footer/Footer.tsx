import "./FooterStyle.scss";
import FooterIcon from "./FooterIcon/FooterIcon";
import Logo from "../../../assets/Logo.svg";



const Footer = () => {

  const socialMedias = [
    {  id: "0", name: "Instagram", link: "https://instagram.com/hque_cabron"  },
    {  id: "1", name: "GitHub", link: "https://github.com/hh-beep/"  },
    {  id: "2", name: "Linkedin", link: "https://linkedin.com"  }
  ]



  const redirectSocial = (e: React.MouseEvent<HTMLElement>, socialLink: string) => {
    e.preventDefault();

    window.location.replace(socialLink); 
  }



  return (
    <section className="Footer">
      <section className="Footer_Section">
        <section className="Footer_Section__Box">
          <h2 className="Footer_Section__Box-Tittle">Redes Sociais</h2>
          <img className="Footer_Section__Box-Icon" src={  Logo  }/>
        </section>
      </section>


      <ul className="Footer_List">
        {socialMedias.map((  social: {id: string, name: string, link: string}  ) => {
          return (
            <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              return redirectSocial(e, social.link)
            }} className="Footer_List__Item">
              <FooterIcon typeOfIcon={  social.id  } />
              <h3 className="Footer_List__Item-Text">{  social.name  }</h3>
            </button>
          )
        })}
      </ul>
    </section>
  )
};

export default Footer;

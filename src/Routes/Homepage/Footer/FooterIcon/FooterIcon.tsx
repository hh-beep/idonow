import "./FooterIconStyle.scss";

// Icon
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";



const FooterIcon = ({  typeOfIcon  }: {typeOfIcon: string}) => {
  if (typeOfIcon === "0") return <FiInstagram className="FooterIcon"/>
  else if (typeOfIcon === "1") return <FiGithub className="FooterIcon"/>
  else return <FiLinkedin className="FooterIcon"/>
}

export default FooterIcon;

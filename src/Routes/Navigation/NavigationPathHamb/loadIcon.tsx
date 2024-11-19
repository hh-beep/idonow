import {
  FiHome,
  FiCamera,
  FiUser
} from "react-icons/fi"



const LoadIcon = ({  icon  }: {icon:string}) => {
  if (icon === "Home") {  return <FiHome className="Icon"/>  }
  else if (icon === "Photos") {  return <FiCamera className="Icon"/>  }
  else {  return <FiUser className="Icon"/>  } 
}

export default LoadIcon;

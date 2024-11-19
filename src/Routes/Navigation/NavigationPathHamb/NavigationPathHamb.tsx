import "./NavigationPathHamb.scss";
import {  Link  } from "react-router-dom";
import LoadIcon from "./loadIcon.tsx";



interface ListPathsModel {
  path: string,
  name: string,
} 

const NavigationPathHamb = ({  listPaths, isOpen  }: {listPaths: ListPathsModel[], isOpen: boolean}) => {
  return (
    <ul className={"ListHamb " + (isOpen? "isOpen" : "")}>
      {listPaths.map(  (value: {path: string, name: string}, key: number ) => {
        return (
          <Link className="ListHamb_Item" key={  key  } to={  value.path  }>  
            <LoadIcon icon={  value.name  }/>
            <p className="ListHamb_Item__Text">{  value.name  }</p>
          </Link>
        )
      })}
    </ul>
  )
}

export default NavigationPathHamb;

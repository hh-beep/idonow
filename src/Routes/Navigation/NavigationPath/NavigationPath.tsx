import "./NavigationPathStyle.scss";
import {  Link  } from "react-router-dom";



interface ListPathModel {
  path: string,
  name: string,
}



const NavigationPath = ({  listPaths  }: {listPaths: ListPathModel[]}) => {
  return (
    <ul className="List">
      {listPaths.map(  (value: {path: string, name:string}, key: number) => {
          return (
            <Link className="List_Item" key={  key  } to={  value.path  }>
              <p className="List_Item__Text">{  value.name  }</p>
            </Link>
          )})}
    </ul>
  )
}

export default NavigationPath

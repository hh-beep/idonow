import "./CdsItemStyle.scss";
import {  Link  } from "react-router-dom";



const CdsItem = ({  cdsInfos  }: { cdsInfos: {key: string, name: string, madeBy: string, url: string, musics: Object}}) => {

  const {key, name, madeBy, url, musics} = cdsInfos;



  const musicsList = Object.values(musics).slice(0, 3)  
  const musicsRemaining = musicsList.splice(4, 0, `E mais ${Object.values(musics).length - 3} musicas!`);


  console.log(musicsList)



  return (
    <Link className="CdsItem" to={  "/Cd/" + key  } state={  cdsInfos  }>
      <section className="CdsItem_Container">
        <section className="CdsItem_Container__Section">
          <h1 className="CdsItem_Container__Section-Tittle">{name}</h1>
          <p className="CdsItem_Container__Section-Text">{madeBy}</p>
          <section className="CdsItem_Container__Section-List">
            {musicsList.map((  music  ) => {
              return (
                <p className="CdsItem_Container__Section-List--Text">&#187; {music}</p>
              )
            })}
          </section>
        </section>

        <figure className="CdsItem_Container__Figure">
          <img className="CdsItem_Container__Figure-Image" src={  url  }/>
        </figure>
    </section>
   </Link>
  )
};

export default CdsItem;

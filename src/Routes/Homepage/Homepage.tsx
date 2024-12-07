import {
  useState,
  useEffect
} from "react";

// Imports da Homepage
// O ts ignore é pra ignorar pq o navigation é um arquivo jsx (não tsx), e dá erro : /
// @ts-ignore
import Navigation from "../Navigation/Navigation";
import Banner from "./Banner/Banner.tsx";
import Carrousel from "./Carrousel/Carrousel.tsx";
import About from "./About/About.tsx";
import Cds from "./Cds/Cds.tsx";
import Footer from "./Footer/Footer.tsx";

// API
import {
  getDatabase,
  onValue,
  ref
} from "firebase/database";



const Homepage = () => {
 
  // state inicializado com um modelo para evitar error do typescript
  const [db, setDb] = useState({
    AllPhotos: {},
    PhotosCategorys: {  Best_Photos: {}  },
    PhotosByDate: {},
    AllCds: {},
    CdsCategorys: {  Best_Cds: {}  },
    CdsByBands: {},
  })



  useEffect(() => {
    const reference = ref(getDatabase(), "/")
    onValue(  reference, (snap) => {
      setDb(snap.val())
    })
  }, [])



  return (
    <section className="Page">
      <Navigation thisPath="/"/>
      <Banner />
      <Carrousel infos={  db !== undefined ? db.PhotosCategorys.Best_Photos : {}  }/>
      <About />
      <Cds infos={  db !== undefined ? db.CdsCategorys.Best_Cds : {}  }/>
      <Footer />
    </section>
  )
}

export default Homepage;

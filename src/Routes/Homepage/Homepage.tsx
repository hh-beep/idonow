// The parts of the Homepage webpage
// @ts-ignore
import Navigation from "../Navigation/Navigation"
// o ts ignore é pra ignorar pq o navigation é um arquivo jsx (não tsx), e dá erro : /
import Banner from "./Banner/Banner.tsx"
import Carrousel from "./Carrousel/Carrousel.tsx"



const Homepage = () => {
  return (
    <>
      <Navigation thisPath="/"/>
      <Banner />
      <Carrousel />
    </>
  )
}

export default Homepage;

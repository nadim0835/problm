import Taskboard from "./assets/Task/Taskboard";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";



export default function App() {
  return (
    <>
  
    <Header/>
    <div className=" flex flex-col items-center justify-center">

    <HeroSection/>
    <Taskboard/>
    </div>
    <Footer/>
    


    </>
  )
}

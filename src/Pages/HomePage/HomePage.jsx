import Banner from "../../Components/Banner/Banner";
import CountSection from "../../Components/HomePageComponents/CountSection/CountSection";
import Navbar from "../../Shared/Navbar/Navbar";

const HomePage = () => {
     return (
          <div>
               <Navbar></Navbar>
               <Banner></Banner>
               <CountSection></CountSection>
          </div>
     );
};

export default HomePage;
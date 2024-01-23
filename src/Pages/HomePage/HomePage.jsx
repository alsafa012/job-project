import Banner from "../../Components/Banner/Banner";
import CountSection from "../../Components/HomePageComponents/CountSection/CountSection";
// import Navbar from "../../Shared/Navbar/Navbar";
import WebsiteTitle from "../../Shared/WebsiteTitle/WebsiteTitle";

const HomePage = () => {
     return (
          <div>
               <WebsiteTitle title={"House Hunter || Home Page"}></WebsiteTitle>
               {/* <Navbar></Navbar> */}
               <Banner></Banner>
               <CountSection></CountSection>
          </div>
     );
};

export default HomePage;
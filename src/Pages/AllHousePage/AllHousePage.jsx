import { Link } from "react-router-dom";
import useAllHousesDetails from "../../Components/hook/useAllHousesDetails";
import ShowAllHousePage from "./ShowAllHousePage";
import { GiClick } from "react-icons/gi";
import Container from "../../Shared/Container/Container";
// import Navbar from "../../Shared/Navbar/Navbar";
import WebsiteTitle from "../../Shared/WebsiteTitle/WebsiteTitle";
const AllHousePage = () => {
     const [allHouseList] = useAllHousesDetails();
     console.log("allHouseList", allHouseList);
     return (
          <div className="light-bg">
               <WebsiteTitle title={"Our House"}></WebsiteTitle>
               {/* <Navbar></Navbar> */}
               <Container>
                    <div className="pt-16">
                         {allHouseList.length === 0 ? (
                              <div className="min-h-screen flex justify-center flex-col">
                                   <p className="text-3xl text-red-400 font-bold text-center">
                                        You have not Added any House yet..!
                                   </p>
                                   <Link to="/dashboard/addHouse">
                                        <button className="btn red flex justify-center mx-auto my-5">
                                             click here for Add House
                                             <span className="text-2xl">
                                                  <GiClick />
                                             </span>
                                        </button>
                                   </Link>
                              </div>
                         ) : (
                              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-xl p-5">
                                   {allHouseList.map((house) => (
                                        <ShowAllHousePage
                                             key={house._id}
                                             house={house}
                                        ></ShowAllHousePage>
                                   ))}
                              </div>
                         )}
                    </div>
               </Container>
          </div>
     );
};

export default AllHousePage;

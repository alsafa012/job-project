import { Link } from "react-router-dom";
import errorImg from "../../assets/ErrorPage/error-404.webp";
import Container from "../Container/Container";
import WebsiteTitle from "../WebsiteTitle/WebsiteTitle";
const ErrorPage = () => {
     return (
          <div className="light-bg">
               <WebsiteTitle title={"Error Page"}></WebsiteTitle>
               <Container>
                    <div className="md:flex gap-5 justify-center p-10 md:w-[90%] lg:w-[80%] mx-auto">
                         <div className="flex-1">
                              <div className="flex flex-col items-start text-white">
                                   <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
                                        Sorry!
                                   </h1>
                                   <p className="my-5 text-2xl md:text-3xl lg:text-4xl animate-bounce">This Page is Not Found</p>
                                   <Link to="/">
                                        <button className="btn primary-btn text-xl md:text-3xl">
                                             Back To Home
                                        </button>
                                   </Link>
                              </div>
                         </div>
                         <div className="flex-1">
                              <img src={errorImg} alt="" />
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default ErrorPage;
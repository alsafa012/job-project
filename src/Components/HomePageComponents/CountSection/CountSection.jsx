import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CountSection = () => {
     const [scrollTrigger, setScrollTrigger] = useState(false);
     return (
          <ScrollTrigger
               onEnter={() => setScrollTrigger(true)}
               onExit={() => setScrollTrigger(false)}
          >
               <div className="h-[50vh] w-full bg-[url('https://i.ibb.co/WGLDyQ8/download.jpg')] bg-cover bg-no-repeat">
               {/* <div className="h-[50vh] w-full bg-[url('https://i.ibb.co/sHc4f06/fha-mortgage-rent-out-home-scaled.jpg')] bg-cover bg-no-repeat"> */}
               {/* <div className="h-[50vh] w-full bg-[url('https://i.ibb.co/8g7RzW3/motor-show-shopping-cars-online.png')] bg-no-repeat bg-cover"> */}
                    <div className="grid grid-cols-3 gap-5 text-center w-[80%] m-auto place-items-center h-full">
                         <div className="text-black">
                              <h2 className="text-3xl font-bold">
                                   {scrollTrigger && (
                                        <CountUp
                                             start={0}
                                             end={5}
                                             duration={2.75}
                                        />
                                   )}
                                   +
                              </h2>
                              <p className="text-2xl font-medium">
                                   Brands
                              </p>
                         </div>
                         <div className="text-black">
                              <h2 className="text-3xl font-bold">
                                   {scrollTrigger && (
                                        <CountUp
                                             start={0}
                                             end={65}
                                             duration={2.75}
                                        />
                                   )}
                                   +
                              </h2>
                              <p className="text-2xl font-medium">
                                   Collections
                              </p>
                         </div>
                         <div className="text-black">
                              <h2 className="text-3xl font-bold">
                                   {scrollTrigger && (
                                        <CountUp
                                             start={0}
                                             end={100}
                                             duration={2.75}
                                        />
                                   )}
                                   %
                              </h2>
                              <p className="text-2xl font-medium">
                                   Authentic
                              </p>
                         </div>
                    </div>
               </div>
          </ScrollTrigger>
     );
};

export default CountSection;
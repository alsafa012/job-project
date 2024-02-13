import Marquee from "react-fast-marquee";

const Slider = () => {
     return (
          <div className="my-20">
               <Marquee pauseOnHover={true} speed={40}>
                    <img
                         className="w-[200px] md:w-[500px] h-[60vh] object-fill"
                         src="https://i.ibb.co/17QRzdv/images-3.jpg"
                         alt=""
                    />
                    <img
                         className="w-[200px] md:w-[500px] h-[60vh] object-fill"
                         src="https://i.ibb.co/mS6hdX0/images-2.jpg"
                         alt=""
                    />
                    <img
                         className="w-[200px] md:w-[500px] h-[60vh] object-fill"
                         src="https://i.ibb.co/ygDbTRj/images.jpg"
                         alt=""
                    />
                    <img
                         className="w-[200px] md:w-[500px] h-[60vh] object-fill"
                         src="https://i.ibb.co/jrzw0L9/images-1.jpg"
                         alt=""
                    />
               </Marquee>
          </div>
     );
};

export default Slider;

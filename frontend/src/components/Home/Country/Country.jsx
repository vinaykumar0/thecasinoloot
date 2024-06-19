import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const city = [
  { name: "All Country", link: "/country/all" },
  { name: "Australis", link: "/country/aus" },
  { name: "United State", link: "/country/us" },
  { name: "United Kingdom", link: "/country/uk" },
  { name: "French", link: "/country/french" },
  { name: "Non Deposite", link: "/country/nd" },
];
// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
const Country = () => {
  return (
    <section className="py-14 pb-7 md:py-32 md:pb-16 lg:py-44 lg:pb-20 xl:py-48 xl:pb-24 bg-[#1b1b29]">
      <div className="container">
        <div className="mb-12 flex flex-col flex-wrap gap-y-6 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 xl:gap-y-12 justify-center items-center">
          <div className="flex flex-col-reverse gap-y-2 sm:gap-y-3 md:gap-y-4 lg:gap-y-5 xl:gap-y-6 items-center">
            <h2 className="leadin-none text-3xl font-bold tracking-tight text-primary text-white dark:text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-6.5xl xl:leading-none">
              Explore{" "}
              <span className="shape-bg md:pb-[2.5rem] text-white">
                More Country
              </span>
            </h2>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        grabCursor={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {city.map((item) => (
          <SwiperSlide className="h-[200px] w-[220px] pr-5">
            <div className="mySwiperSLider">
              <Link className="flex h-full rounded-full" to={`${item.link}`}>
                <img
                  className="w-full h-full rounded-full object-cover"
                  src="https://www.shutterstock.com/image-vector/political-world-map-name-borders-260nw-704542504.jpg"
                  alt="Guests Unboxings"
                />
                <div className="absolute left-16 w-1/2 md:w-1/2 lg:w-2/5 xl:w-1/3 bottom-12 z-10 text-black">
                  <h3 className="text-1.5xl font-bold leading-tighter mb-2 text-[#060d24]">
                    {item.name}
                  </h3>
                  {/* <div className="text-sm leading-tight">44 Games</div> */}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-full rounded-full bg-abs-gameee transition-all opacity-100 group-hover:opacity-0" />
                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-abs-game transition-all opacity-0 group-hover:opacity-100 scale-y-0 group-hover:scale-y-100 origin-bottom duration-200" />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Country;

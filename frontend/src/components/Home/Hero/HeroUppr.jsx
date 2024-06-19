import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Reuse from "./Reuse";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { All } from "../../../AllData";
import axios from "axios";

const HeroUppr = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const resp = await axios.get(`http://localhost:3000/api/v1/all`);
      if (resp) {
        setData(resp.data);
      }
    };

    fetch();
  }, []);
  return (
    //   <main id='main-content' className='grow lg:pt-0'></main>
    <div className="flex flex-col h-[100%]">
      <div className="grow lg:pt-0">
        <section className="bg-[#1b1b29]">
          <div className="container">
            <div className="relative z-10 -mt-20 flex flex-col justify-between py-10 lg:-mt-[180px]">
              <div
                className="relative pl-5 w-[104.3%]"
                style={{ height: "325px" }}
              >
                <Swiper
                  slidesPerView={"auto"}
                  spaceBetween={30}
                  // pagination={{
                  //     clickable: true,
                  // }}
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper"
                >
                  {data.map((item) => (
                    <SwiperSlide
                      style={{ width: "300px", marginRight: "10px" }}
                    >
                      <Reuse
                        index={item.id}
                        countryname={item.countryname}
                        casinoname={item.casinoname}
                        image={item.casinoimage}
                        price={item.price}
                        playLink={item.playlink}
                      />
                    </SwiperSlide>
                  ))}

                  {/* <SwiperSlide style={{ width: '300px', marginRight: '10px' }}>
                                <Reuse />
                            </SwiperSlide>
                            <SwiperSlide style={{ width: '300px', marginRight: '10px' }}>
                                <Reuse />
                            </SwiperSlide>
                            <SwiperSlide style={{ width: '300px', marginRight: '10px' }}>
                                <Reuse />
                            </SwiperSlide>
                            <SwiperSlide style={{ width: '300px', marginRight: '10px' }}>
                                <Reuse />
                            </SwiperSlide>

                            <SwiperSlide style={{ width: '300px', marginRight: '10px' }}    >
                                <Reuse />
                            </SwiperSlide> */}
                </Swiper>
              </div>
              {/* min-[1330px]:-left-0 */}
              <div className="absolute lg:-right-14 -right-4 bottom-[0px] z-10  min-[1330px]:translate-x-0">
                <div className="flex flex-wrap items-center justify-between">
                  <div className="flex">
                    <div
                      className="js-vv-videos-featured-swiper-btn-prev relative isolate flex h-[38px] w-[40px] items-center justify-center bg-[#1b1b29] text-primary before:absolute before:inset-y-0 before:left-0 before:-z-10 before:block before:w-full before:origin-left before:scale-x-0 before:bg-gray-100 before:transition-transform before:duration-300 hover:cursor-pointer hover:text-accent hover:before:origin-right hover:before:scale-x-100 dark:bg-gray-800 dark:text-white dark:before:bg-gray-700 dark:hover:text-accent"
                      tabIndex={0}
                      role="button"
                      aria-label="Previous slide"
                      aria-controls="swiper-wrapper-462445f57536f282"
                    >
                      <IoIosArrowBack size={20} color="#fff" />
                    </div>
                    <div
                      className="js-vv-videos-featured-swiper-btn-next relative isolate flex h-[38px] w-[40px] items-center justify-center bg-[#1b1b29] text-primary before:absolute before:inset-y-0 before:left-0 before:-z-10 before:block before:w-full before:origin-right before:scale-x-0 before:bg-gray-100 before:transition-transform before:duration-300 hover:cursor-pointer hover:text-accent hover:before:origin-left hover:before:scale-x-100 dark:bg-gray-800 dark:text-white dark:before:bg-gray-700 dark:hover:text-accent"
                      tabIndex={0}
                      role="button"
                      aria-label="Next slide"
                      aria-controls="swiper-wrapper-462445f57536f282"
                    >
                      {/* <svg className="h-[10px] w-[10px]" fill="currentColor"> */}
                      <IoIosArrowForward size={20} color="#fff" />
                      {/* </svg> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="shadow-3xl absolute inset-y-0 -left-10 -right-[4.4%] bg-[#29293d] dark:bg-gray-800 min-[1330px]:-left-[1rem] md:-left-[0.5rem]" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroUppr;

import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { IoIosArrowBack,IoIosArrowForward  } from "react-icons/io";

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Reuse from '../Hero/Reuse';
import { All } from '../../../AllData';
import axios from 'axios';
const Featured = () => {
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

        <section className='py-8 md:py-14 lg:py-16 xl:py-[9rem] bg-[#29293d]'>
            <div className='container'>
                <div className="mb-8 flex flex-wrap items-end justify-between gap-y-6 sm:mb-12 sm:flex-row md:mb-16 lg:mb-20 xl:mb-24 xl:gap-y-12">
                    <div className="flex flex-col-reverse gap-y-2 sm:gap-y-3 md:gap-y-4 lg:gap-y-5 xl:gap-y-6">
                        <h3 className="leadin-none text-2xl font-bold tracking-tight text-primary text-white dark:text-white sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:leading-none">
                            Our Newest Casino
                        </h3>

                    </div>
                    <div className="flex">
                          <div
                              className="js-vv-latest-videos-swiper-btn-prev flex h-[36px] w-[30px] items-center justify-center bg-white text-primary hover:cursor-pointer hover:text-accent dark:bg-gray-900 dark:text-white dark:hover:text-accent md:h-[60px] md:w-[50px]"
                              tabIndex={0}
                              role="button"
                              aria-label="Previous slide"
                              aria-controls="swiper-wrapper-779d109cfeef18548"
                          >
                             <IoIosArrowBack color='#000' size={22}/>
                          </div>
                          <div
                              className="js-vv-latest-videos-swiper-btn-next flex h-[36px] w-[30px] items-center justify-center bg-white hover:cursor-pointer hover:text-accent dark:bg-gray-900 dark:text-white dark:hover:text-accent md:h-[60px] md:w-[50px]"
                              tabIndex={0}
                              role="button"
                              aria-label="Next slide"
                              aria-controls="swiper-wrapper-779d109cfeef18548"
                          >
                              <IoIosArrowForward color='#000' size={22}/>
                          </div>
                      </div>
                </div>

                <div className='w-[104.2%]'>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={30}
                        // grabCursor={true}
                        //   pagination={{
                        //       clickable: true,
              //   }}
              // speed={100}
             
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
                        modules={[Autoplay,Pagination]}
                        className="mySwiper"
                    >
              {
                data.map((item) => (
                  <SwiperSlide style={{ width: '300px', marginRight: '10px' }}>
                    <Reuse index={item.id} countryname={item.countryname} casinoname={item.casinoname} image={item.casinoimage} price={item.price} playLink={item.playLink} />
                  </SwiperSlide>

                ))
              }
                    </Swiper>
               </div>
            </div></section>
    )
}

export default Featured
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaRegBell } from "react-icons/fa";
import Pic from './piccc.png'

import { IoIosArrowForward } from "react-icons/io";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Section = () => {
    const[open,setOpen]=useState(false)
  return (
      <section className='py-14 md:py-32 lg:py-44 xl:py-48 bg-[#1b1b29] relative'>
          <div className='container'>
              <div className='grid grid-cols-12 gap-y-12 md:gap-x-[30px]'>
                  <div className='col-span-full md:col-span-8'>
                      <Swiper
                          cssMode={true}
                        //   navigation={true}
                        //   pagination={true}
                          mousewheel={true}
                          keyboard={true}
                          modules={[ Mousewheel, Keyboard]}
                          className="mySwiper"
                      >
                          <SwiperSlide><div className="bg-[#1b1b29] overflow-hidden relative isolate flex h-full">
                              <img
                                  className="absolute bottom-0 right-[-185px] h-auto max-w-full"
                                  src={Pic}
                                  alt="Tech & Gadgets Unboxing"
                                  data-swiper-parallax={-250}
                                  style={{
                                      transitionDuration: "0ms",
                                      transform: "translate3d(-250px, 0px, 0px)"
                                  }}
                              />
                              <div
                                  className="absolute left-4 text-start bottom-4 max-w-[150px] font-bold uppercase leading-none tracking-tighter text-white sm:text-lg sm:leading-none md:left-[7rem] md:bottom-5 md:text-xl md:leading-none lg:text-2xl lg:leading-none"
                                  data-swiper-parallax={-100}
                                  data-swiper-parallax-duration={1100}
                                  style={{
                                      transitionDuration: "0ms",
                                      transform: "translate3d(-100px, 0px, 0px)"
                                  }}
                              >
                                  The Casino Loot
                              </div>
                              <div className="absolute left-0 bottom-0 -z-10 aspect-[1.1] w-2/3 bg-accent sm:aspect-[0.83] sm:w-[48%]" />
                          </div>
</SwiperSlide>
                          <SwiperSlide>Slide 2</SwiperSlide>
                          <SwiperSlide>Slide 3</SwiperSlide>
                          <SwiperSlide>Slide 4</SwiperSlide>
                          <SwiperSlide>Slide 5</SwiperSlide>
                          <SwiperSlide>Slide 6</SwiperSlide>
                          <SwiperSlide>Slide 7</SwiperSlide>
                          <SwiperSlide>Slide 8</SwiperSlide>
                          <SwiperSlide>Slide 9</SwiperSlide>
                      </Swiper>
                  </div>
                  <div className="col-span-full md:col-span-4 xl:-ml-[30px] text-white">
                      <div className="mb-4 flex flex-wrap items-end justify-between gap-y-6 sm:mb-5 sm:flex-row md:mb-6 lg:mb-8 xl:mb-12 xl:gap-y-12">
                          <div className="flex flex-col-reverse gap-y-1 lg:gap-y-2 xl:gap-y-3">
                              <h3 className="text-white leading-none text-2xl font-bold tracking-tight text-primary dark:text-white sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:leading-none">
                                  Get Daily Instant 
                                  <br />
                                 Update
                              </h3>
                              <div className="leading-tighter text-primary text-white dark:text-white lg:text-2xl">
                                  News News!
                              </div>
                          </div>
                      </div>
                      <div className="pt-1 lg:text-lg lg:leading-8">
                          <div className="mb-6 md:mb-8 lg:mb-10 xl:mb-12">
                              <div className="mb-7 flex gap-4">
                                  <button
                                      className="group flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent md:mt-2"
                                      href="#"
                                  >
                                      <FaRegBell color='#fff' size={23}/>
                                      {/* <svg
                                          role="img"
                                          className="h-6 w-6 fill-white will-change-transform group-hover:animate-ring"
                                      >
                                          <use xlinkHref="assets/img/yt1/sprite.svg#bell" />
                                      </svg> */}
                                  </button>
                                  <div className="flex-1">
                                      Remember to{" "}
                                      <Link
                                         onClick={()=>setOpen(!open)}
                                          className="text-[red] font-bold text-primary transition-colors hover:text-accent dark:text-white dark:hover:text-accent"
                                      >
                                          turn on the notifications bell
                                      </Link>{" "}
                                      so you’ll be informed when a new Casino added or Best Offer Coming!
                                  </div>
                              </div>
                              <p>
                                  We really appreaciate all your Time, Reviews and suggestions, so keep
                                  em coming!
                              </p>
                          </div>
                          <Link
                              className="inline-flex items-center gap-x-3 text-xs font-bold uppercase text-primary md:text-sm"
                              to="/country/all"
                          >
                              <span className="relative inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-primary dark:border-white">
                                  {/* <svg
                                      role="img"
                                      className="h-[8px] w-[8px] fill-primary dark:fill-white"
                                  >
                                      <use xlinkHref="assets/img/yt1/sprite.svg#chevron-right" />
                                  </svg>{" "} */}
                                  <IoIosArrowForward color='#fff'/>

                              </span>
                              <span className="text-white text-primary transition-colors hover:text-accent dark:text-white dark:hover:text-accent">
                                  View All Games
                              </span>
                          </Link>
                      </div>
                  </div>

              </div> 
          </div>
          {/* {
              open && (
                  <div className='absolute top-[20%] w-[100%] h-[100%] z-50'>
                      <div className=' w-[50%] bg-[#29293d] h-[50%] m-auto'>
                          <div>
                              
                          </div>
                      </div>
                  </div>
              )
          } */}
      </section>
  )
}

export default Section
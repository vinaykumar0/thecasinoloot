import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroImage from "./HeroImage.jpg";
import Drunk from "./girl.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { PiInstagramLogoFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import Images from "./Image.jpeg";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <div className="h-[500px] md:h-[640px] lg:h-[880px] bg-primary relative z-10">
      <Swiper
        spaceBetween={30}
        //   centeredSlides={true}

        direction={"vertical"}
          autoplay={{
              delay: 3000,
              disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-full w-full bg-[#1b1b29] lg:bg-gradient-radial-hero">
            <div className="container h-full">
              <div className="grid h-full grid-cols-12 gap-y-10 md:gap-x-6 lg:gap-x-[30px]">
                <div className="col-span-full lg:col-span-6 lg:col-start-2">
                  <div className="px-6 md:pt-24 pt-16 text-center lg:px-0 lg:pt-32 lg:text-left">
                    <img
                      className="mt-1 mb-4 hidden opacity-0 transition-opacity duration-500 group-[.vv-slide-played]:opacity-100 group-[.swiper-slide-active:not(.vv-slide-played)]:opacity-100 lg:block"
                      src="assets/img/yt1/youtube.svg"
                      alt="YouTube Logo"
                    />
                    <h2 className="mb-5 flex flex-col items-center font-bold leading-none lg:items-start">
                      <span className="relative overflow-hidden after:absolute after:inset-y-0 after:left-0 after:block after:w-[300%] after:-translate-x-full after:bg-white after:transition-transform after:duration-[1500ms] after:ease-linear group-[.swiper-slide-active:not(.vv-slide-played)]:after:translate-x-full group-[.vv-slide-played]:after:opacity-0">
                        <span className="text-white text-2xl leading-6y tracking-tighter transition-opacity delay-[400ms] duration-500 group-[.vv-slide-played]:opacity-100 group-[.swiper-slide-active:not(.vv-slide-played)]:opacity-100 lg:text-5xl xl:text-6.5xl">
                          The Casino Loot{" "}
                        </span>{" "}
                      </span>
                      <span className="relative overflow-hidden after:absolute after:inset-y-0 after:left-0 after:block after:w-[300%] after:-translate-x-full after:bg-white after:transition-transform after:delay-[300ms] after:duration-[1500ms] after:ease-linear group-[.swiper-slide-active:not(.vv-slide-played)]:after:translate-x-full group-[.vv-slide-played]:after:opacity-0">
                        <span className="-mt-1 text-3xl leading-6 tracking-normal text-[#fffac3] transition-opacity delay-[600ms] duration-500 group-[.vv-slide-played]:opacity-100 group-[.swiper-slide-active:not(.vv-slide-played)]:opacity-100 lg:-mt-2 lg:text-5xl xl:text-[4.5rem] xl:leading-[95px]">
                          FOR TOP PLAYER
                        </span>
                      </span>
                    </h2>
                    <div className="mb-8 pr-4 text-sm tracking-tighter text-white lg:mb-12 lg:text-lg lg:leading-8 xl:pr-20">
                      Step into the realm of exhilarating online casino
                      entertainment with our dedicated platform! Discover
                      top-notch reviews, exclusive bonuses, and invaluable
                      insider insights to elevate your gaming journey
                    </div>
                    <Link
                      to="/"
                      className="relative isolate inline-flex overflow-hidden border-2 bg-transparent py-3 px-4 text-center text-xs font-bold leading-none transition-colors before:absolute before:inset-y-0 before:left-0 before:-z-10 before:block before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 lg:py-[14px] lg:px-12 lg:text-sm py-3 px-4 lg:py-[14px] lg:px-12 bg-transparent border-2 border-white before:bg-white text-white lg:text-white hover:text-primary"
                    >
                      Subscribe Now!
                    </Link>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-5">
                  <div className="scale-90 transition-all duration-700 group-[.swiper-slide-active:not(.vv-slide-played)]:scale-100 group-[.vv-slide-played]:scale-100 group-[.vv-slide-played]:opacity-100 group-[.swiper-slide-active:not(.vv-slide-played)]:opacity-100 lg:absolute lg:bottom-6 lg:-ml-4 lg:block">
                    <img src={Drunk} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative isolate h-full w-full bg-primary">
            <div className="container h-full">
              <div className="grid h-full grid-cols-12 gap-y-10 md:gap-x-6 lg:gap-x-[30px]">
                <div className="col-span-full md:col-span-8 md:col-start-3 lg:col-span-10 lg:col-start-2">
                  <div className="px-6 pt-28 text-center md:pt-36 lg:px-0 lg:pt-44">
                    {/* <div className="mb-2 flex flex-wrap justify-center gap-1 text-sm text-white lg:mb-6 lg:pt-2 lg:text-base lg:text-white">
                                      <div>190k views</div>
                                      <div>-</div>
                                      <div>13 hours ago</div>
                                  </div> */}
                    <h2 className="mb-4 text-2xl font-bold leading-none tracking-tighter sm:text-2.5xl md:mb-6 md:text-3xl md:leading-none lg:mb-12 lg:text-[3.75rem] text-white lg:leading-none">
                      <Link
                        //   href="_yt1-single.html"
                        className="hover:opacity-80 transition-opacity duration-300"
                      >
                        We Provide Gambling Place To Get Powers Of Ace Winners!
                      </Link>
                    </h2>
                    <div className="mx-auto mb-8 max-w-xl text-sm tracking-tighter text-white lg:mb-12 lg:text-lg lg:leading-8">
                      TheCasinoLoot offers many of the most popular casino
                      games. you will find in some of the most famous casino's
                      around of the world
                    </div>
                    <Link
                      to="/"
                      className="relative isolate inline-flex overflow-hidden border-2 bg-transparent py-3 px-4 text-center text-xs font-bold leading-none transition-colors before:absolute before:inset-y-0 before:left-0 before:-z-10 before:block before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 lg:py-[14px] lg:px-12 lg:text-sm py-3 px-4 lg:py-[14px] lg:px-12 bg-transparent border-2 border-white before:bg-white text-white lg:text-white hover:text-primary"
                    >
                      Check it Now!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 ease-out duration-200 -z-10 bg-[url('https://image.slidesdocs.com/responsive-images/background/playing-3d-roulette-chips-cards-dice-and-aces-on-hypnotic-abstract-powerpoint-background_f5bbafe8ed__960_540.jpg')] bg-cover bg-center bg-no-repeat ease-out transition-transform duration-[8000ms] group-[.swiper-slide-active]:scale-110" />
            <div className="absolute inset-0 -z-10 bg-gray-900/80" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative isolate h-full w-full bg-primary">
            <div className="container h-full">
              <div className="grid h-full grid-cols-12 gap-y-10 md:gap-x-6 lg:gap-x-[30px]">
                <div className="col-span-full md:col-span-8 md:col-start-3 lg:col-span-10 lg:col-start-2">
                  <div className="px-6 pt-28 text-center md:pt-36 lg:px-0 lg:pt-44 lg:text-left">
                    <div className="mb-3 lg:mb-6 lg:pt-2">
                      <Link
                        className="bg-accent px-3 py-1 text-xs font-bold uppercase leading-snug text-white transition-colors hover:bg-accent/90 lg:text-sm"
                        to="/"
                      >
                        Unboxings
                      </Link>
                    </div>
                    <h2 className="mb-6 text-2xl font-bold leading-none tracking-tighter sm:text-2.5xl md:mb-6 md:text-3xl text-white md:leading-none lg:mb-7 lg:text-[4rem] lg:leading-16">
                      <Link
                        //   href="_yt1-single-2.html"
                        className="transition-opacity duration-300 hover:opacity-80"
                      >
                        Refer Player Now And Start Earning House Edge!
                      </Link>
                    </h2>
                    <ul className="mb-6 flex flex-wrap justify-center divide-x divide-accent text-xs leading-none tracking-tighter text-white md:mb-8 md:text-sm md:text-white lg:mb-14 lg:justify-start lg:text-base lg:text-white">
                      <li className="px-2 leading-none first:pl-0">
                        Refer our brand and earn money through participating in
                        TheCasinoLoot Affilate Program
                      </li>
                      {/* <li className="px-2 leading-none">Jack Master</li>
                                      <li className="px-2 leading-none last:pr-0">3 Comments</li> */}
                    </ul>
                    <ul className="flex flex-wrap justify-center gap-4 md:gap-7 lg:justify-start">
                      <li>
                        <Link
                          href=""
                          className="bg-social-facebook hover:bg-social-facebook/90 relative flex items-center justify-center gap-4 py-3 px-4 text-xs font-bold uppercase leading-none text-white transition-colors lg:py-[14px] lg:pr-8"
                        >
                          <svg className="h-4 w-4" fill="currentColor">
                            <use xlinkHref="assets/img/social-icons.svg#facebook" />
                          </svg>{" "}
                          <span className="hidden sm:inline">Share Link</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href=""
                          className="bg-social-twitter hover:bg-social-twitter/90 relative flex items-center justify-center gap-4 py-3 px-4 text-xs font-bold uppercase leading-none text-white transition-colors lg:py-[14px] lg:pr-8"
                        >
                          <svg className="h-4 w-4" fill="currentColor">
                            <use xlinkHref="assets/img/social-icons.svg#twitter" />
                          </svg>{" "}
                          <span className="hidden sm:inline">Explore More</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`absolute inset-0 -z-10 object-cover back-image-hero bg-cover bg-center bg-no-repeat transition-transform duration-[8000ms] ease-out group-[.swiper-slide-active]:scale-110`}
            />
            <div className="absolute inset-0 -z-10 bg-gray-900/80" />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <div className="vv-hero-swiper-pagination js-vv-hero-swiper-pagination vv-pagination-circle-bullets absolute right-4 lg:right-10 top-1/2 !left-auto -translate-y-[calc(50%+40px)] !bottom-auto z-20 flex !w-4 lg:-translate-y-[calc(50%+70px)] flex-col gap-[10px] swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
              <span
                  className="swiper-pagination-bullet w-4 h-4 m-0 opacity-100 bg-none bg-transparent"
                  tabIndex={0}
              >
                  <svg className="w-4 h-4" viewBox="0 0 16 16">
                      <circle
                          className="path"
                          cx={8}
                          cy={8}
                          r={7}
                          fill="none"
                          transform="rotate(-90 8 8)"
                          stroke="#fff1a5"
                          strokeOpacity={1}
                          strokeWidth="2px"
                      />
                      <circle
                          cx={8}
                          cy={8}
                          r={3}
                          fill="none"
                          strokeWidth="2px"
                          stroke="#ffffff"
                      />
                  </svg>
              </span>
              <span
                  className="swiper-pagination-bullet w-4 h-4 m-0 opacity-100 bg-none bg-transparent"
                  tabIndex={0}
              >
                  <svg className="w-4 h-4" viewBox="0 0 16 16">
                      <circle
                          className="path"
                          cx={8}
                          cy={8}
                          r={7}
                          fill="none"
                          transform="rotate(-90 8 8)"
                          stroke="#fff1a5"
                          strokeOpacity={1}
                          strokeWidth="2px"
                      />
                      <circle
                          cx={8}
                          cy={8}
                          r={3}
                          fill="none"
                          strokeWidth="2px"
                          stroke="#ffffff"
                      />
                  </svg>
              </span>
              <span
                  className="swiper-pagination-bullet w-4 h-4 m-0 opacity-100 bg-none bg-transparent swiper-pagination-bullet-active"
                  tabIndex={0}
                  aria-current="true"
              >
                  <svg className="w-4 h-4" viewBox="0 0 16 16">
                      <circle
                          className="path"
                          cx={8}
                          cy={8}
                          r={7}
                          fill="none"
                          transform="rotate(-90 8 8)"
                          stroke="#fff1a5"
                          strokeOpacity={1}
                          strokeWidth="2px"
                      />
                      <circle
                          cx={8}
                          cy={8}
                          r={3}
                          fill="none"
                          strokeWidth="2px"
                          stroke="#ffffff"
                      />
                  </svg>
              </span>
          </div> */}

      <ul className="absolute top-32 left-3 z-20 flex flex-col flex-wrap gap-3 lg:top-1/2 lg:left-10 lg:-translate-y-[calc(50%+70px)] lg:-rotate-180 lg:flex-row lg:gap-9 lg:[writing-mode:vertical-rl]">
        <li>
          <Link
            className="inline-flex items-center gap-[9px] text-white transition-opacity hover:opacity-70"
            to="/"
            title="Facebook"
          >
            <svg className="h-3 w-3 lg:rotate-90" fill="currentColor">
              {/* <use xlinkHref="assets/img/social-icons.svg#facebook" /> */}
              <FaFacebook size={10} />
            </svg>{" "}
            <span className="hidden text-[11px] font-bold uppercase lg:inline-block">
              Facebook
            </span>
          </Link>
        </li>
        <li>
          <Link
            className="inline-flex items-center gap-[9px] text-white transition-opacity hover:opacity-70"
            to="/"
            title="Twitter"
          >
            <svg className="h-3 w-3 lg:rotate-90" fill="currentColor">
              <AiFillTwitterCircle size={10} />
            </svg>{" "}
            <span className="hidden text-[11px] font-bold uppercase lg:inline-block">
              Twitter
            </span>
          </Link>
        </li>
        <li>
          <Link
            className="inline-flex items-center gap-[9px] text-white transition-opacity hover:opacity-70"
            to="/"
            title="Instagram"
          >
            <svg className="h-3 w-3 lg:rotate-90" fill="currentColor">
              <PiInstagramLogoFill size={10} color="#fff" />
            </svg>{" "}
            <span className="hidden text-[11px]  font-bold uppercase lg:inline-block">
              Instagram
            </span>
          </Link>
        </li>
        <li>
          <Link
            className="inline-flex items-center gap-[9px] text-white transition-opacity hover:opacity-70"
            to="/"
            title="Youtube"
          >
            <svg className="h-3 w-3 lg:rotate-90" fill="currentColor">
              <FaYoutube size={10} />
            </svg>{" "}
            <span className="hidden text-[11px]  font-bold uppercase lg:inline-block">
              Youtube
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Hero;

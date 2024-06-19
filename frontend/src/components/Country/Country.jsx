import React, { useEffect, useState } from "react";
import Bally from "./Images_Project/Bally_2.jpg";
import { Aus, French, NonDeposite, UK, Us } from "../../Data";
import Reuse from "./Reuse";
import { All } from "../../AllData";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Country = () => {
  const [active, setActive] = useState(1);
  const [data, setData] = useState("");
  const id = useParams().id;
  const [loading, setLoading] = useState(true); // New state for loading indicator
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/${id}`);
        setData(response.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData();
  }, [id]);
  console.log("id", id);
  console.log("dataaaaa", data);

  
  return (
    <div className="">
      <div className="page-heading pt-8 pb-12 text-center md:pt-28 md:pb-28 bg-[#1b1b29]">
        <div className="container">
          <h1 className="relative mb-3 mt-[40px] md:mt-0 text-3xl font-bold leading-tight tracking-tight md:text-5xl text-white">
            Country
          </h1>
          <ol className=" relative flex flex-wrap justify-center divide-x-2 divide-white text-xs font-bold uppercase leading-none">
            <li className="px-[10px] text-white">
              <Link href="/">Home</Link>
            </li>
            <li className="text-white px-[10px]">Country</li>
          </ol>
        </div>
      </div>
      <main id="main-content" className="grow lg:pt-0">
        <section className="pt-14 pb-24 lg:pb-52 lg:pt-40 bg-[#19192b]">
          <div className="container">
            <div className="relative -mt-20 mb-14 flex flex-col md:flex-row md:justify-between lg:-mt-[200px] lg:mb-40">
              <ul className=" relative z-10 items-start md:items-stretch flex flex-col py-4 md:py-0 md:flex-row md:gap-x-6 lg:gap-x-12 xl:gap-x-14 md:min-h-[100px] lg:min-h-[120px]">
                <li className="flex after:absolute after:h-1 md:after:bottom-0 after:bottom-1 after:bg-accent after:inset-x-0 relative ">
                  <Link
                    to="/country/all"
                    className=" cursor-pointer flex items-center py-2 font-bold transition-all hover:text-primary dark:hover:text-white hover:opacity-100 text-sm lg:text-base opacity-100 text-primary lg:text-primary dark:text-white dark:lg:text-white"
                  >
                    All Country
                  </Link>
                </li>
                <li className="flex cursor-pointer ">
                  <Link
                    to="/country/aus"
                    className=" flex items-center py-2 font-bold transition-all hover:text-primary dark:hover:text-white hover:opacity-100 text-sm lg:text-base opacity-100 text-primary lg:text-primary dark:text-white dark:lg:text-white"
                  >
                    AUS
                  </Link>
                </li>
                <li className="flex cursor-pointer ">
                  <Link
                    to="/country/uk"
                    className=" cursor-pointer flex items-center py-2 font-bold transition-all hover:text-primary dark:hover:text-white hover:opacity-100 text-sm lg:text-base opacity-100 text-primary lg:text-primary dark:text-white dark:lg:text-white"
                  >
                    UK
                  </Link>
                </li>
                <li className="flex cursor-pointer">
                  <Link
                    to="/country/us"
                     className=" cursor-pointer flex items-center py-2 font-bold transition-all hover:text-primary dark:hover:text-white hover:opacity-100 text-sm lg:text-base opacity-100 text-primary lg:text-primary dark:text-white dark:lg:text-white"
                  >
                    US
                  </Link>
                </li>
                <li className="flex cursor-pointer">
                  <Link
                    to="/country/french"
                      className=" cursor-pointer flex items-center py-2 font-bold transition-all hover:text-primary dark:hover:text-white hover:opacity-100 text-sm lg:text-base opacity-100 text-primary lg:text-primary dark:text-white dark:lg:text-white"
                  >
                    French
                  </Link>
                </li>
                <li className="flex cursor-pointer">
                  <Link
                    to="/country/nd"
                      className=" cursor-pointer flex items-center py-2 font-bold transition-all hover:text-primary dark:hover:text-white hover:opacity-100 text-sm lg:text-base opacity-100 text-primary lg:text-primary dark:text-white dark:lg:text-white"
                  >
                    Non Deposit
                  </Link>
                </li>
             
              </ul>
              {/* <div className="relative z-10 flex justify-between gap-x-4 pr-6 pb-5 md:pb-0 md:gap-x-6 lg:gap-x-10 lg:pr-[60px]">
                              <ul className="flex gap-4 lg:gap-6 pt-2 md:self-center md:pt-0">
                                  <li>
                                      <a className="group" href="_yt1-videos-grid-3.html">
                                          <svg
                                              role="img"
                                              className="h-6 w-6 fill-primary group-hover:fill-accent transition-colors dark:fill-white dark:group-hover:fill-accent"
                                          >
                                              <use xlinkHref="assets/img/yt1/sprite.svg#grid" />
                                          </svg>
                                      </a>
                                  </li>
                                  <li>
                                      <a className="group" href="_yt1-videos-grid-4.html">
                                          <svg
                                              role="img"
                                              className="h-6 w-6 fill-accent dark:fill-accent"
                                          >
                                              <use xlinkHref="assets/img/yt1/sprite.svg#grid-sm" />
                                          </svg>
                                      </a>
                                  </li>
                              </ul>
                          </div> */}
              <div className="absolute inset-0 -left-full bg-[#fff] dark:bg-gray-800 shadow-2xl" />
            </div>

            {/* {id && id !== "all" ? ( */}
            <p className="text-white text-lg font-medium md:-mt-24 md:mb-10 ">We've organized our casino section with your convenience in mind, making it easier for you to find your favorite casino. With our expertly curated selection, you can trust that you're getting the best of the best. So why wait? Join us today and start winning big</p>
              <div className="grid grid-cols-12 gap-y-14 sm:gap-x-[30px]">
              {data &&
                data.map((item) => (
                  <Reuse
                    index={item.id}
                    countryname={item.countryname}
                    casinoname={item.casinoname}
                    image={item.casinoimage}
                    price={item.price}
                    playlink={item.playlink}
                  />
                ))}
            </div>
       
            <div className="flex items-center justify-center mt-10 md:mt-20 lg:mt-28">
              <div className="vv-preloader-spikes-roll relative h-10 w-16 animate-spike-roll bg-spike-roll bg-no-repeat" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Country;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const [data, setData] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const fetch = async () => {
      const resp = await axios.get(`http://localhost:3000/api/v1/blog/${id}`);
      if (resp) {
        setData(resp.data);
      }
    };
    fetch();
  }, [id]);
  console.log(id);
  console.log("BLOGDATA", data);
  const formatTime = (arrTime) => {
    const date = new Date(arrTime);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = days[date.getDay()];
    const dateNum = String(date.getDate()).padStart(2, "0");
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${dateNum} ${month} `;
  };
  return (
    <div>
      <div className="page-heading pt-8 pb-12 text-center md:pt-28 md:pb-28 bg-[#1b1b29]">
        <div className="container">
          <h1 className="relative mb-3 text-3xl mt-[40px] md:mt-0 font-bold leading-tight tracking-tight md:text-5xl text-white">
            Blog
          </h1>
          <ol className=" relative flex flex-wrap justify-center divide-x-2 divide-white text-xs font-bold uppercase leading-none">
            <li className="px-[10px]">
              <a href="/" className="text-white">
                Home
              </a>
            </li>
            <li className="px-[10px] text-white">Blog</li>
          </ol>
        </div>
      </div>
      {data && Object.keys(data).length > 0 && (
        <main id="main-content" className="grow lg:pt-0 bg-[#29293d]">
          <div className="pt-14 pb-24 lg:pb-52 lg:pt-40">
            <div className="container">
              <div className="relative -mt-20 mb-14 lg:-mt-[200px] lg:mb-40">
                <figure className="relative mb-8 aspect-[10/5] sm:aspect-auto md:mb-10 lg:mb-14 xl:mb-16">
                  <img
                    className="md:h-[300px] w-full object-cover"
                    src={`/Images/${data.image_two}`}
                    alt=""
                  />
                </figure>
                <div className="grid grid-cols-12 gap-x-2 md:gap-x-[30px]">
                  <div className="col-start-1 col-end-3 pt-1 text-center md:pt-0 lg:col-end-2">
                    <time
                      className="flex flex-col items-center text-2xs font-bold uppercase sm:text-xs md:text-base text-white"
                     
                    >
                      <span className="text-accent"></span>{" "}
                      <span className="text-white text-xl tracking-tighter text-primary dark:text-white sm:text-2xl md:text-[34px] md:leading-none">
                        {formatTime(data.date)}
                      </span>
                    </time>
                  </div>
                  <div className="col-start-3 col-end-13 lg:col-start-2 lg:col-end-12">
                    <h1 className="text-white mb-4 text-xl font-bold tracking-tight text-primary dark:text-white md:mb-5 md:text-2xl lg:mb-8 lg:text-4xl xl:mb-14 xl:text-5xl">
                  {data.heading}
                    </h1>
                    <div className="text-white lg:text-lg lg:leading-8 lg:tracking-wide">
                      <p>
                      {data.desc_one}
                      </p>
                    </div>

                    <ul className=" pt-9 lg:pt-14 ">
{
  data.datalist.map((item)=>(
    <li className="flex basis-full gap-x-4 mt-6 leading-tight sm:basis-1/2 xl:basis-auto">
    <div className="text-[#b3b2bd] font-semibold lg:leading-8 lg:tracking-wide">
      <p>
        {item}
      </p>
    </div>
  </li>
  ))
}
                     
                    
                    </ul>
                    <div className="text-white lg:text-lg lg:leading-8 lg:tracking-wide mt-10">
                      <p>
                      {data.desc_two}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="grid grid-cols-12 gap-y-14 gap-x-2 md:gap-x-[30px]">
              <div className="col-span-full md:col-start-2 md:col-end-8">
                <div className="">
                  <h3 className="mb-4 text-xl font-bold tracking-tight text-primary dark:text-white md:text-2xl lg:mb-8 lg:text-3xl xl:mb-14 xl:text-3.5xl xl:tracking-tighter">
                    Description
                  </h3>
                  <div className="prose max-w-none prose-p:text-gray-500 prose-p:tracking-tighter prose-p:lg:mb-8 prose-p:lg:text-lg prose-p:lg:leading-8">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute voluptate velit esse cillum dolore eu fugiat
                      nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.
                    </p>
                    <p>
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis laboriosam, nisi ut aliquid ex ea commodi
                      consequatur? Quis autem vel eum iure reprehenderit esse
                      quam nihil molestiae consequatur, vel illum qui dolorem
                      eum fugiat quo voluptas nulla pariatur?
                    </p>
                  </div>
                  <div className="pt-8 lg:pt-14 flex flex-wrap gap-4 lg:gap-8">
                    <a
                      href="_yt1-single-event.html"
                      className="inline-flex text-center text-sm font-bold leading-none text-white transition-colors lg:text-base lg:text-white py-4 px-5 lg:py-5 lg:px-10 bg-accent hover:bg-accent/90"
                    >
                      Buy Tickets{" "}
                    </a>
                    <a
                      href="_yt1-single-event.html"
                      className="inline-flex text-center text-sm font-bold leading-none text-white transition-colors lg:text-base lg:text-white py-4 px-5 lg:py-5 lg:px-10 bg-primary hover:bg-primary/90"
                    >
                      + Google Calendar
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default BlogDetail;

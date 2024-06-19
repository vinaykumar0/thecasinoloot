import React from "react";
import { Link } from "react-router-dom";

const Reuse = ({ image, countryname, casinoname, price, playLink,index }) => {
  return (
    <div className="col-span-full sm:col-span-6 lg:col-span-3 rounded-md bg-white shadow-xl p-3">
      <figure className="mb-6 ">
        <Link
          className="group relative block h-full overflow-hidden bg-gray-900 glightbox"
          // href="https://www.youtube.com/watch?v=XE0fU9PCrWE"
        >
          <img
            className="aspect-video w-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-75"
            src={`/Images/${image}`}
            alt="Top 10 Best Places in Japan to get Deluxe Edition Boxes!"
          />{" "}
          <span className="absolute bg-[#1b1b29] top-[30px] left-[50px] flex px-4 py-2 -translate-x-2/4 -translate-y-2/4 justify-start items-center text-white rounded-md bg-accent">
            <p>{countryname}</p>
          </span>
          {/* <span className="absolute top-[30px] right-[-30px] flex px-4 py-2 -translate-x-2/4 -translate-y-2/4 justify-start items-center text-white rounded-md bg-accent">
                              <p>French</p>
                            </span> */}
        </Link>
      </figure>
      <div>
        <h3 className="mb-1 text-start font-bold leading-tight text-primary dark:text-white">
          {casinoname}
        </h3>
        <ul className="flex leading-tight tracking-tighter mb-2 [&>li:not(:last-child)]:after:content-['-'] [&>li]:after:mx-1 text-2sm">
          <li>Free play/Bonus $€£ {price}</li>
          {/* <li>6 hours ago</li> */}
        </ul>
        <div className="flex justify-between">
          <Link
           to={`/country/${countryname.toLowerCase()}/${index}`}
            className=" read-more-feature text-[#232323] mt-[10px] font-semibold text-[15px] pl-[35px] flex relative"
          >
            Read More
          </Link>
          <Link to={playLink} target="_blank">
            <button className="text-[15px] btn btn-primary px-[12px] py-[8px]">
              Play Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reuse;

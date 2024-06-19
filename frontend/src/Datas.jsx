import axios from "axios";
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Datas = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetch = async () => {
      const resp = await axios.get("http://localhost:3000/casino/1");
      if (resp) {
        setData(resp.data);
      }
    };
    fetch();
  }, []);
  console.log("DATsssssa", data);
  return (
    <div className="col-span-full  sm:col-span-6 lg:col-span-3 rounded-md bg-white shadow-xl p-3">
      <figure className="mb-6 mt-32">
        <a
          className="group relative block h-full overflow-hidden bg-gray-900 glightbox"
          // href="https://www.youtube.com/watch?v=XE0fU9PCrWE"
        >
          <img
            className="aspect-video w-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-75"
            src="/Images/"
            alt="Top 10 Best Places in Japan to get Deluxe Edition Boxes!"
          />{" "}
          <span className="absolute bg-[#1b1b29] top-[30px] left-[50px] flex px-4 py-2 -translate-x-2/4 -translate-y-2/4 justify-start items-center text-white rounded-md bg-accent">
            <p>{data.casinoname}</p>
          </span>
          {/* <span className="absolute top-[30px] right-[-30px] flex px-4 py-2 -translate-x-2/4 -translate-y-2/4 justify-start items-center text-white rounded-md bg-accent">
                            <p>French</p>
                          </span> */}
        </a>
      </figure>
      <div>
        <h3 className="mb-1 text-start font-bold leading-tight text-primary dark:text-white">
          Ballay
        </h3>
        <ul className="flex leading-tight tracking-tighter mb-2 [&>li:not(:last-child)]:after:content-['-'] [&>li]:after:mx-1 text-2sm">
          <li>Free play/Bonus $€£ 30</li>
          {/* <li>6 hours ago</li> */}
        </ul>
        <div className="flex justify-between">
          <a
            href=""
            className=" read-more-feature text-[#232323] mt-[10px] font-semibold text-[15px] pl-[35px] flex relative"
          >
            Read More
          </a>
          <Link to={data.playlink } target="/blank">
            <button className="text-[15px] btn btn-primary px-[12px] py-[8px]">
              Play Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Datas;

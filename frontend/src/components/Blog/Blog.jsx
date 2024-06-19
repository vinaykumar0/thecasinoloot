import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";


const Blog = () => {
const[data,setData]=useState([])
useEffect(()=>{
  const fetch=async()=>{
    const resp=await axios.get(`http://localhost:3000/api/v1/blog`)
    if(resp){
      setData(resp.data)
    }
  }
  fetch()
},[])
  return (
    <div className="bg-[#1b1b29]">
      <div className="page-heading pt-8 pb-12 text-center md:pt-28 md:pb-28 bg-[#1b1b29]">
        <div className="container">
          <h1 className="relative mb-3 mt-[40px] md:mt-0 text-3xl font-bold leading-tight tracking-tight md:text-5xl text-white">
            Blog
          </h1>
          <ol className=" relative flex flex-wrap justify-center divide-x-2 divide-white text-xs font-bold uppercase leading-none">
            <li className="px-[10px]">
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li className="px-[10px] text-white">Blog</li>
          </ol>
        </div>
      </div>
      <div className="nav-tab-wrapper tabs  section-padding">
        <div className="container">
          <div className="relative -mt-20 mb-14 flex flex-col md:flex-row md:justify-between lg:-mt-[200px] lg:mb-40">
            <ul className=" relative z-10 items-start md:items-stretch flex flex-col py-4 md:py-0 md:flex-row md:gap-x-6 lg:gap-x-12 xl:gap-x-14 md:min-h-[100px] lg:min-h-[120px]">
              <li className="flex after:absolute after:h-1 md:after:bottom-0 after:bottom-1 after:bg-accent after:inset-x-0 relative ">
                <div className=" cursor-pointer flex items-center py-2 font-bold transition-all hover:text-primary dark:hover:text-white hover:opacity-100 text-sm lg:text-base opacity-100 text-primary lg:text-primary dark:text-white dark:lg:text-white">
                  All The Blogs
                </div>
              </li>
            </ul>

            <div className="absolute inset-0 -left-full bg-[#fff] dark:bg-gray-800 shadow-2xl" />
          </div>
          <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
            {
              data.map((item)=>(
                <div className=" bg-white shadow-box12 rounded-[8px] transition duration-100 hover:shadow-box13">
              <div className="course-thumb h-[260px] rounded-t-[8px]  relative">
                <img
                  src={`/Images/${item.image_one}`}
                  alt=""
                  className=" w-full h-full object-cover rounded-t-[8px]"
                />
                <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">
                  Casino
                </span>
              </div>
              <div className="course-content p-8">
                <div className="flex justify-between lg:space-x-10 space-x-5 mb-5">
                  <Link
                    className=" flex items-center space-x-2"
                   
                  >
                    <BsPersonCircle />
                    <span>{item.author}</span>
                  </Link>
                  <Link
                    className=" flex items-center space-x-2"
                  >
                    <SlCalender />
                    <span>{item.date}</span>
                  </Link>
                </div>
                <h4 className=" text-xl mb-5 font-bold">
                  <Link
                    to={`/blog/${item.id}`}
                    className="text-black hover:text-primary transition duration-150"
                  >
                  {item.heading}
                  </Link>
                </h4>
                <Link
                   to={`/blog/${item.id}`}
                  className=" text-black font-semibold hover:underline transition duration-150"
                >
                  Read More
                </Link>
              </div>
            </div>
              ))
            }
         
           
          </div>
        
        </div>
      </div>

     
    </div>
  );
};

export default Blog;

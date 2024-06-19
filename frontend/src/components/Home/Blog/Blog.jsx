import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import axios from "axios";

const Blog = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const resp = await axios.get(`http://localhost:3000/api/v1/blog`);
      if (resp) {
        setData(resp.data);
      }
    };
    fetch();
  }, []);
  return (
    <div className=" section-padding bg-[#29293d] bg-cover bg-no-repeat bg-center">
      <div className="container">
        <div className="lg:flex justify-between items-center ">
          <div className="mb-3">
            {/* <div className="mini-title">Team Member</div> */}
            <div className="column-title text-white">
              Our Latest <span className="shape-bg">Blogs</span>
            </div>
          </div>
          <div className="mb-3">
            <Link to="/blog" className=" btn btn-primary">
              Read All Blogs
            </Link>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-7">
          {data.map((item) => (
            <div className=" bg-white shadow-box5 rounded-[8px] transition duration-100 hover:shadow-box3">
              <div className="course-thumb h-[260px] rounded-t-[8px]  relative">
                <img
                  src={`/Images/${item.image_one}`}
                  alt=""
                  className=" w-full h-full object-cover rounded-t-[8px]"
                />
                <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">
                  Casinos
                </span>
              </div>
              <div className="course-content p-8">
                <div className="flex justify-between lg:space-x-10 space-x-5 mb-5">
                  <Link className=" flex items-center space-x-2" >
                    <img
                      src="https://bestwpware.com/react-templates/edumim/static/media/admin.df21c265e0cfbaaf791a928ad3994ac1.svg"
                      alt=""
                    />
                    <span>{item.author}</span>
                  </Link>
                  <Link className=" flex items-center space-x-2" >
                    <img
                      src="https://bestwpware.com/react-templates/edumim/static/media/calender.2765d03e09473d7c8cebc2b0ede3995c.svg"
                      alt=""
                    />
                    <span>{item.date}</span>
                  </Link>
                </div>
                <h4 className=" text-xl mb-5 font-bold">
                  <Link
                    className=" hover:text-primary transition duration-150 text-black"
                    to={`/blog/${item.id}`}
                  >
                    {item.heading}
                  </Link>
                </h4>
                <Link
                  className=" text-black font-semibold hover:underline transition duration-150"
                  to={`/blog/${item.id}`}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

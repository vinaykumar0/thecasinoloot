import React from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white bg-[#09091e] bg-cover bg-center bg-no-repeat">
      <div className="section-padding container">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          <div className="single-footer">
            <div className="lg:max-w-[270px]">
              <Link to="/" className="mb-10 block">
                <img
                  src="https://newcasino.vercel.app/_next/static/media/logo1.62f21928.svg"
                  alt=""
                />
              </Link>
              <p>
                At Casinobonus, we're dedicated to delivering the ultimate
                online gaming experience. With a passion for entertainment and a
                commitment to excellence.
              </p>
              <ul className="flex space-x-4 pt-8">
                <li>
                  <Link
                    to="/"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
            transition hover:bg-primary hover:text-white"
                  >
                    <FaFacebook icon="bxl:facebook" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
            transition hover:bg-primary hover:text-white"
                  >
                    <FaTwitterSquare  icon="bxl:twitter" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
            transition hover:bg-primary hover:text-white"
                  >
                    <FaLinkedin icon="bxl:linkedin" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
            transition hover:bg-primary hover:text-white"
                  >
                    <FaInstagramSquare icon="bxl:instagram" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="single-footer">
            <div className="flex space-x-[80px]">
              <div className="flex-1 lg:flex-none">
                <h4 className="mb-8 text-2xl font-bold text-white">Links</h4>
                <ul className="list-item space-y-5">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Country</Link>
                  </li>
                  {/* <li>
                    <Link to="/">Courses</Link>
                  </li> */}
                  <li>
                    <Link to="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/">Blog</Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1 lg:flex-none">
                <h4 className="mb-8 text-2xl font-bold text-white">Legal</h4>
                <ul className="list-item space-y-5">
                  <li>
                    <Link to="/">Legal</Link>
                  </li>
                  <li>
                    <Link to="/">Tearms of Use</Link>
                  </li>
                  <li>
                    <Link to="/">Tearm &amp; Condition</Link>
                  </li>
                  <li>
                    <Link to="/">Payment Method</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  {/* <li>
                    <Link to="/">Privacy Policy</Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="single-footer">
            <h4 className="mb-8 text-2xl font-bold text-white">Newsletter</h4>
            <div className="mb-8">
              Join us
              {/* <span className="text-primary underline">68,000</span> */}
              {/* people getting our emails Lorem ipsum dolor sit amet consectet */}
            </div>
            <div className="mb-4 flex items-center rounded-md bg-white py-[10px] pr-[10px] pl-6 shadow-e1">
              <div className="flex-none">
                <span className=" ">
                  <img src="assets/images/icon/mail.svg" alt="" />
                </span>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Enter your mail"
                  className="border-none focus:ring-0"
                />
              </div>
            </div>
            <button className="btn btn-primary block w-full text-center">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
      <div className="container border-t border-white border-opacity-[0.1] py-8 text-center text-base">
        © Copyright 2024 | TheCasinoLoot | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

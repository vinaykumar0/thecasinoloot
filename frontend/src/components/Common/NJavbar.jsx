import React, { useState } from "react";
import { IoMdLogIn, IoMdClose, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import NavbarLogo from './navbar.jpeg'
const NJavbar = () => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const[active3,setActive3]=useState(false)
  return (
   <div className="">
     <header
      id="site-header"
      className="text-white bg-[#1b1b29] inset-x-0 z-20 fixed"
    >
      <div className="container">
        <nav className="flex min-h-[64px] items-center justify-between py-1 lg:min-h-[90px] lg:py-4">
          {/* Logo */}
          <div>
            <Link to="/">
              <img
                  // src="https://newcasino.vercel.app/_next/static/media/logo1.62f21928.svg"
                  src="/Images/logo.png"
                alt=""
                width={150}
                height={32}
              />
            </Link>
          </div>
          {/* Logo / End */}
          {/* Navigation (Desktop) */}
          <ul className="hidden gap-x-7 xl:gap-x-10 text-sm font-bold lg:flex">
            <li className="">
              <Link
                className="relative inline-flex items-center gap-x-2 leading-10 after:absolute after:bottom-[7px] after:left-0 after:h-[2px] after:bg-white after:transition-transform after:w-full after:origin-left after:scale-x-100"
                to="/"
              >
                Home
              </Link>
            </li>
            {/* <li className="relative [&>.sub-menu]:hover:visible [&>.sub-menu]:hover:animate-popper-pop-in [&>.sub-menu]:hover:opacity-100">
                          <Link
                              className="relative inline-flex items-center gap-x-2 leading-10 after:absolute after:bottom-[7px] after:left-0 after:h-[2px] after:bg-white after:transition-transform after:w-full after:origin-right hover:after:origin-left after:scale-x-0 hover:after:scale-x-100"
                              to="_yt1-videos-grid-4.html"
                          >
                              Videos{" "}
                              <svg role="img" className="h-2 w-2 rotate-90 fill-white">
                                  <use xlinkto="assets/img/yt1/sprite.svg#arrow-right" />
                              </svg>
                          </Link>
                          <ul className="sub-menu invisible text-black absolute z-20 flex w-52 flex-col bg-white dark:bg-gray-800 py-5 text-sm font-bold opacity-0 shadow-2xl transition-all">
                              <li className="px-7">
                                  <Link
                                      className="flex items-center justify-between py-2 transition-colors text-primary hover:text-accent dark:text-black dark:hover:text-accent"
                                      to="_yt1-videos-grid-3.html"
                                  >
                                      UK
                                  </Link>
                              </li>
                              <li className="px-7">
                                  <Link
                                      className="flex items-center justify-between py-2 transition-colors text-primary hover:text-accent dark:text-white dark:hover:text-accent"
                                      to="_yt1-videos-grid-4.html"
                                  >
                                      Videos - 4 Cols
                                  </Link>
                              </li>
                          </ul>
                      </li> */}
            <li className="relative [&>.sub-menu]:hover:visible [&>.sub-menu]:hover:animate-popper-pop-in [&>.sub-menu]:hover:opacity-100">
              <Link
                className="relative inline-flex items-center gap-x-2 leading-10 after:absolute after:bottom-[7px] after:left-0 after:h-[2px] after:bg-white after:transition-transform after:w-full after:origin-right hover:after:origin-left after:scale-x-0 hover:after:scale-x-100"
                to="/country/all"
              >
                Country{" "}
                <svg role="img" className="h-2 w-2 rotate-90 fill-white">
                  <use xlinkto="assets/img/yt1/sprite.svg#arrow-right" />
                </svg>
              </Link>
              <ul className="sub-menu invisible absolute z-20 flex w-52 text-black flex-col bg-white dark:bg-gray-800 py-5 text-sm font-bold opacity-0 shadow-2xl transition-all">
                <li className="px-7">
                  <Link
                    to="/country/aus"
                    className="flex items-center justify-between py-2 transition-colors text-primary hover:text-accent dark:text-white dark:hover:text-accent"
                    //   to="_yt1-blog-grid.html"
                  >
                    Australia
                  </Link>
                </li>
                <li className="px-7">
                  <Link
                    to="/country/uk"
                    className="flex items-center justify-between py-2 transition-colors text-primary hover:text-accent dark:text-white dark:hover:text-accent"
                    //   to="_yt1-blog-list.html"
                  >
                    United Kingdom
                  </Link>
                </li>
                <li className="px-7">
                  <Link
                    to="/country/us"
                    className="flex items-center justify-between py-2 transition-colors text-primary hover:text-accent dark:text-white dark:hover:text-accent"
                    //   to="_yt1-single.html"
                  >
                    United State
                  </Link>
                </li>
                <li className="px-7 relative [&>.sub-menu]:hover:visible [&>.sub-menu]:hover:animate-popper-pop-in [&>.sub-menu]:hover:opacity-100">
                  <Link
                    to="/country/french"
                    className="flex items-center justify-between py-2 transition-colors text-primary hover:text-accent dark:text-white dark:hover:text-accent"
                    //   to="_yt1-single-2.html"
                  >
                    French{" "}
                    <svg
                      role="img"
                      className="h-2 w-2 fill-primary dark:fill-white"
                    >
                      <use xlinkto="assets/img/yt1/sprite.svg#arrow-right" />
                    </svg>
                  </Link>
                  {/* <ul className="sub-menu invisible absolute z-20 flex w-52 flex-col bg-white dark:bg-gray-800 py-5 text-sm font-bold opacity-0 shadow-2xl transition-all left-full -top-5">
                                      <li className="px-7">
                                          <Link
                                              className="flex items-center justify-between py-2 transition-colors text-primary hover:text-accent dark:text-white dark:hover:text-accent"
                                              to="_yt1-single.html"
                                          >
                                              Another Item
                                          </Link>
                                      </li>
                                      <li className="px-7">
                                          <Link
                                              className="flex items-center justify-between py-2 transition-colors text-primary hover:text-accent dark:text-white dark:hover:text-accent"
                                              to="_yt1-single-2.html"
                                          >
                                              Other Level Item
                                          </Link>
                                      </li>
                                  </ul> */}
                </li>
                <li className="px-7">
                  <Link
                    to="/country/nd"
                    className="flex items-center justify-between py-2 transition-colors text-primary hover:text-accent dark:text-white dark:hover:text-accent"
                    //   to="_yt1-single.html"
                  >
                    Non-Deposit
                  </Link>
                </li>
              </ul>
            </li>
            <li className="">
              <Link
                className="relative inline-flex items-center gap-x-2 leading-10 after:absolute after:bottom-[7px] after:left-0 after:h-[2px] after:bg-white after:transition-transform after:w-full after:origin-right hover:after:origin-left after:scale-x-0 hover:after:scale-x-100"
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li className="relative [&>.sub-menu]:hover:visible [&>.sub-menu]:hover:animate-popper-pop-in [&>.sub-menu]:hover:opacity-100">
              <Link
                className="relative inline-flex items-center gap-x-2 leading-10 after:absolute after:bottom-[7px] after:left-0 after:h-[2px] after:bg-white after:transition-transform after:w-full after:origin-right hover:after:origin-left after:scale-x-0 hover:after:scale-x-100"
                to="/about"
              >
                About Us{" "}
                <svg role="img" className="h-2 w-2 rotate-90 fill-white">
                  <use xlinkto="assets/img/yt1/sprite.svg#arrow-right" />
                </svg>
              </Link>
              {/* <ul className="sub-menu invisible absolute z-20 flex w-52 flex-col bg-white dark:bg-gray-800 py-5 text-sm font-bold opacity-0 shadow-2xl transition-all">
                              <li className="px-7">
                                  <Link
                                      className="flex items-center justify-between py-2 transition-colors text-primary hover:text-accent dark:text-white dark:hover:text-accent"
                                      to="_yt1-single-event.html"
                                  >
                                      Single Event
                                  </Link>
                              </li>
                          </ul> */}
            </li>
            {/* <li className="">
                          <Link
                              className="relative inline-flex items-center gap-x-2 leading-10 after:absolute after:bottom-[7px] after:left-0 after:h-[2px] after:bg-white after:transition-transform after:w-full after:origin-right hover:after:origin-left after:scale-x-0 hover:after:scale-x-100"
                              to="_yt1-partners.html"
                          >
                              Partners
                          </Link>
                      </li> */}
            <li className="">
              <Link
                className="relative inline-flex items-center gap-x-2 leading-10 after:absolute after:bottom-[7px] after:left-0 after:h-[2px] after:bg-white after:transition-transform after:w-full after:origin-right hover:after:origin-left after:scale-x-0 hover:after:scale-x-100"
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
            {/* <li className="relative [&>.sub-menu]:hover:visible [&>.sub-menu]:hover:animate-popper-pop-in [&>.sub-menu]:hover:opacity-100">
                          <Link
                              className="relative inline-flex items-center gap-x-2 leading-10 after:absolute after:bottom-[7px] after:left-0 after:h-[2px] after:bg-white after:transition-transform after:w-full after:origin-right hover:after:origin-left after:scale-x-0 hover:after:scale-x-100"
                              to="_yt1-shop-grid-3.html"
                          >
                              Shop{" "}
                              <svg role="img" className="h-2 w-2 rotate-90 fill-white">
                                  <use xlinkto="assets/img/yt1/sprite.svg#arrow-right" />
                              </svg>
                          </Link>
                          <ul className="sub-menu invisible absolute z-20 flex w-52 flex-col bg-white dark:bg-gray-800 py-5 text-sm font-bold opacity-0 shadow-2xl transition-all">
                              <li className="px-7">
                                  <Link
                                      className="flex items-center justify-between py-2 transition-colors text-primary hover:text-accent dark:text-white dark:hover:text-accent"
                                      to="_yt1-shop-grid-3.html"
                                  >
                                      Shop V1
                                  </Link>
                              </li>
                              <li className="px-7">
                                  <Link
                                      className="flex items-center justify-between py-2 transition-colors text-primary hover:text-accent dark:text-white dark:hover:text-accent"
                                      to="_yt1-shop-grid-4.html"
                                  >
                                      Shop V2
                                  </Link>
                              </li>
                              <li className="px-7">
                                  <Link
                                      className="flex items-center justify-between py-2 transition-colors text-primary hover:text-accent dark:text-white dark:hover:text-accent"
                                      to="_yt1-single-product.html"
                                  >
                                      Single Product
                                  </Link>
                              </li>
                              <li className="px-7">
                                  <Link
                                      className="flex items-center justify-between py-2 transition-colors text-primary hover:text-accent dark:text-white dark:hover:text-accent"
                                      to="_yt1-cart.html"
                                  >
                                      Cart
                                  </Link>
                              </li>
                              <li className="px-7">
                                  <Link
                                      className="flex items-center justify-between py-2 transition-colors text-primary hover:text-accent dark:text-white dark:hover:text-accent"
                                      to="_yt1-checkout.html"
                                  >
                                      Checkout
                                  </Link>
                              </li>
                              <li className="px-7">
                                  <Link
                                      className="flex items-center justify-between py-2 transition-colors text-primary hover:text-accent dark:text-white dark:hover:text-accent"
                                      to="_yt1-login.html"
                                  >
                                      Login
                                  </Link>
                              </li>
                              <li className="px-7">
                                  <Link
                                      className="flex items-center justify-between py-2 transition-colors text-primary hover:text-accent dark:text-white dark:hover:text-accent"
                                      to="_yt1-register.html"
                                  >
                                      Register
                                  </Link>
                              </li>
                              <li className="px-7">
                                  <Link
                                      className="flex items-center justify-between py-2 transition-colors text-primary hover:text-accent dark:text-white dark:hover:text-accent"
                                      to="_yt1-account.html"
                                  >
                                      Account
                                  </Link>
                              </li>
                          </ul>
                      </li> */}
          </ul>
          {/* Navigation (Desktop) / End */}
          {/* Header Controls */}
          <div className="flex">
            <div className="flex items-center py-4 px-1 sm:px-2">
              {/* <label
                              htmlFor="theme-toggle"
                              className="relative inline-flex cursor-pointer items-center"
                          >
                              <input
                                  type="checkbox"
                                  defaultValue=""
                                  id="theme-toggle"
                                  className="peer sr-only"
                              />{" "}
                              <span className="relative z-10 block h-6 w-11 rounded-full border-2 border-white after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-transform peer-checked:after:translate-x-[20px]" />{" "}
                              <svg
                                  role="img"
                                  className="pointer-events-none absolute left-[5px] top-1 h-4 w-4 stroke-white text-white"
                                  color='#fff'
                              >
                                  <use xlinkto="assets/img/yt1/sprite.svg#sun" />
                              </svg>{" "}
                              <svg
                                  role="img"
                                  className="pointer-events-none absolute right-[5px] top-1 h-4 w-4 stroke-white"
                                  color='#fff'
                              >
                                  <use xlinkto="assets/img/yt1/sprite.svg#moon" />
                              </svg>
                          </label> */}
            </div>
            {/* <div className="relative [&>.sub-menu]:lg:hover:visible [&>.sub-menu]:hover:animate-popper-pop-in [&>.sub-menu]:lg:hover:opacity-100">
                          <Link className="block py-4 px-2 xl:px-3" to="_yt1-account.html">
                              <svg role="img" className="h-6 w-6 fill-white">
                                  <use xlinkto="assets/img/yt1/sprite.svg#user" />
                              </svg>
                          </Link>
                          <ul className="sub-menu text-black invisible absolute right-full z-20 -mr-9 flex w-52 origin-top-right flex-col bg-white dark:bg-gray-800 py-5 text-sm font-bold opacity-0 shadow-2xl transition-all">
                              <li className="px-7">
                                  <Link
                                      className="flex flex-row-reverse items-center justify-between py-2 text-primary dark:text-white transition-colors hover:text-accent dark:hover:text-accent"
                                      to="_yt1-account-info.html"
                                  >
                                      Personal Info
                                  </Link>
                              </li>
                              <li className="px-7">
                                  <Link
                                      className="flex flex-row-reverse items-center justify-between py-2 text-primary dark:text-white transition-colors hover:text-accent dark:hover:text-accent"
                                      to="_yt1-account-billing.html"
                                  >
                                      Billing Details
                                  </Link>
                              </li>
                              <li className="px-7">
                                  <Link
                                      className="flex flex-row-reverse items-center justify-between py-2 text-primary dark:text-white transition-colors hover:text-accent dark:hover:text-accent"
                                      to="_yt1-account-shipping.html"
                                  >
                                      Shipping Details
                                  </Link>
                              </li>
                              <li className="px-7">
                                  <Link
                                      className="flex flex-row-reverse items-center justify-between py-2 text-primary dark:text-white transition-colors hover:text-accent dark:hover:text-accent"
                                      to="_yt1-account-orders.html"
                                  >
                                      Orders
                                  </Link>
                              </li>
                              <li className="px-7">
                                  <Link
                                      className="flex flex-row-reverse items-center justify-between py-2 text-white dark:text-white transition-colors hover:text-accent dark:hover:text-accent"
                                      to="_yt1-login.html"
                                  >
                                      Logout
                                  </Link>
                              </li>
                          </ul>
                      </div> */}
                        <div className="relative [&>.sub-menu]:lg:hover:visible [&>.sub-menu]:hover:animate-popper-pop-in [&>.sub-menu]:lg:hover:opacity-100">
              <button
                className="relative  py-4 px-1 sm:px-2 flex items-center gap-1"
                onClick={()=>setActive3(true)}
              >
                <span className="" >
                  {/* <svg role="img" className="h-6 w-6 fill-white text-white"> */}
                  <BsSearch size={20}  onClick={()=>setActive3(true)}/>
                  {/* </svg> */}{" "}
                </span>
                <span className="text-center"  onClick={()=>setActive3(true)}>Search</span>
              </button>
            </div>
            <div className="relative [&>.sub-menu]:lg:hover:visible [&>.sub-menu]:hover:animate-popper-pop-in [&>.sub-menu]:lg:hover:opacity-100">
              <Link
                className="relative  py-4 px-1 sm:px-2 flex items-center gap-1"
              to='/sign-up'
              >
                <span className="">
                  {/* <svg role="img" className="h-6 w-6 fill-white text-white"> */}
                  <IoMdLogIn size={20} />
                  {/* </svg> */}{" "}
                </span>
                <span className="text-center">Sign Up</span>
              </Link>
            </div>
            <button className="js-menu-toggle -mr-2 inline-flex py-4 px-2 sm:px-3 lg:hidden xl:px-4">
              {active === true ? (
                <IoMdClose size={23} onClick={() => setActive(false)} />
              ) : (
                <IoMenu size={23} onClick={() => setActive(true)} />
              )}
            </button>
          </div>
          {/* Header Controls / End */}
        </nav>
      </div>
      {active === true ? (
        <div className="js-mobile-menu p-t-[64px] fixed left-0 top-[64px] z-100 block h-[calc(100dvh-64px)] w-full overflow-auto bg-white dark:bg-gray-800 py-5 text-primary dark:text-white transition-transform duration-300 lg:hidden translate-x-0">
          <div className="container">
            {/* Navigation (Mobile) */}
            <ul className="text-md flex flex-col font-bold">
              <li className="flex flex-wrap items-center gap-x-4 border-b border-b-gray-200 dark:border-b-gray-200/10" onClick={()=>setActive(false)}>
                <Link
                  className="flex-grow gap-x-1 py-4 leading-normal transition-colors hover:text-accent"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="flex flex-wrap items-center gap-x-4 border-b border-b-gray-200 dark:border-b-gray-200/10">
                <Link className="flex-grow gap-x-1 py-4 leading-normal transition-colors hover:text-accent"  onClick={() => setActive2(!active2)}>
                  Country{" "}
                </Link>
                <button
                onClick={() => setActive2(!active2)}
                  className="js-mobile-submenu-toggle ml-auto inline-flex h-7 w-7 items-center justify-center transition-transform"
                >
                  <IoIosArrowDown size={22}/>
                </button>
                {active2 === true ? (
                 <ul className="flex w-full flex-col overflow-hidden pl-4 text-sm transition-all duration-300 [&>li:last-child]:pb-4 max-h-screen" >
                 <li className="flex flex-wrap items-center gap-x-4">
                   <Link
                     className="flex-grow gap-x-1 py-2 transition-colors hover:text-accent"
                     to="/country/all"
                   >
                All Country                   </Link>
                 </li>
                 <li className="flex flex-wrap items-center gap-x-4" onClick={()=>setActive(false)}>
                   <Link
                     className="flex-grow gap-x-1 py-2 transition-colors hover:text-accent"
                     to="/country/us"
                   >
                    United State
                   </Link>
                 </li>
                 <li className="flex flex-wrap items-center gap-x-4" onClick={()=>setActive(false)}>
                   <Link
                     className="flex-grow gap-x-1 py-2 transition-colors hover:text-accent"
                    to="/country/uk"
                   >
                     United Kingdom
                   </Link>
                 </li>
                 <li className="flex flex-wrap items-center gap-x-4" onClick={()=>setActive(false)}>
                   <Link
                     className="flex-grow gap-x-1 py-2 transition-colors hover:text-accent"
                    to="/country/aus"
                   >
                     Australia
                   </Link>
                 </li>
                 <li className="flex flex-wrap items-center gap-x-4" onClick={()=>setActive(false)}>
                   <Link
                     className="flex-grow gap-x-1 py-2 transition-colors hover:text-accent"
                    to="/country/french"
                   >
                     French
                   </Link>
                 </li>
                 <li className="flex flex-wrap items-center gap-x-4" onClick={()=>setActive(false)}>
                   <Link
                     className="flex-grow gap-x-1 py-2 transition-colors hover:text-accent"
                    to="/country/nd"
                   >
                     Non Deposite
                   </Link>
                 </li>
               </ul>
               
                ) : null}
              </li>
              <li className="flex flex-wrap items-center gap-x-4 border-b border-b-gray-200 dark:border-b-gray-200/10" onClick={()=>setActive(false)}>
                <Link
                  className="flex-grow gap-x-1 py-4 leading-normal transition-colors hover:text-accent"
                  to="/blog"
                >
                  Blog{" "}
                </Link>
               
        
              </li>
              <li className="flex flex-wrap items-center gap-x-4 border-b border-b-gray-200 dark:border-b-gray-200/10" onClick={()=>setActive(false)}>
                <Link
                  className="flex-grow gap-x-1 py-4 leading-normal transition-colors hover:text-accent"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="flex flex-wrap items-center gap-x-4 border-b border-b-gray-200 dark:border-b-gray-200/10" onClick={()=>setActive(false)}> 
                <Link
                  className="flex-grow gap-x-1 py-4 leading-normal transition-colors hover:text-accent"
                  to="/contact"
                >
                  Contact{" "}
                </Link>
              
               
              </li>
            
             
             
            </ul>
            {/* Navigation (Mobile) / End */}
          </div>
        </div>
      ) : null}
      
    </header>
    {
        active3 === true && (
            <div className="search__popup-wrap fixed h-screen w-full z-[99] mt-[-370px] -translate-y-full transition-all duration-[1500ms] ease-[cubic-bezier(0.86,0,0.07,1)] left-0 top-0 after:content-[''] after:absolute after:w-full after:h-[370px] after:bg-[url(./assets/img/bg/search\_wave.png)] after:bg-no-repeat after:bg-center after:bg-cover after:mt-0 after:left-0 after:top-full">
  <div className="search__layer content-[''] absolute h-screen w-full bg-[rgba(15,22,27,0.9)] transition-all duration-[1500ms] ease-[cubic-bezier(0.86,0,0.07,1)] z-[-1] left-0 top-0" />
  <div className="search__close absolute text-3xl text-[#45f882] cursor-pointer right-[5%] top-[5%]">
    <span>
      <i className="flaticon-swords-in-cross-arrangement" />
    </span>
  </div>
  <div className="search__wrap text-center absolute -translate-y-2/4 top-2/4 inset-x-0">
    <div className="container">
      <div className="flex flex-wrap mx-[-15px]">
        <div className="w-full basis-full relative px-[15px]">
          <h2 className="title text-[47px] font-extrabold uppercase text-[#45f882] tracking-[-1px] mt-0 mb-[70px] mx-0 font-Barlow">
            ...{" "}
            <span className=" text-[#fff] tracking-[5px] drop-shadow-[-2px_2.5px_0px_rgba(69,248,130,0.66)]">
              Search Here
            </span>{" "}
            ...
          </h2>
          <div className="search__form relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:transition-all after:duration-[600ms] after:ease-[ease] after:left-0 after:bottom-0 after:bg-[#45f882] focus:after:!bg-[#45f882] ">
            <form action="#">
              <input
                type="text"
                name="search"
                placeholder="Type keywords here"
                required=""
                className=" block w-full text-center font-medium text-3xl text-[#fff] pt-2.5 pb-5 px-[50px] border-transparent bg-transparent placeholder:text-3xl placeholder:opacity-50
                              focus:!ring-[none] focus:!border-transparent
                              "
              />
              <button className="search-btn absolute text-[25px] text-[#45f882] -translate-y-2/4 border-0 right-5 top-2/4 bg-transparent">
                <i className="flaticon-loupe" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        )
      }
   </div>
  );
};

export default NJavbar;

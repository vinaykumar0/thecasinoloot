import React from 'react'
import Casino from './CCasino.png'

const ContactUs = () => {
  return (
    <div>
        <div className="page-heading pt-8 pb-12 text-center md:pt-28 md:pb-28 bg-[#1b1b29]">
        <div className="container">
          <h1 className="relative mb-3 mt-[40px] md:mt-0 text-3xl font-bold leading-tight tracking-tight md:text-5xl text-white">
            Contact Us
          </h1>
          <ol className=" relative flex flex-wrap justify-center divide-x-2 divide-white text-xs font-bold uppercase leading-none">
            <li className="px-[10px]">
              <a href="/" className='text-white'>Home</a>
            </li>
            <li className="px-[10px] text-white">Contact</li>
          </ol>
        </div>
      </div>
        <main id="main-content" className="grow lg:pt-0 bg-[#1b1b29]">
  <div className="pt-14 pb-24 lg:pb-52 lg:pt-40">
    <div className="container">
            <div className="relative -mt-20 mb-14 grid grid-cols-12 gap-x-5 gap-y-10 md:gap-x-[30px] bg-[#1e1e2d] dark:bg-gray-800 shadow-3xl lg:-mt-[200px] lg:mb-40 py-10 md:py-20 lg:py-22 xl:py-24 isolate">
        <div className="col-start-2 col-end-12 md:col-end-6 md:pb-16">
          <h2 className="text-white font-bold text-primary dark:text-white text-2xl md:text-3xl md:leading-none mb-4 lg:text-4xl xl:text-5xl leading-none tracking-tight xl:tracking-tight xl:mb-10">
            Something
            <br />
            in your <span className="text-accent">mind</span>?<br />
            Let’s talk!
          </h2>
          <div className="text-white lg:text-lg tracking-tighter lg:leading-8 lg:pr-10">
            <p>
              Send us a message and let’s discuss about your ideas, suggestions
              and more!
            </p>
          </div>
        </div>
        <div className="col-start-2 md:col-start-6 col-end-12">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-7" action="#">
            <div className="md:col-span-full lg:col-span-1">
              <input
                className="group-[.is-success]:bg-input-success group-[.is-error]:border-danger group-[.is-error]:bg-input-invalid group-[.is-error]:text-danger group-[.is-success]:pr-16 group-[.is-invalid]:pr-16 border-base bg-[length:14px_14px,_46px_46px] bg-[position:right_26px_center,_right_10px_center] bg-no-repeat font-bold leading-8 tracking-tight text-primary transition-all duration-150 placeholder:font-normal placeholder:text-gray-500/60 focus:border-indigo-500 focus:outline-0 focus:ring-0 dark:border-white/10 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500/80 dark:focus:border-indigo-500 w-full px-7 py-4 border border-1 border-black"
                type="text"
                name="post-name"
                id="post-name"
                defaultValue=""
                placeholder="Name"
              />
              <p className="group-[.is-error]:block mt-2 hidden text-sm font-bold text-danger" />
            </div>
            <div className="md:col-span-full lg:col-span-1">
              <input
                className="group-[.is-success]:bg-input-success group-[.is-error]:border-danger group-[.is-error]:bg-input-invalid group-[.is-error]:text-danger group-[.is-success]:pr-16 group-[.is-invalid]:pr-16 border-base bg-[length:14px_14px,_46px_46px] bg-[position:right_26px_center,_right_10px_center] bg-no-repeat font-bold leading-8 tracking-tight text-primary transition-all duration-150 placeholder:font-normal placeholder:text-gray-500/60 focus:border-indigo-500 focus:outline-0 focus:ring-0 dark:border-white/10 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500/80 dark:focus:border-indigo-500 w-full px-7 py-4 border border-1 border-black"
                type="email"
                name="post-email"
                id="post-email"
                defaultValue=""
                placeholder="Email"
              />
              <p className="group-[.is-error]:block mt-2 hidden text-sm font-bold text-danger" />
            </div>
            <div className="col-span-full">
              <textarea
                className="block border-base w-full px-7 py-4 leading-8 tracking-tight text-primary transition-all duration-150 placeholder:text-gray-500/60 focus:border-indigo-500 focus:outline-0 focus:ring-0 dark:border-white/10 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500/80 dark:focus:border-indigo-500 h-40 md:h-52 border border-1 border-black"
                name="post-comment"
                id="post-comment"
                placeholder="Your Message"
                defaultValue={""}
              />
            </div>
            <div className="col-span-full">
              <input
                className="bg-accent font-bold text-white text-lg tracking-tight py-5 leading-normal mt-4 md:mt-8 hover:cursor-pointer hover:bg-accent/90 transition-colors block w-full"
                type="submit"
                defaultValue="Send Message"
              />
            </div>
          </form>
        </div>
        <img
          className="hidden pointer-events-none md:block absolute h-[280px] -z-10 left-0 bottom-0 md:max-w-[290px] lg:max-w-[370px] xl:max-w-none"
        //   src="https://www.freepik.com/free-photo/young-charming-female-is-posing-poker-table-vip-casino_27470449.htm#fromView=search&page=2&position=35&uuid=99ff8f75-98a7-4181-b829-10fd04eee5f5"
        src={Casino}
        alt=""
       
        />
      </div>
      {/* <div className="grid grid-cols-12 gap-x-6 md:gap-x-[30px] gap-y-8">
        <div className="col-span-full sm:col-span-6 lg:col-span-4">
          <div className="">
            <h3 className="mb-4 text-xl font-bold tracking-tight text-primary dark:text-white md:text-2xl lg:mb-8 lg:text-3xl xl:mb-14 xl:text-3.5xl xl:tracking-tighter">
              Partnerships
            </h3>
            <dl className="flex flex-col gap-y-6">
              <div>
                <dt className="font-bold leading-tight text-primary dark:text-white md:text-lg">
                  Become a Partner
                </dt>
                <dd className="md:text-lg">
                  <a
                    className="text-primary transition-colors hover:text-accent dark:text-white dark:hover:text-accent"
                    href="mailto:partners@unboxvlogs.com"
                  >
                    partners@unboxvlogs.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="col-span-full sm:col-span-6 lg:col-span-4">
          <div className="">
            <h3 className="mb-4 text-xl font-bold tracking-tight text-primary dark:text-white md:text-2xl lg:mb-8 lg:text-3xl xl:mb-14 xl:text-3.5xl xl:tracking-tighter">
              Press &amp; Media
            </h3>
            <dl className="flex flex-col gap-y-6">
              <div>
                <dt className="font-bold leading-tight text-primary dark:text-white md:text-lg">
                  Press Consultant
                </dt>
                <dd className="md:text-lg">
                  <a
                    className="text-primary transition-colors hover:text-accent dark:text-white dark:hover:text-accent"
                    href="mailto:jrodgers@unboxvlogs.com"
                  >
                    jrodgers@unboxvlogs.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-bold leading-tight text-primary dark:text-white md:text-lg">
                  Media Manager
                </dt>
                <dd className="md:text-lg">
                  <a
                    className="text-primary transition-colors hover:text-accent dark:text-white dark:hover:text-accent"
                    href="mailto:mstevens@unboxvlogs.com"
                  >
                    mstevens@unboxvlogs.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="col-span-full sm:col-span-6 lg:col-span-4">
          <div className="">
            <h3 className="mb-4 text-xl font-bold tracking-tight text-primary dark:text-white md:text-2xl lg:mb-8 lg:text-3xl xl:mb-14 xl:text-3.5xl xl:tracking-tighter">
              Social Links
            </h3>
            <ul className="vv-social-list-color flex flex-wrap gap-3">
              <li>
                <a
                  className="inline-flex h-10 w-10 items-center justify-center bg-primary text-white transition-all hover:scale-110 hover:opacity-80"
                  href="https://www.facebook.com/danfisher.dev"
                  title="Facebook"
                >
                  <svg className="h-4 w-4" fill="currentColor">
                    <use xlinkHref="assets/img/social-icons.svg#facebook" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="inline-flex h-10 w-10 items-center justify-center bg-primary text-white transition-all hover:scale-110 hover:opacity-80"
                  href="https://twitter.com/danfisher_dev"
                  title="Twitter"
                >
                  <svg className="h-4 w-4" fill="currentColor">
                    <use xlinkHref="assets/img/social-icons.svg#twitter" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="inline-flex h-10 w-10 items-center justify-center bg-primary text-white transition-all hover:scale-110 hover:opacity-80"
                  href="http://instagram.com/dan.fisher.dev/"
                  title="Instagram"
                >
                  <svg className="h-4 w-4" fill="currentColor">
                    <use xlinkHref="assets/img/social-icons.svg#instagram" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="inline-flex h-10 w-10 items-center justify-center bg-primary text-white transition-all hover:scale-110 hover:opacity-80"
                  href="https://www.youtube.com/channel/UCbYqVTgLVezPsFZAA_QsvFw"
                  title="Youtube"
                >
                  <svg className="h-4 w-4" fill="currentColor">
                    <use xlinkHref="assets/img/social-icons.svg#youtube" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</main>

    </div>
  )
}

export default ContactUs
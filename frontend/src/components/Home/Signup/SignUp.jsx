import React from 'react'

const SignUp = () => {
  return (
      <div className=''>
          <div className="page-heading pt-8 pb-12 text-center md:pt-28 md:pb-28 bg-[#1b1b29]">
              <div className="container">
                  <h1 className="relative mb-3 mt-[30px] md:mt-0 text-3xl font-bold leading-tight tracking-tight md:text-5xl text-white">
                      SignUP
                  </h1>
                  <ol className=" relative flex flex-wrap justify-center divide-x-2 divide-white text-xs font-bold uppercase leading-none">
                      <li className="px-[10px] text-white">
                          <a href="/">Home</a>
                      </li>
                      <li className="text-white px-[10px]">Sign Up</li>
                  </ol>
              </div>
          </div>
          <main id="main-content" className="grow lg:pt-0">
              <section className="pt-14 lg:pt-40 bg-[#121220]">
                  <div className="container">
                      <div className="grid grid-cols-12 gap-x-5 md:gap-x-6 lg:gap-x-7.5">
                          <div className="relative col-span-full -mt-20 mb-14 grid grid-cols-12 gap-x-0 bg-[#09091e]  shadow-3xl md:col-start-2 md:col-end-12 lg:col-start-3 lg:col-end-11 md:grid-cols-6 md:gap-x-6 xl:col-start-4 xl:col-end-10 lg:-mt-[200px] lg:mb-40 lg:gap-x-[30px] dark:bg-gray-800">
                              <div className="col-start-2 col-end-12 py-10 md:col-end-6 md:py-20">
                                  <h2 className="font-bold text-2xl text-primary md:text-3.5xl mb-4 tracking-tight dark:text-white">
                                      Register
                                  </h2>
                                  <div className="text-white mb-8 md:mb-14 md:leading-normal md:text-lg tracking-tighter pr-2">
                                      <p>
                                          If you already have an account,{" "}
                                          <a
                                              className="text-accent hover:text-primary transition-colors"
                                              href="login.html"
                                          >
                                              login
                                          </a>{" "}
                                          now to access your profile!
                                      </p>
                                  </div>
                                  <form className="flex flex-col gap-y-7" action="#">
                                      <div className="group is-success">
                                          <input
                                              className="border border-1 border-black group-[.is-success]:bg-input-success group-[.is-error]:border-danger group-[.is-error]:bg-input-invalid group-[.is-error]:text-danger group-[.is-success]:pr-16 group-[.is-invalid]:pr-16 border-base bg-[length:14px_14px,_46px_46px] bg-[position:right_26px_center,_right_10px_center] bg-no-repeat font-bold leading-8 tracking-tight text-primary transition-all duration-150 placeholder:font-normal placeholder:text-gray-500/60 focus:border-indigo-500 focus:outline-0 focus:ring-0 dark:border-white/10 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500/80 dark:focus:border-indigo-500 w-full px-7 py-4"
                                              type="email"
                                              name="user-email"
                                              id="user-email"
                                              defaultValue="abc@gmail.com"
                                              placeholder="Enter Email"
                                          />
                                          <p className="group-[.is-error]:block mt-2 hidden text-sm font-bold text-danger" />
                                      </div>
                                      <div className="group is-error">
                                          <input
                                              className="group-[.is-success]:bg-input-success group-[.is-error]:border-danger group-[.is-error]:bg-input-invalid group-[.is-error]:text-danger group-[.is-success]:pr-16 group-[.is-invalid]:pr-16 border-base bg-[length:14px_14px,_46px_46px] bg-[position:right_26px_center,_right_10px_center] bg-no-repeat font-bold leading-8 tracking-tight text-primary transition-all duration-150 placeholder:font-normal placeholder:text-gray-500/60 focus:border-indigo-500 focus:outline-0 focus:ring-0 dark:border-white/10 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500/80 dark:focus:border-indigo-500 w-full px-7 py-4 border border-1 border-black"
                                              type="number"
                                              name="user-password"
                                              id="user-password"
                                              defaultValue="qwerty"
                                              placeholder="Enter Phone Number"
                                          />
                                          <p className="group-[.is-error]:block mt-2 hidden text-sm font-bold text-danger">
                                              Password need to have at least one number
                                          </p>
                                      </div>
                                      <div>
                                          <input
                                              className="border border-1 border-black group-[.is-success]:bg-input-success group-[.is-error]:border-danger group-[.is-error]:bg-input-invalid group-[.is-error]:text-danger group-[.is-success]:pr-16 group-[.is-invalid]:pr-16 border-base bg-[length:14px_14px,_46px_46px] bg-[position:right_26px_center,_right_10px_center] bg-no-repeat font-bold leading-8 tracking-tight text-primary transition-all duration-150 placeholder:font-normal placeholder:text-gray-500/60 focus:border-indigo-500 focus:outline-0 focus:ring-0 dark:border-white/10 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500/80 dark:focus:border-indigo-500 w-full px-7 py-4"
                                              type="password"
                                              name="user-password-repeat"
                                              id="user-password-repeat"
                                              defaultValue=""
                                              placeholder="Enter Password"
                                          />
                                          <p className="group-[.is-error]:block mt-2 hidden text-sm font-bold text-danger" />
                                      </div>
                                      <div className="mt-3">
                                          <input
                                              className=" block w-full bg-accent py-5 text-lg font-bold leading-normal tracking-tight text-white transition-colors hover:cursor-pointer hover:bg-accent/90"
                                              type="submit"
                                              defaultValue="Create Account!"
                                          />
                                      </div>
                                      <div className="text-sm leading-normal text-white">
                                          <p>
                                              You’ll receive a confirmation email in your inbox with a link
                                              so you can activate your account. If you have any problems,{" "}
                                              <a
                                                  className="text-accent hover:text-primary dark:hover:text-white transition-colors"
                                                  href="_yt1-contact.html"
                                              >
                                                  contact us
                                              </a>
                                              !
                                          </p>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </main>

    </div>
  )
}

export default SignUp
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './DetailPage.css'
import axios from 'axios'

const DetailPage = () => {
    const[data,setData]=useState('')
    const {id,name}=useParams()
    useEffect(()=>{
        const fetch=async()=>{
            const resp=await axios.get(`http://localhost:3000/api/v1/${name}/${id}`)
            if(resp){
                setData(resp.data)
            }
        }
        fetch()
    },[])
    console.log("datatad iff",id)
    console.log("DAtAFADA MA<",name)
    console.log("DATAAAAAAA",data)
  return (
      <div>
          <div className="page-heading pt-8 pb-12 text-center md:pt-28 md:pb-28 bg-[#1b1b29]">
              <div className="container">
                  <h1 className="relative mb-3 mt-[40px] md:mt-0 text-3xl font-bold leading-tight tracking-tight md:text-5xl text-white">
                      Country Detail Page
                  </h1>
                  <ol className=" relative flex flex-wrap justify-center divide-x-2 divide-white text-xs font-bold uppercase leading-none">
                      <li className="px-[10px] text-white">
                          <Link href="/">Home</Link>
                      </li>
                      <li className="text-white px-[10px]">Country</li>
                  </ol>
              </div>
          </div>
          {
                   data && Object.keys(data).length > 0 && (
          <section className="item-details-area">

              <div className="container">
                 
                        <div className="flex flex-col md:flex-row justify-between gap-12">
                      <div className="w-[100%] md:w-[40%]">
                          {/* Project Card */}
                          <div className="card project-card no-hover">
                              <div className="media">
                                  <img
                                      className="card-img-top avatar-max-lg"
                                      src={`/Images/${data.casinoimage}`}
                                      alt=""
                                  />
                                  <div className="media-body ml-4">
                                      <h4 className="m-0 text-[1.5rem] font-bold text-white">{data.casinoname}</h4>
                                      <div className="countdown-times">
                                          <h6 className="my-2 text-[1rem] font-semibold">{data.countryname}</h6>
                                          {/* <div
                                              className="countdown flex"
                                              data-date="2022-06-30"
                                              style={{ display: "none" }}
                                          /> */}
                                          <h6 className="my-2 text-[1rem] font-semibold">Welcome Bonus ${data.price}</h6>
                                      </div>
                                  </div>
                              </div>
                              {/* Project Body */}
                              <div className="card-body">
                                  <div className="items">
                                      {/* Single Item */}
                                      <div className="single-item">
                                          <span>People Choice : </span>
                                          <span>{data.likes}%</span>
                                      </div>
                                    
                                  </div>
                                
                              </div>
                              {/* Project Footer */}
                              <div className="project-footer flex items-center mt-4 mt-md-5">
                                  <Link to={data.playlink} target='_blank'
                                  className="btn btn-bordered-white btn-smaller" href="login.html">
                                      Claim Token
                                  </Link>
                                  {/* Social Share */}
                                  <div className="social-share ml-auto">
                                      <ul className="flex list-unstyled">
                                          <li>
                                              <a href="#">
                                                  <svg
                                                      className="svg-inline--fa fa-twitter"
                                                      aria-hidden="true"
                                                      focusable="false"
                                                      data-prefix="fab"
                                                      data-icon="twitter"
                                                      role="img"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 512 512"
                                                      data-fa-i2svg=""
                                                  >
                                                      <path
                                                          fill="currentColor"
                                                          d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
                                                      />
                                                  </svg>
                                                  {/* <i class="fab fa-twitter"></i> Font Awesome fontawesome.com */}
                                              </a>
                                          </li>
                                          <li>
                                              <a href="#">
                                                  <svg
                                                      className="svg-inline--fa fa-telegram"
                                                      aria-hidden="true"
                                                      focusable="false"
                                                      data-prefix="fab"
                                                      data-icon="telegram"
                                                      role="img"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 496 512"
                                                      data-fa-i2svg=""
                                                  >
                                                      <path
                                                          fill="currentColor"
                                                          d="M248 8C111 8 0 119 0 256S111 504 248 504 496 392.1 496 256 384.1 8 248 8zM362.1 176.7c-3.732 39.22-19.88 134.4-28.1 178.3-3.476 18.58-10.32 24.82-16.95 25.42-14.4 1.326-25.34-9.517-39.29-18.66-21.83-14.31-34.16-23.22-55.35-37.18-24.49-16.14-8.612-25 5.342-39.5 3.652-3.793 67.11-61.51 68.33-66.75 .153-.655 .3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283 .746-104.6 69.14-14.85 10.19-26.89 9.934c-8.855-.191-25.89-5.006-38.55-9.123-15.53-5.048-27.88-7.717-26.8-16.29q.84-6.7 18.45-13.7 108.4-47.25 144.6-62.3c68.87-28.65 83.18-33.62 92.51-33.79 2.052-.034 6.639 .474 9.61 2.885a10.45 10.45 0 0 1 3.53 6.716A43.76 43.76 0 0 1 362.1 176.7z"
                                                      />
                                                  </svg>
                                                  {/* <i class="fab fa-telegram"></i> Font Awesome fontawesome.com */}
                                              </a>
                                          </li>
                                          <li>
                                              <a href="#">
                                                  <svg
                                                      className="svg-inline--fa fa-globe"
                                                      aria-hidden="true"
                                                      focusable="false"
                                                      data-prefix="fas"
                                                      data-icon="globe"
                                                      role="img"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 512 512"
                                                      data-fa-i2svg=""
                                                  >
                                                      <path
                                                          fill="currentColor"
                                                          d="M352 256C352 278.2 350.8 299.6 348.7 320H163.3C161.2 299.6 159.1 278.2 159.1 256C159.1 233.8 161.2 212.4 163.3 192H348.7C350.8 212.4 352 233.8 352 256zM503.9 192C509.2 212.5 512 233.9 512 256C512 278.1 509.2 299.5 503.9 320H380.8C382.9 299.4 384 277.1 384 256C384 234 382.9 212.6 380.8 192H503.9zM493.4 160H376.7C366.7 96.14 346.9 42.62 321.4 8.442C399.8 29.09 463.4 85.94 493.4 160zM344.3 160H167.7C173.8 123.6 183.2 91.38 194.7 65.35C205.2 41.74 216.9 24.61 228.2 13.81C239.4 3.178 248.7 0 256 0C263.3 0 272.6 3.178 283.8 13.81C295.1 24.61 306.8 41.74 317.3 65.35C328.8 91.38 338.2 123.6 344.3 160H344.3zM18.61 160C48.59 85.94 112.2 29.09 190.6 8.442C165.1 42.62 145.3 96.14 135.3 160H18.61zM131.2 192C129.1 212.6 127.1 234 127.1 256C127.1 277.1 129.1 299.4 131.2 320H8.065C2.8 299.5 0 278.1 0 256C0 233.9 2.8 212.5 8.065 192H131.2zM194.7 446.6C183.2 420.6 173.8 388.4 167.7 352H344.3C338.2 388.4 328.8 420.6 317.3 446.6C306.8 470.3 295.1 487.4 283.8 498.2C272.6 508.8 263.3 512 255.1 512C248.7 512 239.4 508.8 228.2 498.2C216.9 487.4 205.2 470.3 194.7 446.6H194.7zM190.6 503.6C112.2 482.9 48.59 426.1 18.61 352H135.3C145.3 415.9 165.1 469.4 190.6 503.6V503.6zM321.4 503.6C346.9 469.4 366.7 415.9 376.7 352H493.4C463.4 426.1 399.8 482.9 321.4 503.6V503.6z"
                                                      />
                                                  </svg>
                                                  {/* <i class="fas fa-globe"></i> Font Awesome fontawesome.com */}
                                              </a>
                                          </li>
                                          <li>
                                              <a href="#">
                                                  <svg
                                                      className="svg-inline--fa fa-discord"
                                                      aria-hidden="true"
                                                      focusable="false"
                                                      data-prefix="fab"
                                                      data-icon="discord"
                                                      role="img"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 640 512"
                                                      data-fa-i2svg=""
                                                  >
                                                      <path
                                                          fill="currentColor"
                                                          d="M524.5 69.84a1.5 1.5 0 0 0 -.764-.7A485.1 485.1 0 0 0 404.1 32.03a1.816 1.816 0 0 0 -1.923 .91 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.14-30.6 1.89 1.89 0 0 0 -1.924-.91A483.7 483.7 0 0 0 116.1 69.14a1.712 1.712 0 0 0 -.788 .676C39.07 183.7 18.19 294.7 28.43 404.4a2.016 2.016 0 0 0 .765 1.375A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.1 430.4a1.86 1.86 0 0 0 -1.019-2.588 321.2 321.2 0 0 1 -45.87-21.85 1.885 1.885 0 0 1 -.185-3.126c3.082-2.309 6.166-4.711 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.23 43.92 200.4 43.92 295.5 0a1.812 1.812 0 0 1 1.924 .233c2.944 2.426 6.027 4.851 9.132 7.16a1.884 1.884 0 0 1 -.162 3.126 301.4 301.4 0 0 1 -45.89 21.83 1.875 1.875 0 0 0 -1 2.611 391.1 391.1 0 0 0 30.01 48.81 1.864 1.864 0 0 0 2.063 .7A486 486 0 0 0 610.7 405.7a1.882 1.882 0 0 0 .765-1.352C623.7 277.6 590.9 167.5 524.5 69.84zM222.5 337.6c-28.97 0-52.84-26.59-52.84-59.24S193.1 219.1 222.5 219.1c29.67 0 53.31 26.82 52.84 59.24C275.3 310.1 251.9 337.6 222.5 337.6zm195.4 0c-28.97 0-52.84-26.59-52.84-59.24S388.4 219.1 417.9 219.1c29.67 0 53.31 26.82 52.84 59.24C470.7 310.1 447.5 337.6 417.9 337.6z"
                                                      />
                                                  </svg>
                                                  {/* <i class="fab fa-discord"></i> Font Awesome fontawesome.com */}
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              {/* Blockchain Icon */}
                              <div className="blockchain-icon">
                                  <img src="assets/img/content/ethereum.png" alt="" />
                              </div>
                          </div>
                      </div>
                      <div className="w-[100%] md:w-[60%]">
                          <div className="card project-card single-item-content no-hover item ml-lg-4">
                              <h3 className="m-0 text-[2rem] font-semibold text-white">About the {data.casinoname}</h3>
                              <p className='my-[1.5rem] mx-0 text-[0.9  rem] text-white leading-12 tracking-wider'>
                                  {data.about}.
                              </p>
                             
                          </div>
                        
                          <div className="card project-card single-item-content no-hover item ml-lg-4">
                              <h3 className="m-0 text-[2rem] font-semibold text-white">{data.casinoname} Overview</h3>
                              <p className='my-[1.5rem] mx-0 text-[1rem] text-white'>
                                  Winning Bonus ${data.price}
                              </p>
                              {/* <h4 className='my-[0.5rem] mx-0 text-[1.5rem] font-semibold text-white'>WInning bonus </h4> */}
                              <ul className='list-disc pl-[30px] text-white'>
                                {
                                    data.casinodetail.map((item)=>(
                                        <li className='text-[1rem] font-normal'>{item}</li>
                                    ))
                                }
                                   
                                      </ul>
                                      <div className="mt-5 text-end">
                                          <Link to={data.playlink} target='_blank' className=" btn btn-primary">
                                              Play Now
                                          </Link>
                                      </div>
                          </div>
                          {/* <div className="card project-card single-item-content no-hover item ml-lg-4">
                              <h3 className="m-0">Token Metrics</h3>
                              <p>
                                  Even the all-powerful Pointing has no control about the blind texts
                                  it is an almost unorthographic life One day however a small line of
                                  blind text by the name of Lorem Ipsum decided to leave for the far
                                  World of Grammar.
                              </p>
                             
                              <div className="table-responsive">
                                  <table className="table token-content table-borderless table-sm">
                                      <tbody>
                                          <tr>
                                              <td>Fundraised:</td>
                                              <td>$500,000</td>
                                          </tr>
                                          <tr>
                                              <td>Platfrom Raise:</td>
                                              <td>$120,000 + $5,000</td>
                                          </tr>
                                          <tr>
                                              <td>Price:</td>
                                              <td>$0.05</td>
                                          </tr>
                                          <tr>
                                              <td>Lock-up:</td>
                                              <td>
                                                  25% unlocked on TGE, 4 months cliff, then 5% on a monthly
                                                  basis
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                          <div className="card project-card single-item-content no-hover item ml-lg-4">
                              <h3 className="m-0">Roadmap</h3>
                              <p>
                                  Far far away, behind the word mountains, far from the countries
                                  Vokalia and Consonantia, there live the blind texts. Separated they
                                  live in Bookmarksgrove right at the coast of the Semantics, a large
                                  language ocean.
                              </p>
                              <p>
                                  A small river named Duden flows by their place and supplies it with
                                  the necessary regelialia. It is a paradisematic country, in which
                                  roasted parts of sentences fly into your mouth.
                              </p>
                          </div> */}
                      </div>
                  </div>
                  
                  <div className="bg-[#1b1b29] py-[48px] px-[30px] mt-10 md:px-[80px]  text-[24px] leading-[34px] font-bold text-white">
							<p>Review </p>
                            <p className='before:content-[open-quote] after:content-[close-quote]'>{data.review[1]}</p>
                            <p className='text-end'>By  {data.review[0]}</p>
						</div>

                        <div className="hidden col-span-full md:col-start-3 md:col-end-11 mt-8 lg:mt-16 md:w-[60%]">
  <h2 className="mb-10 text-white text-3xl md:text-5xl font-bold leading-none tracking-tighter text-primary dark:text-white md:mb-20 lg:mb-28">
    Leave a Reply
  </h2>
  <form className="grid grid-cols-1 md:grid-cols-3 gap-7" action="#">
    <div className="md:col-span-3">
      <textarea
        className="block border-base rounded-lg w-full px-7 py-4 leading-8 tracking-tight text-primary transition-all duration-150 placeholder:text-gray-500/60 focus:border-indigo-500 focus:outline-0 focus:ring-0 dark:border-white/10 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500/80 dark:focus:border-indigo-500 h-44 md:h-60"
        name="post-comment"
        id="post-comment"
        placeholder="Your Comment"
        defaultValue={""}
      />
    </div>
    <div className="md:col-span-1">
      <input
        className="group-[.is-success]:bg-input-success group-[.is-error]:border-danger rounded-md group-[.is-error]:bg-input-invalid group-[.is-error]:text-danger group-[.is-success]:pr-16 group-[.is-invalid]:pr-16 border-base bg-[length:14px_14px,_46px_46px] bg-[position:right_26px_center,_right_10px_center] bg-no-repeat font-bold leading-8 tracking-tight text-primary transition-all duration-150 placeholder:font-normal placeholder:text-gray-500/60 focus:border-indigo-500 focus:outline-0 focus:ring-0 dark:border-white/10 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500/80 dark:focus:border-indigo-500 w-full px-7 py-4"
        type="text"
        name="post-name"
        id="post-name"
        defaultValue=""
        placeholder="Name"
      />
      <p className="group-[.is-error]:block mt-2 hidden text-sm font-bold text-danger" />
    </div>
    <div className="md:col-span-1">
      <input
        className="group-[.is-success]:bg-input-success group-[.is-error]:border-danger group-[.is-error]:bg-input-invalid group-[.is-error]:text-danger group-[.is-success]:pr-16 group-[.is-invalid]:pr-16 border-base bg-[length:14px_14px,_46px_46px] bg-[position:right_26px_center,_right_10px_center] bg-no-repeat font-bold leading-8 tracking-tight text-primary transition-all duration-150 placeholder:font-normal placeholder:text-gray-500/60 focus:border-indigo-500 focus:outline-0 focus:ring-0 dark:border-white/10 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500/80 dark:focus:border-indigo-500 w-full px-7 py-4 rounded-md"
        type="email"
        name="post-email"
        id="post-email"
        defaultValue=""
        placeholder="Email"
      />
      <p className="group-[.is-error]:block mt-2 hidden text-sm font-bold text-danger" />
    </div>
    <div className="md:col-span-1">
      <input
        className="rounded-md group-[.is-success]:bg-input-success group-[.is-error]:border-danger group-[.is-error]:bg-input-invalid group-[.is-error]:text-danger group-[.is-success]:pr-16 group-[.is-invalid]:pr-16 border-base bg-[length:14px_14px,_46px_46px] bg-[position:right_26px_center,_right_10px_center] bg-no-repeat font-bold leading-8 tracking-tight text-primary transition-all duration-150 placeholder:font-normal placeholder:text-gray-500/60 focus:border-indigo-500 focus:outline-0 focus:ring-0 dark:border-white/10 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500/80 dark:focus:border-indigo-500 w-full px-7 py-4"
        type="url"
        name="post-website"
        id="post-website"
        defaultValue=""
        placeholder="Website"
      />
      <p className="group-[.is-error]:block mt-2 hidden text-sm font-bold text-danger" />
    </div>
    <div className="md:col-span-3">
      <input
        className="rounded-md bg-accent font-bold text-white text-lg tracking-tight py-5 leading-normal mt-4 md:mt-8 hover:cursor-pointer hover:bg-accent/90 transition-colors block w-full"
        type="submit"
        defaultValue="Post Comment"
      />
    </div>
  </form>
</div>

              </div>
          </section>
  )
}

    </div>
  )
}

export default DetailPage
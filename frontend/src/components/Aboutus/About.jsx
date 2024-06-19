import React from 'react'
import { MdOutlineSecurity } from "react-icons/md";
import { BsTransparency } from "react-icons/bs";
import { FaMoneyBills } from "react-icons/fa6";
import { TbCirclesRelation } from "react-icons/tb";
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div>
            <div className="page-heading pt-8 pb-12 text-center md:pt-28 md:pb-28 bg-[#1b1b29]">
                <div className="container">
                    <h1 className="relative mb-3 mt-[40px] md:mt-0 text-3xl font-bold leading-tight tracking-tight md:text-5xl text-white">
                        About Us
                    </h1>
                    <ol className=" relative flex flex-wrap justify-center divide-x-2 divide-white text-xs font-bold uppercase leading-none">
                        <li className="px-[10px] text-white">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="text-white px-[10px]">About Us</li>
                    </ol>
                </div>
            </div>
            <div className="px-6 page-heading pt-8 pb-12 text-center md:pt-16 md:pb-28 bg-[#29293d]">
                <div className="container">
                    {/* <h1 className="underline py-5 relative mb-3 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                        About Us
                    </h1> */}
                    <div>
                        <p className='text-white poppins-bold text-1.5xl text-semibold italic first-letter:font-bold font-semibold flex tracking-wide'>Glad to have you onboard. At thecasinoloot, we take great pride in ensuring all our players have a fantastic time. Finding suitable online casinos among the vast selections available is challenging, but we have everything you need. You will discover casinos to suit every preference, offering classic games such as blackjack, live sport, roulette, poker, and themed slots with exciting features. All the casinos are laced with the latest technology, enticing bonuses, round-the-clock customer service, and numerous jackpots waiting for you.
                        </p>
                        <MdOutlineSecurity className='py-1 w-full h-16 flex items-center justify-center' color='#fff'/>
                    </div>
                    <p className='text-white poppins-bold text-1.5xl text-semibold italic first-letter:font-bold font-semibold flex tracking-wide'>Security and safety can be a concern while dealing online you can leave that to us. We collaborate with licensed and reputable casinos to provide a worry-free gaming experience. These casinos strictly adhere to regulations, undergo regular audits, and ensure the confidentiality of your information so that you can focus on enjoying your favorite games. The casinos featured on our platform are thoroughly evaluated by experienced industry players with decades of knowledge. They have been selected based on their reputation, reviews, payouts, and exceptional bonuses.
                    </p>
                    <BsTransparency color='#fff' className='py-1 w-full h-16 flex items-center justify-center' />
                    <p className='text-white poppins-bold text-1.5xl text-semibold italic first-letter:font-bold font-semibold flex tracking-wide'>Transparency is key for us while listing casinos on our website. Some online casinos offer bonuses with high wagering requirements, or sometimes, they do not fully disclose this information. Certain games may not contribute much towards fulfilling these requirements. We make sure you are fully informed about every aspect of your bonus.
                    </p>
                    <FaMoneyBills color='#fff' className='py-1 w-full h-16 flex items-center justify-center' />
                    <p className='text-white poppins-bold text-1.5xl text-semibold italic first-letter:font-bold font-semibold tracking-wide'>For real money players, it is crucial to check withdrawal restrictions when playing without a bonus. While the chances of winning with real money, without a bonus, are high, it also carries risks.Furthermore, we aim to boost your gaming experience with exciting bonuses and promotions. Whether welcome bonuses, ongoing offers, cashback rewards, weekly loyalty bonuses, or incentives for loyal players, there are plenty of opportunities to boost your winnings and extend your gameplay.
                    </p>
                    <TbCirclesRelation color='#fff' className='w-full h-16 flex items-center justify-center' />
                    <p className='text-white poppins-bold text-2xl font-bold text-center text-black-500 tracking-wide'>Curious about why you should choose us? By joining our casino community, you can look forward to numerous benefits:
                    </p>
                    <ul class="text-white list-disc list-inside text-lg font-semibold leading-relaxed text-gray-800 space-y-2">
                        <li className='poppins-semibold text font-bold text-center text-black-100 tracking-wide'>Stay updated on the latest promotions, new game releases, and updates from top online casinos to enhance your winning potential.
                        </li>
                        <li className='poppins-semibold text font-bold text-center text-black-100 tracking-wide'>Enjoy exclusive promotions and bonuses tailored for you as a valued member.
                        </li>
                        <li className='poppins-semibold text font-bold text-center text-black-100 tracking-wide'>Be among the first to try out the newest games in the online casino world, from exciting slots to captivating table games.
                        </li>
                        <li className='poppins-semibold text font-bold text-center text-black-100 tracking-wide'>
                            Access licensed and reliable casinos where you can play with peace of mind.
                        </li>
                    </ul>
                    <h1 className='text-3xl font-bold animate-pulse py-5'>Join us for a thrilling adventure with fun, rewards, and nonstop entertainment!</h1>
                </div>
            </div>
      </div>
    )
}

export default About
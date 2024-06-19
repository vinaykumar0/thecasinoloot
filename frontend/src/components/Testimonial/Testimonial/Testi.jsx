import React from 'react'
import './Testi.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Container } from 'react-bootstrap';/
import Reuse from './Reuse';
const Testi = () => {
    var settings = {
        dots: true,
        autoplay: true,
        speed:1000,
        autoplaySpeed: 1500,
        infinite: true,
        // nextArrow: <NextBtn />,
        // prevArrow: <PreviousBtn />,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 787,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className='bg-colooo bg-[#1b1b29]' style={{position:'relative'}}>  
            <div className='gallery-area ptb-100 overflow-hidden'>
      <div className='testimonial-area ptb-100'>
          {/* <Container> */}
          <Slider {...settings} className="mb-5 mt-4">
                  <Reuse/>
                  <Reuse />
                  <Reuse/>
              </Slider>
              <div className="user"><img src="https://bimberonline.com/betcourse/wp-content/uploads/sites/8/2023/12/portrait-of-asian-man-smiling-outdoors-at-night-2021-08-27-14-37-31-utc-min.jpg" alt="image" className='user1-image' /></div>
                        <div className="user"><img src="https://bimberonline.com/betcourse/wp-content/uploads/sites/8/2023/12/studio-portrait-of-smiling-african-american-male-m-2021-12-09-18-50-55-utc-min.jpg" alt="image" className='user2-image' /></div>
                        <div className="user"><img src="https://bimberonline.com/betcourse/wp-content/uploads/sites/8/2023/12/portrait-of-smiling-woman-at-shopping-mall-2021-08-28-16-11-16-utc-min.jpg" alt="image" className='user3-image' /></div>
                        <div className="user"><img src="https://bimberonline.com/betcourse/wp-content/uploads/sites/8/2023/12/portrait-of-young-woman-2022-01-20-19-09-27-utc-min.jpg" alt="image" className='user4-image' /></div>

                {/* </Container> */}
                </div>
            </div>
            </div>
  )
}

export default Testi
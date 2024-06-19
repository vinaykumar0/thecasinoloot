import React from 'react'
import { BsChatDotsFill } from "react-icons/bs";
const Reuse = () => {
  return (
      <div className="testimonial-item">
          <BsChatDotsFill size={60} color='#fff' style={{marginBottom:'20px'}} className='w-[100%]'/>
          {/* <img src="https://bimberonline.com/betcourse/wp-content/uploads/sites/8/2023/12/quote-min.png" alt="" className='testi-image' /> */}
          <h2>See what our customers says</h2>
     
          <p>
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point of using
          </p>
          <h4 style={{fontSize:'30px',color:'#fff',fontWeight:'900'}}>Aloin Lden</h4>
          {/* <span style={{ color:'#838383'}}>Web Developer</span> */}
      </div>

  )
}

export default Reuse
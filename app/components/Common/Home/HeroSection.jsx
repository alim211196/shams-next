import React from 'react'
import heroBanner from '../../../assets/images/main-img.png';
import ratingBanner from '../../../assets/images/rating-banner.svg';
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="heroseSection">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 col-md-9 col-12">
          <div className="hero-banner">
            <Image src={heroBanner} className="img-fluid" alt="course-img" />
            <div className="bannerContant">
              <h2>Upskill & Advance your Media Pro.</h2>
              <p>Join thousands who’ve mastered communication skills.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-12">
          <div className="heroRight">
            <div className="heroRightTop">
              <Image src={ratingBanner} alt="star" className="img-fluid" />
              <h3>Public Speaking Course</h3>
              <p>Sorem ipsum dolor sit amet, </p>
              <div className="hour-min">1 Hr 22 Min</div>
            </div>
            <div className="heroRightBottom">
              <div className="course-price">
                <span className="current-price">AED 40</span>
                <span className="off-price"><span>AED 50</span> 10%off </span>
              </div>
              <div className="enrollBtn">
                <a className="btnBorder" href="">Enroll Now</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeroSection
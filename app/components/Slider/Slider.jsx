import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dummyData from '../../dummyJson/trendingCard.json';
import TrendingSection from "../Common/Home/TrendingSection";

const CourseSlider = ({title='',subTitle='',isHomePage=false,isTopRated=false}) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    margin: 20,
    padding: 10,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          stagePadding: 180,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={`courseSection ${isTopRated && "topRatedBg"}`}>
      <div className="container">
        <div className="topRated">
          <div className="sectionTitle left">
            <h2 className="title">
              {title} {isHomePage && <span>Courses</span>}
            </h2>
          </div>
          {subTitle && <div className="topRated-right">
            <p> {subTitle}</p>
          </div>}
        </div>
        </div>
        <div className="container">
        <Slider {...settings} className="trendindCard">
             {dummyData.map(course => (
              <TrendingSection key={course.id} course={course} />
            ))}
        </Slider>
        </div>
      
    </section>
  );
};

export default CourseSlider;

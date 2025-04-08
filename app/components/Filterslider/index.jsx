import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dummyData from '../../dummyJson/trendingCard.json';
import RecommendedCard from "../Common/CourseListing/RecommendedCard";
// import TrendingSection from "../Common/Home/TrendingSection";


const FilterSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.1,
    margin: 20,
    padding: 10,
    autoplay: false,
    stagePadding: 200,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
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
    <section className="courseSection recoCourses">
      <div className="container">
        <div className="topRated">
          <div className="sectionTitle left">
            <h2 className="title">
            Recommended courses
            </h2>
          </div>
          {/* <div className="topRated-right">
            <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          </div> */}
        </div>
        </div>
        <div className="container">
        <Slider {...settings} className="filterCard">
        {dummyData.map(course => (
              <RecommendedCard key={course.id} course={course} />
            ))}
        </Slider>
        </div>
      
    </section>
  );
};

export default FilterSlider;
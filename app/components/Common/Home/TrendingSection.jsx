import React from 'react';
import Link from "next/link";
import Image from "next/image";
import courseImg from '../../../assets/images/courseimage.jpg';
import certiImg from '../../../assets/images/certification-icon.svg';
import starIcon from '../../../assets/images/stars.svg';

const TrendingSection = ({ course }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 couresCard">
      <div className="course-card">
        <div className="course-img">
          <Image src={courseImg} className="img-fluid" alt="course-img" width={300} height={200} />
          <div className="trend-certi">
            <ul>
              <li><a className="trending">Trending</a></li>
              <li><a className="certificate"> <Image src={certiImg} alt="Certification" width={20} height={20} /> Certification</a></li>
            </ul>
          </div>
        </div>

        <div className="course-card-body">
          <div className="course-card-top">
            <div className="card-top">
              <h4 className="course-card-title">
                {course.title}
              </h4>
              <p>{course.description}</p>
            </div>
            <span className="hour-min">{course.duration}</span>
          </div>
          <ul className="course-review">
            <li><span className="cview">{course.views}</span></li>
            <li><span className="cstar">{course.rating} <Image src={starIcon} alt="start icon" width={20} height={20} /> </span></li>
            <li><span className="creview">{course.reviews}</span></li>
          </ul>

          <div className="course-card-bottom">
            <div className="course-price">
              <span className="current-price">{course.currentPrice}</span>
              <span className="off-price"><span>{course.originalPrice}</span> {course.discount} </span>
            </div>
            <Link href='' className="pirmaryBtn">Enroll Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingSection;
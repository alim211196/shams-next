import React from 'react';
import learnerImg from '../../../assets/images/learner-img.svg';
import learnerOne from '../../../assets/images/learner-img-1.svg';
import learnerTwo from '../../../assets/images/learner-img-2.svg';
import learnerThree from '../../../assets/images/learner-img-3.svg';
import learnerFour from '../../../assets/images/learner-img-4.svg';
import learnerFive from '../../../assets/images/learner-img-5.svg';
import starIcon from '../../../assets/images/stars.svg';
import Image from "next/image";

const LearnerSuccessStroy = () => {
  return ( <section className="sucessSection">
    <div className="container">
      <div className="row align-items-center">

        <div className="sectionTitle">
          <h2 className="title">Success Stories of Our Learners
            Completion of Their Courses</h2>
        </div>

        <div className="success-wrapper">
          <div className="success-item">
            <div className="curveBg">
              <div className="staarImg">
                <Image src={starIcon} alt="start icon" />
              </div>
              <div className="learnerImg">
                <Image src={learnerOne} alt="start icon"/>
              </div>
            </div>
            <div className="successContant">
              <div className="successTop">
                <h2>Cameron Lehner</h2>
                <h4>Global Research Strategist</h4>
              </div>
              <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="success-item">
            <div className="curveBg">
              <div className="staarImg">
                <Image src={starIcon} alt="start icon"/>
              </div>
              <div className="learnerImg">
                <Image src={learnerTwo} alt="start icon"/>
              </div>
            </div>
            <div className="successContant">
              <div className="successTop">
                <h2>Cameron Lehner</h2>
                <h4>Global Research Strategist</h4>
              </div>
              <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="success-item">
            <div className="curveBg">
              <div className="staarImg">
                <Image src={starIcon} alt="start icon"/>
              </div>
              <div className="learnerImg">
                <Image src={learnerThree} alt="learnerImg"/>
              </div>
            </div>
            <div className="successContant">
              <div className="successTop">
                <h2>Cameron Lehner</h2>
                <h4>Global Research Strategist</h4>
              </div>
              <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="success-item">
            <div className="curveBg">
              <div className="staarImg">
                <Image src={starIcon} alt="starIcon"/>
              </div>
              <div className="learnerImg">
                <Image src={learnerFour} alt=""/>
              </div>
            </div>
            <div className="successContant">
              <div className="successTop">
                <h2>Cameron Lehner</h2>
                <h4>Global Research Strategist</h4>
              </div>
              <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="success-item">
            <div className="curveBg">
              <div className="staarImg">
                <Image src={starIcon} alt=""/>
              </div>
              <div className="learnerImg">
                <Image src={learnerFive} alt=""/>
              </div>
            </div>
            <div className="successContant">
              <div className="successTop">
                <h2>Cameron Lehner</h2>
                <h4>Global Research Strategist</h4>
              </div>
              <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default LearnerSuccessStroy
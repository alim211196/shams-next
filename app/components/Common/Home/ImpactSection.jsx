import React from 'react';
import impectImg1 from '../../../assets/images/impect-1.svg';
import impectIcon1 from '../../../assets/images/impect1.svg';
import impectIcon2 from '../../../assets/images/impect2.svg';
import impectIcon3 from '../../../assets/images/impect3.svg';
import impectIcon4 from '../../../assets/images/impect4.svg';
import Image from "next/image";

const ImpactSection = () => {
  return (
    <section className="impectSection">
        <div className="container">
          <div className="row align-items-center">

            <div className="sectionTitle">
              <h2 className="title">Creating impact around the world</h2>
              <p className="subTitle">Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>

            <div className="impect-wrapper">
              <div className="impect-item">
                <div className="impectImg">
                  <Image src={impectImg1} alt=""/>
                </div>
                <h4>100+</h4>
                <p>Courses Offered</p>
              </div>
              <div className="impect-item topSpace">
                <div className="impectImg">
                  <Image src={impectIcon1} alt=""/>
                </div>
                <h4>99%</h4>
                <p>Completion Rate</p>
              </div>
              <div className="impect-item">
                <div className="impectImg">
                  <Image src={impectIcon2} alt=""/>
                </div>
                <h4>10k+</h4>
                <p>Certified Students</p>
              </div>
              <div className="impect-item topSpace">
                <div className="impectImg">
                  <Image src={impectIcon3} alt=""/>
                </div>
                <h4>50+</h4>
                <p>Expert Instructors</p>
              </div>
              <div className="impect-item">
                <div className="impectImg">
                  <Image src={impectIcon4} alt=""/>
                </div>
                <h4>10+</h4>
                <p>Carrier Path</p>
              </div>

            </div>
          </div>
        </div>
      </section>
  )
}

export default ImpactSection
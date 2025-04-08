import React from 'react';
import whyImg from '../../../assets/images/why-img.svg';
import whyExpert from '../../../assets/images/why-expert.svg';
import realWorld from '../../../assets/images/real-world.svg';
import flexibleLearn from '../../../assets/images/flexible-learn.svg';
import Image from "next/image";

const WhyShams = () => {
  return (
    <section className="whySection">
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6">
          <div className="sectionTitle">
            <h2 className="title">Why Choose <span> SHAMS Training?</span></h2>
          </div>
          <div className="whyWrapper">
            <div className="whyChoose">
              <div className="whyIcon">
                <Image src={whyExpert} className="img-fluid" alt="whyExpert" />
              </div>
              <div className="whycontant">
                <h3>Expert Trainers</h3>
                <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
              </div>
            </div>

            <div className="whyChoose">
              <div className="whyIcon">
                <Image src={realWorld} className="img-fluid" alt="whyExpert" />
              </div>
              <div className="whycontant">
                <h3>Real-World Training</h3>
                <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
              </div>
            </div>


            <div className="whyChoose">
              <div className="whyIcon">
                <Image src={flexibleLearn} className="img-fluid" alt="whyExpert" />
              </div>
              <div className="whycontant">
                <h3>Flexible Learning Options</h3>
                <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
              </div>
            </div>
          </div>

        </div>
        <div className="col-lg-6">
          <Image src={whyImg} className="img-fluid" alt="whyImg" />
        </div>
      </div>
    </div>
  </section>

  )
}

export default WhyShams
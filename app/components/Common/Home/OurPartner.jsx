import React from 'react';
import partnerImg from '../../../assets/images/partner-1.svg';
import Image from "next/image";

const OurPartner = () => {
  return (
    <section className="our-partner">
        <div className="container-fluid">
          <div className="row">
            <div className="sectionTitle">
              <h2 className="title">Our Partners</h2>
            </div>
            <div className="col-lg-12">
              <div className="partnerWrapper">
                <ul>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                </ul>
              </div>
              <div className="partnerWrapper">
                <ul>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="moreCompany"><a>60+ more companies</a></div>
        </div>
      </section>
  )
}

export default OurPartner